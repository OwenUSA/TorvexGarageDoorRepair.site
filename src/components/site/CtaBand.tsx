import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Door stuck? We can usually be there today.",
  subtitle = "Call or text and talk to a real technician. Open 7am to 7pm, every day.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-paper py-20">
      <div className="container-page">
        <div data-reveal className="card-surface overflow-hidden bg-ink p-10 text-center sm:p-14">
          <h2 className="mx-auto max-w-2xl text-3xl text-ink-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">{subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-md bg-brand px-7 py-4 font-display font-extrabold text-brand-foreground transition-transform hover:scale-[1.02]"
            >
              <Phone className="size-4" />
              Call {site.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-ink-muted/40 px-7 py-4 font-display font-extrabold text-ink-foreground transition-colors hover:border-brand hover:text-brand"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
