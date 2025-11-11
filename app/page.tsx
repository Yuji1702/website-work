import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Online Health Consultant for Holistic Healing",
  description:
    "Book Ayurvedic-Unani online consultations with Dr. Zahida Sadaf for PCOS, thyroid, diabetes, hormonal balance, and skin wellness.",
};

const principles = [
  "Holistic mind–body–soul alignment",
  "Natural therapies with diet and lifestyle correction",
  "Safe herbal medicines with no side effects",
  "Root-cause treatment for complete healing",
  "Prevention-focused wellness guidance",
  "2,500-year-old traditional wisdom",
  "Individualized care and global support",
];

const services = [
  {
    title: "PCOS / PCOD Relief",
    description:
      "Restore hormonal harmony with personalized Unani formulations, anti-inflammatory nutrition, and detox therapies that balance cycles naturally.",
  },
  {
    title: "Thyroid Balance",
    description:
      "Support thyroid function through gut-healing herbs, targeted minerals, yoga breathwork, and stress resilience coaching.",
  },
  {
    title: "Diabetes Care",
    description:
      "Stabilize blood sugar with metabolic reset plans combining organic herbs, mindful movement, and sustainable lifestyle changes.",
  },
  {
    title: "Hormonal Wellness",
    description:
      "Address adrenal fatigue, fertility concerns, and mood swings with individualized herbal tonics, Hijama, and restorative routines.",
  },
  {
    title: "Skin Healing",
    description:
      "Nurture radiant skin by treating the root cause of acne, eczema, and pigmentation through detoxification, cupping, and herbal therapies.",
  },
  {
    title: "Holistic Detox & Immunity",
    description:
      "Strengthen digestion and immunity with Hijama (cupping), leech therapy, therapeutic oil baths, and mindful meditation guidance.",
  },
];

const testimonials = [
  {
    quote:
      "Within two months my PCOS symptoms calmed, my cycle returned, and I felt lighter thanks to Dr. Sadaf’s compassionate guidance.",
    author: "Ayesha, India",
  },
  {
    quote:
      "Her Unani detox plan balanced my thyroid without harsh medication and the follow-up support kept me accountable.",
    author: "Hiba, Canada",
  },
  {
    quote:
      "The personalized herbs and diet plan reduced my blood sugar spikes and improved my sleep in just six weeks.",
    author: "Rashid, UAE",
  },
];

/**
 * Home page presenting key value propositions, services, and social proof for quick orientation.
 */
export default function HomePage() {
  return (
    <div className="page-shell pb-16">
      <section className="grid gap-12 pt-16 lg:grid-cols-[minmax(0,1.05fr),minmax(0,0.95fr)] lg:items-center lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
            Your Online Health Consultant
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-emerald-950 sm:text-5xl">
            Holistic Ayurvedic-Unani care that heals the root cause
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-700">
            Dr. Zahida Sadaf blends classical Unani wisdom with modern gut health
            research to reverse PCOS/PCOD, thyroid issues, diabetes, hormonal
            imbalances, and chronic skin problems. Healing is her service—not a
            business—and every consultation begins with deep listening.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/consultation"
              className="rounded-full bg-emerald-900 px-6 py-3 text-sm font-semibold text-white shadow-lg ring-1 ring-emerald-200/60 transition hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            >
              Book Consultation (Starting at $80)
            </Link>
            <Link
              href="/about"
              className="rounded-full bg-white/80 px-6 py-3 text-sm font-semibold text-emerald-900 shadow transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            >
              Meet Dr. Sadaf
            </Link>
          </div>
          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-3xl bg-white/90 p-6 shadow-sm ring-1 ring-emerald-100">
              <dt className="text-sm font-medium text-emerald-700">Initial Consultation</dt>
              <dd className="mt-2 text-2xl font-semibold text-emerald-950">45–60 minutes</dd>
            </div>
            <div className="rounded-3xl bg-white/90 p-6 shadow-sm ring-1 ring-emerald-100">
              <dt className="text-sm font-medium text-emerald-700">Follow-up Care</dt>
              <dd className="mt-2 text-2xl font-semibold text-emerald-950">Monthly plans</dd>
            </div>
            <div className="rounded-3xl bg-white/90 p-6 shadow-sm ring-1 ring-emerald-100">
              <dt className="text-sm font-medium text-emerald-700">Global Support</dt>
              <dd className="mt-2 text-2xl font-semibold text-emerald-950">Consults worldwide</dd>
            </div>
          </dl>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-emerald-200 via-emerald-50 to-amber-100 blur-3xl" />
          <Image
            src="/dr-zahida-sadaf-portrait.svg"
            alt="Illustration of Dr. Zahida Sadaf offering holistic Ayurvedic-Unani consultation"
            width={520}
            height={520}
            className="w-full max-w-xs drop-shadow-xl sm:max-w-sm"
            sizes="(min-width: 1024px) 28rem, (min-width: 640px) 22rem, 16rem"
            priority
          />
        </div>
      </section>

      <section aria-labelledby="why-choose-us">
        <div className="rounded-3xl bg-white/80 p-8 shadow-sm ring-1 ring-emerald-100 sm:p-10">
          <h2 id="why-choose-us" className="text-3xl font-semibold text-emerald-950">
            Why choose Dr. Sadaf?
          </h2>
          <p className="mt-4 max-w-3xl text-slate-700">
            Discover holistic regimens that combine organic herbal medicines, diet therapy,
            cupping (Hijama), leech therapy, yoga, meditation, and therapeutic oil baths to
            restore harmony in the body’s systems.
          </p>
          {/* Larger screens display principles in three balanced columns for readability */}
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {principles.map((principle) => (
              <li
                key={principle}
                className="flex items-start gap-3 rounded-2xl bg-emerald-50/70 p-4 text-sm text-emerald-900"
              >
                <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-emerald-500" aria-hidden="true" />
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="our-services">
        <div className="flex flex-col gap-8">
          <div className="max-w-3xl">
            <h2 id="our-services" className="text-3xl font-semibold text-emerald-950">
              Our services for chronic wellness
            </h2>
            <p className="mt-4 text-slate-700">
              Personalized care plans include pure Unani formulations, diet therapy, lifestyle
              correction, personal assistance, medical report analysis, and regular follow-up.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex h-full flex-col justify-between rounded-3xl bg-white/90 p-6 shadow-sm ring-1 ring-emerald-100 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  <h3 className="text-xl font-semibold text-emerald-900">{service.title}</h3>
                  <p className="mt-3 text-sm text-slate-700">{service.description}</p>
                </div>
                <div className="mt-6">
                  <Link
                    href="/consultation"
                    className="text-sm font-semibold text-emerald-800 underline-offset-4 hover:underline"
                    aria-label={`Book a consultation to learn more about ${service.title}`}
                  >
                    Book your personalized plan
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="testimonials">
        <div className="rounded-3xl bg-emerald-900 px-8 py-12 text-emerald-50 shadow-lg">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="testimonials" className="text-3xl font-semibold text-white">
              Stories of renewed balance
            </h2>
            <p className="mt-3 text-emerald-100">
              Real people. Real results. Personalized care that feels like family.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.author}
                className="flex h-full flex-col justify-between rounded-3xl bg-emerald-800/60 p-6 text-left"
              >
                <blockquote className="text-sm leading-6 text-emerald-50">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wide text-emerald-200">
                  {testimonial.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
