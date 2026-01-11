import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Dr. Zahida Sadaf for Ayurvedic-Unani consultations via WhatsApp, phone, or email, and send a message using the contact form.",
};

/**
 * Contact page providing multiple touch points and a general inquiry form.
 */
export default function ContactPage() {
  return (
    <div className="page-shell pb-16">
      <section className="grid gap-10 pt-16 lg:grid-cols-[minmax(0,1fr),minmax(0,0.8fr)] lg:items-start">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-earth-950">We’re here to help</h1>
          <p className="text-lg text-earth-700">
            Reach out for appointments, speaking engagements, or collaborations. Our team
            responds within one business day and provides compassionate guidance throughout
            your healing journey.
          </p>
          <div className="rounded-3xl bg-white/90 p-6 shadow-sm ring-1 ring-earth-100 sm:p-8">
            <h2 className="text-xl font-semibold text-earth-900">Contact details</h2>
            <ul className="mt-4 space-y-3 text-sm text-earth-700">
              <li>
                <strong className="text-earth-900">WhatsApp:</strong>{" "}
                <a className="underline" href="https://wa.me/917667265892" target="_blank" rel="noreferrer">
                  +91 76672 65892
                </a>
              </li>
              <li>
                <strong className="text-earth-900">Email:</strong>{" "}
                <a className="underline" href="mailto:care@drzahidasadaf.com">
                  care@drzahidasadaf.com
                </a>
              </li>
              <li>
                <strong className="text-earth-900">Clinic location:</strong> Hyderabad, Telangana, India
              </li>
              <li>
                <strong className="text-earth-900">Office hours:</strong> Monday – Saturday, 9:00 AM – 7:00 PM IST
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
              <Link className="rounded-full bg-earth-800 px-4 py-2 text-white shadow transition hover:bg-earth-700 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-earth-700 active:scale-[0.98]" href="/consultation">
                Book consultation
              </Link>
              <a
                className="rounded-full bg-earth-500 px-4 py-2 text-white shadow-sm ring-1 ring-earth-600/30 transition hover:bg-earth-600 hover:shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-earth-600 active:scale-[0.98]"
                href="https://wa.me/917667265892"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="rounded-3xl bg-white/70 p-6 shadow-inner ring-1 ring-earth-100 sm:p-8">
            <h2 className="text-xl font-semibold text-earth-900">Connect on social media</h2>
            <ul className="mt-4 space-y-2 text-sm text-earth-700">
              <li>
                <a className="underline" href="https://www.instagram.com/drzahidasadaf/?utm_source=website" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a className="underline" href="https://www.facebook.com/zahida.sadaf.31?utm_source=website" target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a className="underline" href="https://www.youtube.com/@dr.zahidasadaf4498?utm_source=website" target="_blank" rel="noreferrer">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Desktop breakpoint keeps the inquiry form visually balanced beside support cards */}
        <div className="rounded-3xl bg-earth-800/95 p-8 text-earth-50 shadow-lg sm:p-10">
          <h2 className="text-2xl font-semibold text-white">Send us a message</h2>
          <p className="mt-3 text-earth-100">
            Share your health goals, preferred consultation mode, and any urgent questions. We
            will follow up with tailored next steps.
          </p>
          <form className="mt-6 space-y-5" action="#" method="post">
            <div>
              <label htmlFor="contact-name">Full name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="contact-email">Email address</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="contact-phone">Phone / WhatsApp</label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="Include country code"
                autoComplete="tel"
              />
            </div>
            <div>
              <label htmlFor="contact-message">How can we support you?</label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                placeholder="Share your symptoms, goals, and preferred consultation time"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-full bg-earth-500 px-6 py-3 text-sm font-semibold text-white shadow-md ring-1 ring-earth-600/30 transition hover:bg-earth-600 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.99]"
              >
                Submit message
              </button>
            </div>
          </form>
          <div className="mt-8 rounded-2xl bg-white/10 p-5 text-sm">
            <h3 className="font-semibold text-white">Clinic location</h3>
            <p className="mt-2 text-earth-100">
              Hyderabad, Telangana, India. Virtual consultations are available for clients in
              Canada, the United States, the United Kingdom, Australia, and beyond.
            </p>
            <div className="mt-4 h-40 w-full rounded-xl bg-gradient-to-br from-earth-700/50 to-earth-500/40 p-4 text-xs text-earth-50">
              Interactive map integration coming soon.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
