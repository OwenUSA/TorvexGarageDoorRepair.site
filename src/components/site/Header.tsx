import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { site } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">

      <div className="border-b border-border bg-background/95 backdrop-blur">
        <div className="container-page grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-md bg-ink">
              <span className="block h-5 w-6 rounded-[3px] border-2 border-brand" />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-lg font-extrabold tracking-tight sm:text-xl">
                Torvex
              </span>
              <span className="block truncate text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Garage Door Repair
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-6 lg:flex">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-brand" }}
                  className="text-sm font-semibold text-foreground transition-colors hover:text-brand"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <a href={site.phoneHref} className="hidden text-right sm:block">
              <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                Call or text 7am–7pm
              </span>
              <span className="flex items-center justify-end gap-2 font-display text-xl font-extrabold text-brand">
                <Phone className="size-4" />
                {site.phone}
              </span>
            </a>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 shrink-0 place-items-center rounded-md border border-border lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="container-page grid gap-1 pb-4 lg:hidden">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="mt-2 rounded-md bg-brand px-3 py-3 text-center font-display font-extrabold text-brand-foreground"
            >
              Call {site.phone}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
