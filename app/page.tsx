const PHONE = "(647) 567-8733";
const TEL = "tel:+16475678733";
const SMS = "sms:+16475678733";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Sean%20John's%20Tree%20Care%20and%20Property%20Management&query_place_id=ChIJG3cyZcbV0YERjfvnk7hNUHs";

type IconName = "phone" | "message" | "star" | "shield" | "clock" | "pin" | "tree" | "saw" | "leaf" | "home" | "sprout" | "broom" | "check" | "users" | "dollar" | "arrow";

function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const paths: Record<IconName, React.ReactNode> = {
    phone: <path {...p} d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />,
    message: <path {...p} d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
    star: <path fill="currentColor" d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />,
    shield: <><path {...p} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path {...p} d="m9 12 2 2 4-4" /></>,
    clock: <><circle {...p} cx="12" cy="12" r="10" /><path {...p} d="M12 6v6l4 2" /></>,
    pin: <><path {...p} d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle {...p} cx="12" cy="10" r="3" /></>,
    tree: <><path {...p} d="M12 22v-6" /><path {...p} d="M12 16a6 6 0 0 0 5.5-8.4A5 5 0 0 0 8 5.2 5 5 0 0 0 6.5 15a6 6 0 0 0 5.5 1z" /></>,
    saw: <><path {...p} d="M3 17 15 5l4 4-12 12H3z" /><path {...p} d="m7 13 1.5 1.5M10 10l1.5 1.5M13 7l1.5 1.5" /></>,
    leaf: <><path {...p} d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z" /><path {...p} d="M2 21c0-3 1.9-5.4 5.1-6C9.5 14.5 12 13 13 12" /></>,
    home: <><path {...p} d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path {...p} d="M9 22V12h6v10" /></>,
    sprout: <><path {...p} d="M7 20h10M12 20v-8" /><path {...p} d="M12 12C12 8 9 6 5 6c0 4 3 6 7 6zM12 10c0-3.5 2.5-6 7-6 0 4-3 6-7 6z" /></>,
    broom: <><path {...p} d="m19 3-7 7" /><path {...p} d="M9 11c-3 0-5 2-6 5l5 5c3-1 5-3 5-6z" /><path {...p} d="m6 18 2-2" /></>,
    check: <path {...p} d="M20 6 9 17l-5-5" />,
    users: <><path {...p} d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle {...p} cx="9" cy="7" r="4" /><path {...p} d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></>,
    dollar: <><circle {...p} cx="12" cy="12" r="10" /><path {...p} d="M15 9.5c-.5-1-1.6-1.5-3-1.5-1.7 0-3 .8-3 2s1.3 1.7 3 2 3 .8 3 2-1.3 2-3 2c-1.4 0-2.5-.5-3-1.5M12 6v2M12 16v2" /></>,
    arrow: <path {...p} d="M5 12h14M13 6l6 6-6 6" />,
  };
  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true">{paths[name]}</svg>;
}

function Stars({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span className="inline-flex text-star" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" className={className} />)}
    </span>
  );
}

const services: { icon: IconName; title: string; body: string; badge?: string }[] = [
  { icon: "saw", title: "Tree trimming", badge: "Most requested", body: "Overgrown limbs over the roof, branches rubbing the fence, a tree that has lost its shape. Sean trims back what needs to go so the tree stays healthy and your yard gets its light back. Every branch is hauled away before he leaves." },
  { icon: "tree", title: "Tree removal", body: "When a tree is dead, leaning or simply in the wrong spot, Sean takes it down carefully and in sections where space is tight. You get a straight price up front and a yard that is raked clean when the job is done." },
  { icon: "leaf", title: "Yard maintenance", body: "Recurring upkeep for homeowners who would rather not spend every weekend on the yard: trimming, tidying beds, leaf and debris clean-up. Several customers have kept Sean on for years because he keeps showing up." },
  { icon: "home", title: "Property management", body: "Ongoing outdoor care for your home, or for a few homes on the same street. Neighbours often book Sean together. He gets in, does the work and stays out of your way, so you hardly notice he was there except for the results." },
  { icon: "sprout", title: "Yard makeovers", body: "Got a neglected yard you have stopped looking at? Sean can turn it into a relaxing, low-maintenance space you will actually want to sit in, without a long project or a big-company price tag." },
  { icon: "broom", title: "Property clean-ups", body: "Storm debris, a season of fallen branches, a yard that got away from you before a sale or a move. One visit, done quickly and properly, with friendly updates on when he is coming." },
];

