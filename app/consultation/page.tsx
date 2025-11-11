import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultation & Booking",
  description:
    "Book an Ayurvedic-Unani consultation with Dr. Zahida Sadaf. Review the step-by-step process, pricing, and intake form to begin your healing journey.",
};

const steps = [
  {
    title: "Say hello on WhatsApp",
    description: "Start by sending a message to +91 76672 65892 to introduce yourself and share urgent concerns.",
  },
  {
    title: "Complete the wellness questionnaire",
    description: "Receive a secure form covering lifestyle, digestion, sleep, and current medications to tailor your plan.",
  },
  {
    title: "Confirm consultation with payment",
    description:
      "Submit the consultation fee for your region, share the receipt on WhatsApp, and receive confirmation within 12 hours.",
  },
  {
    title: "Attend your 45–60 minute session",
    description:
      "Connect via phone (15–30 minutes) or video call for skin concerns. Discuss lab reports, symptoms, and goals.",
  },
  {
    title: "Receive your personalized regimen",
    description:
      "Within 24 hours, receive a custom protocol with herbal medicines, diet therapy, detox practices, and daily rituals.",
  },
  {
    title: "Enjoy 1-month follow-up support",
    description:
      "Send updates anytime. Follow-up review at four weeks ensures your plan evolves with your progress. Membership options are available for long-term care.",
  },
];

const pricing = [
  { region: "India", amount: "₹700" },
  { region: "Canada", amount: "80 CAD" },
  { region: "United States", amount: "100 USD" },
  { region: "United Kingdom", amount: "60 GBP" },
  { region: "Australia", amount: "60 AUD" },
];

/**
 * Consultation page detailing the booking process, pricing, and intake form.
 */
export default function ConsultationPage() {
  return (
    <div className="page-shell pb-16">
      <section className="pt-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-emerald-950">Begin your consultation</h1>
          <p className="mt-6 text-lg text-slate-700">
            Consultations start at $80 and are valid for 15 days, giving you time to integrate
            your personalized plan. Dr. Zahida Sadaf believes healing is a sacred service, so
            every step is transparent, compassionate, and designed around your lifestyle.
          </p>
        </div>
      </section>

      <section className="mt-12 rounded-3xl bg-white/90 p-8 shadow-sm ring-1 ring-emerald-100 sm:p-10" aria-labelledby="process">
        <div className="max-w-3xl">
          <h2 id="process" className="text-3xl font-semibold text-emerald-950">
            Step-by-step booking process
          </h2>
          <p className="mt-4 text-slate-700">
            From first message to ongoing mentorship, here’s how we co-create your healing plan.
          </p>
        </div>
        {/* Steps align into two columns on medium screens and breathe further on desktops */}
        <ol className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3" aria-label="Consultation steps">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex flex-col gap-3 rounded-3xl bg-emerald-50/80 p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-900 text-sm font-semibold text-white">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-emerald-900">{step.title}</h3>
              <p className="text-sm text-slate-700">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)] lg:items-start">
        <div className="rounded-3xl bg-white/90 p-8 shadow-sm ring-1 ring-emerald-100 sm:p-10">
          <h2 className="text-3xl font-semibold text-emerald-950">Consultation investment</h2>
          <p className="mt-4 text-slate-700">
            Choose the currency that matches your location. Membership bundles with additional
            follow-ups and herbal refills are available on request.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-emerald-100">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-emerald-100 text-sm">
              <thead className="bg-emerald-900 text-left text-xs font-semibold uppercase tracking-wide text-emerald-50">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Region
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Consultation fee
                  </th>
                </tr>
              </thead>
                <tbody className="divide-y divide-emerald-100 bg-white/60">
                  {pricing.map((price) => (
                    <tr key={price.region}>
                      <td className="px-4 py-3 font-medium text-emerald-900">{price.region}</td>
                      <td className="px-4 py-3 text-emerald-800">{price.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-6 space-y-3 text-sm text-slate-700">
            <p>
              After payment, share the receipt on WhatsApp for scheduling. Secure online payment
              integrations are coming soon—meanwhile, bank transfer and UPI details will be
              provided via chat.
            </p>
            <p>
              <strong className="font-semibold text-emerald-900">WhatsApp support:</strong>{" "}
              <a className="underline" href="https://wa.me/917667265892" target="_blank" rel="noreferrer">
                https://wa.me/917667265892
              </a>
            </p>
          </div>
        </div>
        <div className="rounded-3xl bg-emerald-900/95 p-8 text-emerald-50 shadow-lg sm:p-10">
          <h2 className="text-3xl font-semibold text-white">Share your health story</h2>
          <p className="mt-3 text-emerald-100">
            Complete the form and we will respond within one business day with next steps.
          </p>
          <form className="mt-6 space-y-5" action="#" method="post">
            <div>
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="phone">Phone / WhatsApp</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="Include country code"
                autoComplete="tel"
              />
            </div>
            <div>
              <label htmlFor="location">Location &amp; time zone</label>
              <input
                id="location"
                name="location"
                type="text"
                required
                placeholder="City, Country (e.g., Hyderabad, India)"
                autoComplete="address-level2"
              />
            </div>
            <div>
              <label htmlFor="health-concerns">Primary health concerns</label>
              <textarea
                id="health-concerns"
                name="healthConcerns"
                rows={4}
                required
                placeholder="Share symptoms, diagnoses, and current medications"
              />
            </div>
            <div>
              <label htmlFor="preferred-time">Preferred consultation time</label>
              <input
                id="preferred-time"
                name="preferredTime"
                type="text"
                placeholder="Example: Weekday evenings IST"
                autoComplete="off"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-emerald-950 shadow transition hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Submit inquiry
              </button>
            </div>
          </form>
          <p className="mt-6 text-xs text-emerald-200">
            Consultations are valid for 15 days and include one detailed follow-up. Memberships
            provide extended monitoring, seasonal detox plans, and discounted herbal refills.
          </p>
        </div>
      </section>
    </div>
  );
}
