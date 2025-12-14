import { ImpactBadge } from "../components/ImpactBadge";
import { AccordionItem } from "../components/AccordionItem";
import { EmailCaptureForm } from "../components/EmailCaptureForm";

const products = [
  { name: "Handwoven Market Tote", price: "$48", category: "Accessories", impact: "$2.50 donated" },
  { name: "Organic Candle Trio", price: "$36", category: "Home", impact: "$1.80 donated" },
  { name: "Ceramic Serving Set", price: "$72", category: "Dining", impact: "$3.60 donated" },
  { name: "Soft Bamboo Loungewear", price: "$58", category: "Apparel", impact: "$2.90 donated" },
  { name: "Botanical Print Set", price: "$44", category: "Art", impact: "$2.20 donated" },
  { name: "Wellness Tea Ritual Kit", price: "$32", category: "Wellness", impact: "$1.60 donated" },
];

const steps = [
  {
    title: "Shop",
    description: "Curated, beautiful goods chosen for quality, ethics, and joy.",
    icon: <ShoppingBagIcon />,
  },
  {
    title: "Choose a cause",
    description: "Select a vetted charity at checkout or let us allocate where it's needed most.",
    icon: <HeartIcon />,
  },
  {
    title: "We donate",
    description: "Every order generates a digital receipt showing how much was passed on.",
    icon: <ShieldCheckIcon />,
  },
];

const stats = [
  { label: "Donated to date", value: "$182,400" },
  { label: "Charities supported", value: "36" },
  { label: "Orders funding impact", value: "48,217" },
];

const partners = ["Horizon Relief", "Bright Futures Fund", "Evergreen Aid", "Open Hands", "Clear Water Co.", "Sunrise Trust"];

const testimonials = [
  {
    name: "Alexa M.",
    quote:
      "I finally see exactly where my purchase is helping. The receipts are clear and the products are gorgeous.",
  },
  {
    name: "Priya S.",
    quote: "Graceket makes giving back part of my weekly shopping. It's effortless and transparent.",
  },
  {
    name: "Jordan R.",
    quote: "Beautiful curation with a mission I trust. The impact badges help me shop with confidence.",
  },
];