const reviews = [
  { name: "Allison W.", job: "Ongoing yard care", text: "I have used Sean for a few years now. He is reliable and he actually shows up, which has been a real problem with other companies. My yard looks beautiful." },
  { name: "Chris K.", job: "Tree service", text: "Professional and on time. He did exactly what he said he would, worked efficiently and cleaned up everything, so the yard looked better than before he started. Fair price too." },
  { name: "Jenna", job: "Yard makeover", text: "Sean turned my neglected yard into a relaxing space that is easy to take care of. He was prompt and the price was fair." },
  { name: "Natasha S.", job: "Recurring property care", text: "My neighbour and I have both used Sean for a couple of years. He comes in, does wonderful work and is never in the way." },
  { name: "Anna B.", job: "Property work", text: "A pleasure to work with. Professional, efficient and the pricing was what he said it would be. We will have him back." },
  { name: "Tamara B.", job: "Property clean-up", text: "He worked quickly and the result looked beautiful. Communication was friendly and fast the whole way through." },
];

const steps = [
  { title: "Call or text Sean", body: "Tell him what is going on: a tree to trim or take down, a yard to tidy, or a property that needs regular care. Texting a couple of photos helps." },
  { title: "Get a fair, clear price", body: "Sean looks at the job and tells you what it will cost before any work starts. No surprises when the bill comes." },
  { title: "Work done on the day promised", body: "He shows up when he said he would, works efficiently, and keeps you posted with quick, friendly messages." },
  { title: "Clean yard, happy neighbours", body: "Every branch and leaf is cleared away. Most customers book again, and many pass his number to the people next door." },
];

const faqs = [
  { q: "What areas do you serve?", a: "Sean works across Toronto and the Greater Toronto Area. Call or text with your street or neighbourhood and he will tell you right away if you are on his route. If a neighbour already uses him, you almost certainly are." },
  { q: "How much does tree trimming or removal cost?", a: "It depends on the size of the tree, how close it is to the house or wires and how much clean-up is involved. Sean gives you a clear price before he starts. Customers regularly mention his fair, reliable pricing in their reviews." },
  { q: "Do you clean up after the job?", a: "Yes, always. Hauling away branches, raking up and leaving the yard tidier than he found it is part of every job, not an extra." },
  { q: "Can I book regular yard maintenance?", a: "Yes. A lot of Sean's customers have him on a regular schedule and have for years. Tell him how often you want him to come and what you want looked after." },
  { q: "How soon can you come out?", a: "Call or text and Sean will give you an honest answer about timing. He is known for showing up when he says he will, so the date you agree on is the date he arrives." },
  { q: "What time do you start?", a: "Sean starts at 7 a.m. Calling or texting early in the day is the quickest way to reach him." },
  { q: "Can neighbours book together?", a: "Absolutely. Several of Sean's customers share him with the people next door. Booking on the same day for two or three homes on one street is easy to arrange." },
];

