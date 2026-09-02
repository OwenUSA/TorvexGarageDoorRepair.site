import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import { services, site } from "@/lib/site";
import svcSprings from "@/assets/svc-springs.jpg";
import svcOpener from "@/assets/svc-opener.jpg";
import svcTrack from "@/assets/svc-track.jpg";
import svcInstall from "@/assets/svc-install.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

const title = "Garage Door Services in Phoenix | Torvex Garage Door Repair";
const description =
  "Spring repair, opener repair and installation, off-track doors, panel replacement, new garage doors and tune-ups in Phoenix, AZ. Open 7am-7pm daily.";

const images = [svcSprings, svcOpener, svcTrack, svcInstall, gallery1, gallery2];

const steps = [
  { n: "01", t: "Call or send the form", d: "Describe the symptom. We ask a few questions and book a window that fits your day." },
  { n: "02", t: "Diagnosis on site", d: "The tech tests balance, springs, cables, sensors and the opener before quoting anything." },
  { n: "03", t: "Fixed price, then work", d: "You approve a written total. Common parts are on the truck, so most repairs finish that visit." },
  { n: "04", t: "Test and clean up", d: "We cycle the door, re-check safety reversal, lubricate, and leave the driveway clean." },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Garage door services in Phoenix, AZ",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: s.title,
              description: s.blurb,
              areaServed: "Phoenix, AZ",
              provider: { "@type": "LocalBusiness", name: "Torvex Garage Door Repair" },
            },
          })),
        }),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-ink py-20 text-ink-foreground sm:py-24">
        <div className="container-page">
          <p className="eyebrow">Services</p>
          <h1 className="animate-fade-up mt-4 max-w-3xl text-4xl sm:text-6xl">
            Repairs, openers, hardware and new doors.
          </h1>
          <p className="mt-6 max-w-2xl text-ink-muted">
            Residential garage door work across {site.serviceArea}. If it lifts, rolls,
            springs or beeps, we service it — seven days a week from 7am to 7pm.
          </p>
        </div>
      </section>

      <section data-reveal className="bg-background py-20">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article key={s.slug} className="card-surface lift overflow-hidden">
              <img
                src={images[i]}
                alt={s.title}
                loading="lazy"
                width={1024}
                height={768}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                  {s.points.map((p) => (
                    <li key={p}>· {p}</li>
                  ))}
                </ul>
                <a
                  href={site.phoneHref}
                  className="mt-5 inline-flex items-center gap-2 font-display text-sm font-extrabold text-brand"
                >
                  <Phone className="size-4" /> Get a quote
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section data-reveal className="bg-paper py-20">
        <div className="container-page">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl">
            Four steps from broken to working.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="card-surface p-6">
                <p className="font-display text-3xl font-extrabold text-brand">{s.n}</p>
                <p className="mt-3 font-display font-extrabold">{s.t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 font-display font-extrabold text-brand"
          >
            Book a visit <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <CtaBand title="Not sure which repair you need?" subtitle="Describe the symptom on the phone and we'll tell you what it usually is." />
    </>
  );
}