const faqs = [
  {
    question: "What portion of each purchase is donated?",
    answer: "Every item shows a clear impact badge with the exact dollar amount we donate. We share donation receipts monthly.",
  },
  {
    question: "How are charities selected?",
    answer: "We partner with vetted, audited nonprofits that align with causes like hunger relief, education, and climate action.",
  },
  {
    question: "Can I choose where my donation goes?",
    answer: "Yes. At checkout you can select a featured partner or let us distribute to the highest need fund.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Absolutely. Standard returns apply and your impact badge updates automatically to reflect changes.",
  },
  {
    question: "How do I track my impact?",
    answer: "Your account dashboard and email receipts show each donation, charity, and cumulative impact over time.",
  },
  {
    question: "Is checkout secure?",
    answer: "We use encrypted payments, secure partners, and never share your data. Privacy-first, always.",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
      <header className="sticky top-0 z-20 bg-hero-gradient/90 backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-grace-forest/10 py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-grace-forest to-grace-rose text-white shadow-soft flex items-center justify-center font-semibold">
              Gk
            </div>
            <div>
              <p className="text-lg font-semibold text-grace-ink">Graceket</p>
              <p className="text-xs text-grace-ink/70">Shop with grace. Give with purpose.</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-grace-ink/80 md:flex" aria-label="Primary">
            <a href="#how" className="hover:text-grace-ink">
              How it works
            </a>
            <a href="#impact" className="hover:text-grace-ink">
              Impact
            </a>
            <a href="#shop" className="hover:text-grace-ink">
              Shop
            </a>
            <a href="#faq" className="hover:text-grace-ink">
              FAQ
            </a>
            <a
              href="#shop"
              className="rounded-full bg-grace-forest px-4 py-2 text-white shadow-soft hover:bg-grace-forest/90"
            >
              Start Shopping
            </a>
          </nav>
          <a
            href="#shop"
            className="md:hidden rounded-full bg-grace-forest px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-grace-forest/90"
          >
            Start Shopping
          </a>
        </div>
      </header>

      <section className="grid gap-12 py-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-grace-forest shadow-soft">
            <SparklesIcon />
            Graceful giving made simple
          </span>
          <h1 className="text-4xl font-bold leading-tight text-grace-ink sm:text-5xl">
            Shop beautifully. See exactly how your cart funds change.
          </h1>
          <p className="text-lg leading-relaxed text-grace-ink/80">
            Every Graceket order includes a transparent donation receipt. Discover curated essentials and gifts that
            give back to vetted charities—without extra steps.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#shop"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-grace-forest px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-grace-forest/90"
            >
              Shop Best Sellers
              <ArrowRightIcon />
            </a>
            <a
              href="#impact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/80 px-5 py-3 text-sm font-semibold text-grace-forest shadow-soft hover:bg-grace-sand"
            >
              See Our Impact
            </a>
          </div>
          <p className="text-sm text-grace-ink/70">Transparent donations • Curated products • Secure checkout</p>
          <div className="flex flex-wrap gap-4 rounded-2xl bg-white/80 p-4 shadow-soft">
            <ImpactBadge amount="$3.1 average donation" variant="soft" icon={<HeartIcon small />} />
            <ImpactBadge amount="Impact receipts in 24h" variant="soft" icon={<ShieldCheckIcon small />} />
            <ImpactBadge amount="Ethical sourcing" variant="soft" icon={<GlobeAltIcon small />} />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-grace-rose/40 blur-3xl" aria-hidden />
          <div className="absolute -right-10 top-20 h-28 w-28 rounded-full bg-grace-forest/30 blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl bg-white/90 p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-grace-forest">Live impact tracker</p>
                <p className="text-xs text-grace-ink/70">Updated every checkout</p>
              </div>
              <ImpactBadge amount="$182k+ donated" icon={<HeartIcon className="h-4 w-4" aria-hidden />} />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-card-gradient p-4 text-center shadow-soft">
                  <p className="text-xl font-bold text-grace-ink">{stat.value}</p>
                  <p className="text-xs text-grace-ink/70">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-grace-forest/10 bg-grace-forest/5 p-4">
              <div className="flex items-center gap-3">
                <ShieldCheckIcon className="text-grace-forest" />
                <div>
                  <p className="text-sm font-semibold text-grace-ink">Donation receipt & transparency promise</p>
                  <p className="text-xs text-grace-ink/70">Every order comes with a receipt showing the charity and amount donated.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="space-y-6 py-12">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-grace-ink">How Graceket works</h2>
          <p className="text-grace-ink/80">From cart to cause in three graceful steps.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="rounded-2xl bg-white/90 p-5 shadow-soft card-raise">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-grace-forest/10 text-grace-forest">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-grace-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-grace-ink/80">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="shop" className="space-y-6 py-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-grace-ink">Featured products</h2>
            <p className="text-grace-ink/80">Curated picks with clear impact per item.</p>
          </div>
          <a
            href="/products"
            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-grace-forest shadow-soft hover:bg-grace-sand"
          >
            View all products
            <ArrowRightIcon className="h-4 w-4" aria-hidden />
          </a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="gradient-border relative overflow-hidden rounded-3xl bg-white/90 p-5 shadow-soft card-raise"
            >
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-grace-ink/60">{product.category}</p>
                  <h3 className="text-lg font-semibold text-grace-ink">{product.name}</h3>
                </div>
                <ImpactBadge amount={product.impact} variant="soft" />
              </div>
              <div className="mb-4 h-36 rounded-2xl bg-gradient-to-br from-grace-sand to-grace-rose/50" aria-hidden />
              <div className="flex items-center justify-between">
                <p className="text-base font-semibold text-grace-ink">{product.price}</p>
                <button className="inline-flex items-center gap-2 rounded-full bg-grace-forest px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-grace-forest/90">
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="impact" className="space-y-6 py-12">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-grace-ink">Impact & transparency</h2>
          <p className="text-grace-ink/80">Know where every dollar goes, instantly.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-3xl bg-white/90 p-6 shadow-soft">
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-grace-forest/10 bg-grace-forest/5 p-4 text-center">
                  <p className="text-2xl font-bold text-grace-ink">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wide text-grace-ink/60">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-grace-forest/10 p-5">
              <h3 className="text-lg font-semibold text-grace-ink">Donation receipt promise</h3>
              <p className="mt-2 text-sm leading-relaxed text-grace-ink/80">
                Within 24 hours of every checkout, we email a verified receipt showing the charity and amount donated. Your
                dashboard stores them for easy download, keeping giving as transparent as your cart.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl bg-white/90 p-6 shadow-soft">
            <div>
              <h3 className="text-lg font-semibold text-grace-ink">Charity partners</h3>
              <p className="text-sm text-grace-ink/70">Aligned with causes you care about.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm font-semibold text-grace-ink">
              {partners.map((partner) => (
                <div key={partner} className="flex items-center justify-center rounded-2xl border border-grace-forest/10 bg-grace-forest/5 px-3 py-2">
                  {partner}
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-grace-forest/10 p-4 text-sm text-grace-ink/80">
              We review partners quarterly for impact reporting, governance, and efficiency to keep your donations impactful.
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6 py-12">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-grace-ink">What shoppers say</h2>
          <p className="text-grace-ink/80">Loved products, trusted giving.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-3xl bg-white/90 p-5 shadow-soft card-raise">
              <blockquote className="text-sm leading-relaxed text-grace-ink/80">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-grace-ink">{testimonial.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="faq" className="space-y-6 py-12">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-grace-ink">FAQs</h2>
          <p className="text-grace-ink/80">Everything you need to shop with confidence.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      <section className="space-y-6 py-12">
        <div className="rounded-3xl bg-grace-forest px-6 py-8 text-white shadow-soft">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Join the Graceket circle</h3>
              <p className="text-sm text-white/90">
                Get early access to new drops, impact updates, and invites to limited charity collaborations.
              </p>
            </div>
            <EmailCaptureForm />
          </div>
        </div>
      </section>

      <footer className="grid gap-6 border-t border-grace-forest/10 py-8 text-sm text-grace-ink/80 sm:grid-cols-3">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-grace-ink">Graceket</p>
          <p>Shop with grace. Give with purpose.</p>
          <ImpactBadge amount="$182k donated" variant="soft" />
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-grace-ink">Explore</p>
          <div className="flex flex-col gap-1">
            <a href="#how" className="hover:text-grace-ink">
              How it works
            </a>
            <a href="#impact" className="hover:text-grace-ink">
              Impact
            </a>
            <a href="#shop" className="hover:text-grace-ink">
              Shop
            </a>
            <a href="#faq" className="hover:text-grace-ink">
              FAQ
            </a>
          </div>
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-grace-ink">Stay connected</p>
          <div className="flex gap-3">
            <a href="https://instagram.com" className="hover:text-grace-ink" aria-label="Instagram">
              Instagram
            </a>
            <a href="https://linkedin.com" className="hover:text-grace-ink" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="https://newsletter.graceket.com" className="hover:text-grace-ink" aria-label="Newsletter">
              Newsletter
            </a>
          </div>
          <div className="flex gap-3 text-xs">
            <a href="/privacy" className="hover:text-grace-ink">
              Privacy
            </a>
            <a href="/terms" className="hover:text-grace-ink">
              Terms
            </a>
          </div>
          <p className="text-xs">© {new Date().getFullYear()} Graceket. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={`h-5 w-5 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

function HeartIcon({ className = "", small }: { className?: string; small?: boolean }) {
  return (
    <svg
      aria-hidden
      className={`${small ? "h-4 w-4" : "h-6 w-6"} ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s-6-4.35-9-9a5.25 5.25 0 019-5.61A5.25 5.25 0 0121 12c-3 4.65-9 9-9 9Z" />
    </svg>
  );
}

function ShieldCheckIcon({ className = "", small }: { className?: string; small?: boolean }) {
  return (
    <svg
      aria-hidden
      className={`${small ? "h-4 w-4" : "h-6 w-6"} ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3 5 6v6c0 5.25 3.8 7.83 7 9 3.2-1.17 7-3.75 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function SparklesIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={`h-4 w-4 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3 9.5 9.5 3 12l6.5 2.5L12 21l2.5-6.5L21 12l-6.5-2.5L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}

function ShoppingBagIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={`h-6 w-6 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 7h12l-1 12H7L6 7Z" />
      <path d="M9 7a3 3 0 0 1 6 0" />
    </svg>
  );
}

function GlobeAltIcon({ className = "", small }: { className?: string; small?: boolean }) {
  return (
    <svg
      aria-hidden
      className={`${small ? "h-4 w-4" : "h-6 w-6"} ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
      <path d="M12 3a14 14 0 0 1 0 18" />
    </svg>
  );
}
