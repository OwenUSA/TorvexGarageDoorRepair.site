// Renders every route to static HTML.
//
// Nitro's `static` preset is broken with TanStack Start on Nitro v3 beta (the
// prerender crawler 404s on "/" and the SSR build then rejects an html input),
// so we build with `node-server`, boot that server here, and snapshot each
// route ourselves. Every route is static marketing content with no server
// functions, so the crawled HTML is the whole site.
//
// Output: dist/ -- .output/public assets plus one index.html per route.
import { spawn } from "node:child_process";
import { cpSync, mkdirSync, writeFileSync, readdirSync, existsSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";

const PORT = process.env.PRERENDER_PORT || "43117";
const OUT = "dist";
const SERVER = ".output/server/index.mjs";

if (!existsSync(SERVER)) {
  console.error(`[prerender] ${SERVER} missing -- run the build first`);
  process.exit(1);
}

// Route list comes from the file-based router, so it cannot drift from reality.
const routes = readdirSync("src/routes")
  .filter((f) => f.endsWith(".tsx") && f !== "__root.tsx")
  .map((f) => f.replace(/\.tsx$/, ""))
  .map((n) => (n === "index" ? "/" : `/${n}`));

console.log(`[prerender] routes: ${routes.join(" ")}`);

const server = spawn(process.execPath, [SERVER], {
  env: { ...process.env, PORT, HOST: "127.0.0.1" },
  stdio: ["ignore", "pipe", "pipe"],
});
server.stderr.on("data", (d) => process.stderr.write(`[server] ${d}`));

const base = `http://127.0.0.1:${PORT}`;
const stop = () => server.kill();
process.on("exit", stop);

async function waitForServer(timeoutMs = 30000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const r = await fetch(base + "/", { signal: AbortSignal.timeout(2000) });
      if (r.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error("server did not become ready");
}

async function snapshot(route, dest) {
  const res = await fetch(base + route);
  const html = await res.text();
  // A soft-404 or an error page would otherwise ship as if it were real content.
  if (!res.ok && dest !== "404.html") {
    throw new Error(`${route} returned ${res.status}`);
  }
  if (!/<\/html>/i.test(html)) throw new Error(`${route} returned no complete document`);
  const file = join(OUT, dest);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  console.log(`  ${String(res.status).padEnd(3)} ${route.padEnd(18)} -> ${dest} (${html.length}b)`);
}

try {
  await waitForServer();

  rmSync(OUT, { recursive: true, force: true });
  mkdirSync(OUT, { recursive: true });
  cpSync(".output/public", OUT, { recursive: true });

  for (const route of routes) {
    await snapshot(route, route === "/" ? "index.html" : `${route.slice(1)}/index.html`);
  }
  // Nginx serves this for unmatched paths.
  await snapshot("/__prerender_404__", "404.html");

  console.log(`[prerender] wrote ${routes.length + 1} pages to ${OUT}/`);
} finally {
  stop();
}
