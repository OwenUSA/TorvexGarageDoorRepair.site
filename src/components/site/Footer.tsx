import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { site, fullAddress } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-extrabold">Torvex</p>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ink-muted">
            Garage Door Repair
          </p>
          <p className="mt-5 max-w-xs text-sm text-ink-muted">
            Local garage door repair, openers, and new installs. Open 7am to 7pm, every
            day of the week.
          </p>
          <a
            href={site.phoneHref}
            className="mt-6 inline-flex rounded-md border border-ink-muted/40 px-5 py-3 font-display font-extrabold transition-colors hover:border-brand hover:text-brand"
          >
            {site.phone}
          </a>

          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
              <span
                key={i}
                aria-hidden="true"
                className="grid size-9 place-items-center rounded-full border border-ink-muted/40 text-ink-muted"
              >
                <Icon className="size-4" />
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
            Services
          </p>
          <ul className="mt-5 space-y-3 text-sm text-ink-muted">
            <li>
              <Link to="/services" className="hover:text-ink-foreground">
                Spring repair
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-ink-foreground">
                Opener repair & install
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-ink-foreground">
                Off-track & rollers
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-ink-foreground">
                Panel replacement
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-ink-foreground">
                New door installation
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
            Company
          </p>
          <ul className="mt-5 space-y-3 text-sm text-ink-muted">
            <li>
              <Link to="/about" className="hover:text-ink-foreground">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-ink-foreground">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-ink-foreground">
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
            Our shop
          </p>
          <address className="mt-5 space-y-3 text-sm not-italic text-ink-muted">
            <p>{fullAddress}</p>
            <p>{site.hours}</p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-ink-foreground">
                {site.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}
