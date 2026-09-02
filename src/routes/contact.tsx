import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { fullAddress, mapEmbedSrc, services, site } from "@/lib/site";

const title = "Contact Torvex Garage Door Repair | Phoenix, AZ";
const description =
  "Call, text, or send a message for garage door repair in Phoenix, AZ. Open 7am-7pm every day. Phone (602) 555-0184.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: title,
          description,
          mainEntity: {
            "@type": "LocalBusiness",
            name: site.name,
            telephone: site.phone,
            email: site.email,
            url: `${site.url}/contact`,
            address: {
              "@type": "PostalAddress",
              streetAddress: site.address.street,
              addressLocality: site.address.city,
              addressRegion: site.address.state,
              postalCode: site.address.zip,
              addressCountry: "US",
            },
            openingHours: "Mo-Su 07:00-19:00",
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

type Errors = Partial<Record<"name" | "phone" | "email" | "message", string>>;

function ContactPage() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const next: Errors = {};
    const name = get("name");
    const phone = get("phone");
    const email = get("email");
    const message = get("message");

    if (!name || name.length > 100) next.name = "Please enter your name (max 100 characters).";
    if (!/^[0-9 ()+\-.]{7,20}$/.test(phone)) next.phone = "Please enter a valid phone number.";
    if (email && (email.length > 255 || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)))
      next.email = "Please enter a valid email address.";
    if (!message || message.length > 1000)
      next.message = "Tell us what's happening (max 1000 characters).";

    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      e.currentTarget.reset();
    }
  }

  const field =
    "mt-1.5 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand";

  return (
    <>
      <section className="bg-ink py-16 text-ink-foreground sm:py-20">
        <div className="container-page">
          <p className="eyebrow">Contact us</p>
          <h1 className="animate-fade-up mt-4 max-w-3xl text-4xl sm:text-5xl">
            Tell us what your door is doing.
          </h1>
          <p className="mt-5 max-w-2xl text-ink-muted">
            Calling is fastest — a real person picks up from 7am to 7pm, every day. Prefer
            typing? Send the form and we'll get back to you the same day.
          </p>
        </div>
      </section>

      <section data-reveal className="bg-background py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <div className="card-surface p-8">
              <h2 className="text-xl">Reach us</h2>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span>
                    <span className="block text-muted-foreground">Call or text</span>
                    <a
                      href={site.phoneHref}
                      className="font-display text-lg font-extrabold text-brand"
                    >
                      {site.phone}
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span>
                    <span className="block text-muted-foreground">Email</span>
                    <a href={`mailto:${site.email}`} className="font-semibold break-all">
                      {site.email}
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span>
                    <span className="block text-muted-foreground">Shop</span>
                    <span className="font-semibold">{fullAddress}</span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span>
                    <span className="block text-muted-foreground">Hours</span>
                    <span className="font-semibold">
                      Monday – Sunday, 7:00 AM – 7:00 PM
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="card-surface overflow-hidden p-0">
              <iframe
                title="Map to the Torvex Garage Door Repair shop"
                src={mapEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full border-0"
              />
            </div>
          </div>

          <div className="card-surface p-8">
            <h2 className="text-xl">Request a quote</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              The more detail you give, the more accurate the estimate.
            </p>

            {sent ? (
              <div className="mt-8 rounded-md border border-brand/40 bg-accent p-6">
                <p className="font-display font-extrabold">Thanks — message received.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  We'll reply the same day during our 7am–7pm hours. If it's urgent, call{" "}
                  <a href={site.phoneHref} className="font-semibold text-brand">
                    {site.phone}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 grid gap-4" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-semibold">
                    Name
                    <input name="name" className={field} maxLength={100} placeholder="Jane Doe" />
                    {errors.name && (
                      <span className="mt-1 block text-xs font-normal text-destructive">
                        {errors.name}
                      </span>
                    )}
                  </label>
                  <label className="block text-sm font-semibold">
                    Phone
                    <input
                      name="phone"
                      className={field}
                      maxLength={20}
                      placeholder="(602) 555-0184"
                    />
                    {errors.phone && (
                      <span className="mt-1 block text-xs font-normal text-destructive">
                        {errors.phone}
                      </span>
                    )}
                  </label>
                </div>

                <label className="block text-sm font-semibold">
                  Email (optional)
                  <input
                    name="email"
                    className={field}
                    maxLength={255}
                    placeholder="you@email.com"
                  />
                  {errors.email && (
                    <span className="mt-1 block text-xs font-normal text-destructive">
                      {errors.email}
                    </span>
                  )}
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-semibold">
                    Service needed
                    <select name="service" className={field} defaultValue={services[0].title}>
                      {services.map((s) => (
                        <option key={s.slug}>{s.title}</option>
                      ))}
                      <option>Something else</option>
                    </select>
                  </label>
                  <label className="block text-sm font-semibold">
                    ZIP code
                    <input name="zip" className={field} maxLength={10} placeholder="85018" />
                  </label>
                </div>

                <label className="block text-sm font-semibold">
                  What's happening?
                  <textarea
                    name="message"
                    rows={5}
                    maxLength={1000}
                    className={field}
                    placeholder="Door won't close, opener clicks but nothing moves..."
                  />
                  {errors.message && (
                    <span className="mt-1 block text-xs font-normal text-destructive">
                      {errors.message}
                    </span>
                  )}
                </label>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center rounded-md bg-brand px-6 py-4 font-display font-extrabold text-brand-foreground transition-transform hover:scale-[1.01]"
                >
                  Send request
                </button>
                <p className="text-xs text-muted-foreground">
                  By sending this form you agree we may contact you about your request.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
