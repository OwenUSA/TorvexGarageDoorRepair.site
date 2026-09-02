// @lovable.dev/vite-tanstack-config already includes TanStack devtools, tanstackStart,
// viteReact, tailwindcss, tsConfigPaths, nitro, VITE_* env injection, the @ path alias,
// React/TanStack dedupe and the error logger plugins -- do NOT add them manually or the
// app breaks with duplicate plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  // Build a plain Node server rather than a Cloudflare worker. `bun run build` then
  // runs scripts/prerender.mjs, which snapshots every route to dist/ for nginx.
  nitro: { preset: "node-server" },
});