const area = ["Toronto", "Greater Toronto Area", "Neighbours booking together welcome"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sean John's Tree Care and Property Management",
  description: "Neighbour-run tree care and property maintenance: tree trimming, tree removal, yard maintenance, property management, yard makeovers and clean-ups.",
  telephone: "+1-647-567-8733",
  areaServed: "Toronto and the Greater Toronto Area, Ontario",
  url: "https://sean-johns-tree-care-and-property-management.growlocalvisibility.com",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "9" },
  hasMap: MAPS,
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      <div className="hidden bg-brand-dark text-sm text-white/90 md:block">
        <div className="mx-auto flex max-w-[1200px] items-center gap-6 px-6 py-2">
          <span className="inline-flex items-center gap-2"><Icon name="pin" className="h-4 w-4" /> Serving Toronto &amp; the GTA</span>
          <span className="inline-flex items-center gap-2"><Icon name="clock" className="h-4 w-4" /> Starts at 7 a.m.</span>
          <span className="inline-flex items-center gap-2"><Icon name="star" className="h-4 w-4 text-star" /> 5.0 on Google</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-white"><Icon name="tree" className="h-6 w-6" /></span>
            <span className="leading-tight">
              <span className="block font-[family-name:var(--font-heading)] text-lg font-bold text-ink">Sean John&apos;s</span>
              <span className="block text-xs font-semibold text-muted">Tree Care &amp; Property Management</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 text-[15px] font-semibold text-ink lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About Sean</a>
            <a href="#area" className="hover:text-brand">Service Area</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="hidden font-bold text-brand md:inline">{PHONE}</a>
            <a href={TEL} className="btn hidden min-h-12 items-center gap-2 rounded-xl bg-cta px-5 font-bold text-ink hover:bg-cta-hover sm:inline-flex"><Icon name="phone" className="h-5 w-5" /> Call Now</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="btn grid h-12 w-12 place-items-center rounded-xl bg-cta text-ink sm:hidden"><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 pb-16 pt-12 md:px-6 md:pb-24 md:pt-20 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rise">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-tint px-3.5 py-1.5 text-sm font-semibold text-brand"><Icon name="users" className="h-4 w-4" /> Your local neighbour for yard and tree work</p>
              <h1 className="text-[clamp(2.1rem,4.6vw,3.5rem)] font-black tracking-tight">Tree Trimming, Tree Removal &amp; Yard Care in Toronto and the GTA</h1>
              <p className="mt-5 max-w-[58ch] text-lg text-muted md:text-xl">Sean shows up when he says he will, charges a fair price and leaves your yard cleaner than he found it. That is why his customers keep him for years and hand his number to the neighbours.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={TEL} className="btn inline-flex min-h-14 items-center justify-center gap-2.5 rounded-xl bg-cta px-7 text-lg font-bold text-ink shadow-[0_10px_24px_-12px_oklch(0.6_0.15_80/0.8)] hover:bg-cta-hover"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
                <a href={SMS} className="btn inline-flex min-h-14 items-center justify-center gap-2.5 rounded-xl border-2 border-brand px-7 text-lg font-bold text-brand hover:bg-brand hover:text-white"><Icon name="message" className="h-5 w-5" /> Text Sean</a>
              </div>
              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] font-semibold text-ink">
                <Stars className="h-5 w-5" /> <span>5.0</span><span className="text-line">|</span>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="underline decoration-line underline-offset-4 hover:text-brand">9 Google reviews</a><span className="text-line">|</span>
                <span>Punctual &amp; fairly priced</span><span className="text-line">|</span><span>Full clean-up every job</span>
              </p>
            </div>

            <figure className="rise rise-2 relative">
              <div className="absolute -right-6 -top-6 hidden h-40 w-40 rounded-3xl bg-tint lg:block" aria-hidden="true" />
              <div className="relative rounded-2xl border border-line bg-white p-7 shadow-[0_24px_50px_-30px_oklch(0.29_0.06_152/0.5)] md:p-8">
                <Stars className="h-6 w-6" />
                <blockquote className="mt-4 font-[family-name:var(--font-heading)] text-xl leading-snug text-ink md:text-2xl">&ldquo;Professional, on time, did exactly what he promised and cleaned everything up. The yard looked better than before.&rdquo;</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand font-bold text-white">CK</span>
                  <span><span className="block font-bold">Chris K.</span><span className="text-sm text-muted">Tree service · Google review</span></span>
                </figcaption>
                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-line pt-5 text-sm">
                  <div className="flex items-center gap-2 text-muted"><Icon name="clock" className="h-5 w-5 text-brand" /> Starts at 7 a.m.</div>
                  <div className="flex items-center gap-2 text-muted"><Icon name="message" className="h-5 w-5 text-brand" /> Call or text</div>
                </div>
              </div>
            </figure>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why customers trust Sean" className="bg-brand text-white">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: "star" as IconName, t: "5.0 on Google", s: "9 reviews, all five stars" },
              { icon: "clock" as IconName, t: "Actually shows up", s: "Punctual, on the day promised" },
              { icon: "dollar" as IconName, t: "Fair, clear pricing", s: "You know the price first" },
              { icon: "broom" as IconName, t: "Full clean-up", s: "Yard left better than before" },
            ].map((x) => (
              <div key={x.t} className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/12 text-cta"><Icon name={x.icon} className="h-6 w-6" /></span>
                <span><span className="block font-bold">{x.t}</span><span className="text-sm text-white/80">{x.s}</span></span>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="max-w-[62ch]">
              <p className="text-sm font-bold text-brand">Services</p>
              <h2 className="mt-2 text-3xl md:text-[2.5rem]">Tree care and yard work, handled by one reliable person</h2>
              <p className="mt-4 text-lg text-muted">No call centre, no rotating crews. When you book Sean, Sean is the one who shows up and does the work.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <article key={s.title} className={`lift flex flex-col rounded-2xl border bg-white p-7 ${i === 0 ? "border-brand ring-1 ring-brand" : "border-line"}`}>
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-tint text-brand"><Icon name={s.icon} className="h-6 w-6" /></span>
                    {s.badge && <span className="rounded-full bg-cta px-3 py-1 text-xs font-bold text-ink">{s.badge}</span>}
                  </div>
                  <h3 className="mt-5 text-xl">{s.title}</h3>
                  <p className="mt-3 flex-1 text-muted">{s.body}</p>
                  <a href={TEL} className="mt-5 inline-flex items-center gap-2 font-bold text-brand hover:gap-3 transition-[gap]">Call about this <Icon name="arrow" className="h-4 w-4" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold text-brand">Reviews</p>
                <h2 className="mt-2 text-3xl md:text-[2.5rem]">Rated 5.0 from 9 Google reviews</h2>
                <p className="mt-3 max-w-[56ch] text-lg text-muted">Neighbours keep coming back to the same few words: reliable, punctual, fair price, and a yard that looks better than before.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn inline-flex min-h-12 shrink-0 items-center gap-2 rounded-xl border-2 border-brand bg-white px-5 font-bold text-brand hover:bg-brand hover:text-white">Read all reviews on Google <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
            <div className="mt-12 columns-1 gap-5 md:columns-2 lg:columns-3">
              {reviews.map((r) => (
                <figure key={r.name} className="mb-5 break-inside-avoid rounded-2xl border border-line bg-white p-6">
                  <Stars className="h-[18px] w-[18px]" />
                  <blockquote className="mt-3 text-ink">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-brand/10 font-bold text-brand">{r.name.charAt(0)}</span>
                    <span><span className="block font-bold">{r.name}</span><span className="text-sm text-muted">{r.job} · Google review</span></span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">Reviews shortened from Sean&apos;s Google listing.</p>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-bold text-brand">About Sean</p>
              <h2 className="mt-2 text-3xl md:text-[2.5rem]">A neighbour, not a call centre</h2>
              <div className="mt-6 space-y-4 text-lg text-muted">
                <p>Sean John&apos;s Tree Care and Property Management is a local, neighbour-run business. Sean trims and removes trees, looks after yards week to week, and takes on the clean-ups and makeovers that homeowners keep putting off.</p>
                <p>What people notice first is simple: he shows up. Plenty of homeowners have been let down by companies that never call back or never arrive. Sean turns up on the day he promised, works efficiently and keeps you posted with quick, friendly messages.</p>
                <p>Then they notice the yard. Branches hauled away, beds tidied, everything raked. Professional work at a fair price is why so many customers have kept him on for years, and why one neighbour after another books him for the house next door.</p>
              </div>
              <a href={TEL} className="btn mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl bg-brand px-6 font-bold text-white hover:bg-brand-dark"><Icon name="phone" className="h-5 w-5" /> Talk to Sean: {PHONE}</a>
            </div>
            <div className="grid content-start gap-4 sm:grid-cols-2">
              {[
                { icon: "clock" as IconName, t: "Shows up on time", s: "Customers single out his punctuality more than anything else." },
                { icon: "dollar" as IconName, t: "Fair, reliable pricing", s: "The price he quotes is the price you pay." },
                { icon: "broom" as IconName, t: "Cleans up properly", s: "Yards are left neater than he found them." },
                { icon: "users" as IconName, t: "Trusted for years", s: "Repeat customers and neighbours referring neighbours." },
              ].map((d) => (
                <div key={d.t} className="rounded-2xl border border-line bg-white p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-tint text-brand"><Icon name={d.icon} className="h-6 w-6" /></span>
                  <h3 className="mt-4 text-lg">{d.t}</h3>
                  <p className="mt-2 text-muted">{d.s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <p className="text-sm font-bold text-brand">How it works</p>
            <h2 className="mt-2 max-w-[30ch] text-3xl md:text-[2.5rem]">From first text to a clean yard in four steps</h2>
            <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="relative border-t-2 border-brand pt-6">
                  <span className="font-[family-name:var(--font-heading)] text-5xl font-black text-brand/25">{i + 1}</span>
                  <h3 className="mt-2 text-xl">{s.title}</h3>
                  <p className="mt-2 text-muted">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold text-brand">Service area</p>
              <h2 className="mt-2 text-3xl md:text-[2.5rem]">Working in Toronto and across the GTA</h2>
              <p className="mt-4 text-lg text-muted">Not sure if you are on Sean&apos;s route? Send a quick text with your street and he will let you know. Booking alongside a neighbour is always welcome.</p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {area.map((a) => (
                  <li key={a} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 font-semibold"><Icon name="pin" className="h-4 w-4 text-brand" /> {a}</li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-line bg-white">
              <iframe title="Map of Toronto and the GTA service area" src="https://maps.google.com/maps?q=Toronto%2C%20ON&z=10&output=embed" className="h-[340px] w-full md:h-[400px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold text-brand">FAQ</p>
              <h2 className="mt-2 text-3xl md:text-[2.5rem]">Questions people ask before they call</h2>
              <p className="mt-4 text-lg text-muted">Anything else? Sean is easiest to reach by phone or text.</p>
              <a href={SMS} className="btn mt-6 inline-flex min-h-12 items-center gap-2 rounded-xl border-2 border-brand bg-white px-5 font-bold text-brand hover:bg-brand hover:text-white"><Icon name="message" className="h-5 w-5" /> Text a question</a>
            </div>
            <div className="divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex items-center justify-between gap-6 text-lg font-bold text-ink">
                    {f.q}
                    <span className="plus grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-xl leading-none text-brand" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 max-w-[65ch] text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-5 py-16 md:px-6 md:py-20">
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-3xl bg-brand px-7 py-12 text-white md:px-14 md:py-16">
            <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="text-3xl text-white md:text-[2.6rem]">Ready for a tidier yard? Call or text Sean at {PHONE}</h2>
                <p className="mt-4 text-lg text-white/85">Tree trimming, removals, regular yard care and clean-ups across Toronto and the GTA. Starts at 7 a.m.</p>
              </div>
              <div className="flex flex-col gap-3">
                <a href={TEL} className="btn inline-flex min-h-14 items-center justify-center gap-2.5 rounded-xl bg-cta px-7 text-lg font-bold text-ink hover:bg-cta-hover"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
                <a href={SMS} className="btn inline-flex min-h-14 items-center justify-center gap-2.5 rounded-xl border-2 border-white/70 px-7 text-lg font-bold text-white hover:bg-white hover:text-brand"><Icon name="message" className="h-5 w-5" /> Send a text</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-white pb-28 pt-14 md:pb-10">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:grid-cols-2 md:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-[family-name:var(--font-heading)] text-xl font-bold">Sean John&apos;s Tree Care and Property Management</p>
            <p className="mt-3 max-w-[40ch] text-muted">Neighbour-run tree care and property maintenance in Toronto and the GTA.</p>
            <p className="mt-4 flex items-center gap-2"><Stars className="h-4 w-4" /> <a href={MAPS} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold underline underline-offset-4">5.0 · 9 Google reviews</a></p>
          </div>
          <div>
            <p className="font-bold">Contact</p>
            <ul className="mt-3 space-y-2 text-muted">
              <li><a href={TEL} className="font-semibold text-brand">{PHONE}</a></li>
              <li><a href={SMS} className="hover:text-brand">Text Sean</a></li>
              <li><a href={MAPS} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Google listing</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Services</p>
            <ul className="mt-3 space-y-2 text-muted">
              {services.map((s) => <li key={s.title}><a href="#services" className="hover:text-brand">{s.title}</a></li>)}
            </ul>
          </div>
          <div>
            <p className="font-bold">Hours &amp; area</p>
            <ul className="mt-3 space-y-2 text-muted">
              <li>Opens 7 a.m.</li>
              <li>Toronto &amp; the Greater Toronto Area</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-[1200px] border-t border-line px-5 pt-6 text-sm text-muted md:px-6">© {new Date().getFullYear()} Sean John&apos;s Tree Care and Property Management</div>
      </footer>

      {/* Mobile call bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white p-3 md:hidden">
        <a href={TEL} className="btn inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cta font-bold text-ink"><Icon name="phone" className="h-5 w-5" /> Call</a>
        <a href={SMS} className="btn inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand font-bold text-white"><Icon name="message" className="h-5 w-5" /> Text</a>
      </div>
    </>
  );
}
