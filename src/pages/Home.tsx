import {
  ArrowRight,
  ArrowUpRight,
  CalendarClock,
  Check,
  FileCheck2,
  HeartHandshake,
  MapPin,
  Phone,
  Sparkles,
} from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/Button'
import { CTASection } from '@/components/CTASection'
import { FaqAccordion } from '@/components/FaqAccordion'
import { PageMeta } from '@/components/PageMeta'
import { Reveal } from '@/components/Reveal'
import { Seal } from '@/components/Seal'
import { SectionHeading } from '@/components/SectionHeading'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import {
  featuredServices,
  homeFaqs,
  processSteps,
  promises,
  services,
} from '@/lib/content'
import {
  defaultWhatsAppMessage,
  phonePrimary,
  whatsappLink,
} from '@/lib/site'
import heroMirror from '@/assets/images/hero-mirror.jpg'
import heroInterior from '@/assets/images/hero-interior.jpg'
import detailBath from '@/assets/images/detail-bath.jpg'
import detailWindow from '@/assets/images/detail-window.jpg'
import teamStaffing from '@/assets/images/team-staffing.jpg'

const marqueeItems = [
  'Domestic cleaning',
  'Part-time maids',
  'Office & corporate',
  'Industrial cleaning',
  'Staff placements',
  'Tailored services',
]

const promiseIcons = [HeartHandshake, FileCheck2, CalendarClock, MapPin]

export default function Home() {
  const tailored = services[4]

  return (
    <>
      <PageMeta
        description="L&S Helping Hands & Cleaning Services offers domestic, office and industrial cleaning in Durban North, plus careful placement of part-time maids and cleaners. Call or WhatsApp for a tailored quote."
        title="Cleaning Services & Maids in Durban North"
      />

      {/* Hero */}
      <section className="grain relative overflow-hidden bg-cream">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-20 size-[38rem] rounded-full bg-mint/60 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-40 size-[30rem] rounded-full bg-sand/40 blur-3xl"
        />

        <div className="container-x relative grid gap-16 pb-20 pt-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12 lg:pb-28 lg:pt-16">
          <div className="relative z-10">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-forest/12 bg-white/55 px-3.5 py-2 backdrop-blur-sm"
              initial={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-pine/50" />
                <span className="relative inline-flex size-2 rounded-full bg-pine" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-forest/60">
                Durban North · KwaZulu-Natal
              </span>
            </motion.div>

            <motion.h1
              animate={{ opacity: 1, y: 0 }}
              className="mt-7 font-display text-[clamp(3.1rem,7.2vw,6rem)] font-light leading-[0.93] tracking-[-0.035em] text-ink"
              initial={{ opacity: 0, y: 22 }}
              transition={{
                delay: 0.08,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              A beautifully
              <br />
              clean space.
              <span className="mt-2 block italic text-pine">Caring hands.</span>
            </motion.h1>

            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="mt-7 max-w-lg text-[15px] leading-relaxed text-forest/64 md:text-[16.5px]"
              initial={{ opacity: 0, y: 18 }}
              transition={{
                delay: 0.16,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Reliable cleaning for homes, offices and industrial spaces across
              Durban North — plus thoughtful placement of maids and cleaners you
              can count on.
            </motion.p>

            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mt-9 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 18 }}
              transition={{
                delay: 0.24,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Button size="lg" to="/contact">
                Request a quote
              </Button>
              <Button
                external
                href={whatsappLink(defaultWhatsAppMessage)}
                icon={<WhatsAppIcon size={18} />}
                size="lg"
                variant="outline"
              >
                WhatsApp us
              </Button>
            </motion.div>

            <motion.div
              animate={{ opacity: 1 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-forest/10 pt-6"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.36, duration: 0.8 }}
            >
              {[
                'Part-time or ongoing',
                'Carefully matched',
                'Durban North based',
              ].map((item) => (
                <span
                  className="flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.1em] text-forest/45"
                  key={item}
                >
                  <Check
                    aria-hidden="true"
                    className="size-3.5 text-pine/70"
                    strokeWidth={2.4}
                  />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="relative mx-auto w-full max-w-[540px] lg:mr-0"
            initial={{ opacity: 0, scale: 0.97 }}
            transition={{
              delay: 0.15,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div
              aria-hidden="true"
              className="absolute -left-5 top-10 hidden h-[86%] w-[94%] rounded-[13rem_13rem_2rem_2rem] border border-gold/30 sm:block"
            />
            <div className="arch-frame relative overflow-hidden bg-mint shadow-soft">
              <img
                alt="A cleaner carefully dusting a round mirror in a bright, elegant bathroom"
                className="h-[430px] w-full object-cover sm:h-[540px] lg:h-[590px]"
                fetchPriority="high"
                height={1800}
                src={heroMirror}
                width={1200}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
            </div>

            <div className="absolute -left-4 top-8 z-20 sm:-left-8 sm:top-12">
              <Seal className="size-24 border-cream/40 sm:size-28" />
            </div>

            <div className="absolute -bottom-8 right-1 w-[180px] rotate-[2.5deg] overflow-hidden rounded-2xl border-[6px] border-cream bg-cream shadow-card sm:-right-4 sm:w-[215px]">
              <img
                alt="A calm, sunlit living room with warm timber and soft furnishings"
                className="aspect-[4/3] w-full object-cover"
                height={600}
                loading="lazy"
                src={heroInterior}
                width={800}
              />
              <p className="px-3 py-2 text-[8px] font-bold uppercase tracking-[0.16em] text-forest/45">
                Homes · offices · industry
              </p>
            </div>

            <div className="absolute bottom-20 left-0 hidden items-center gap-2.5 rounded-2xl border border-forest/10 bg-cream/95 px-4 py-3 shadow-card backdrop-blur-md sm:-left-8 sm:flex">
              <span className="grid size-8 place-items-center rounded-full bg-mint text-forest">
                <Sparkles aria-hidden="true" className="size-4" strokeWidth={1.7} />
              </span>
              <div>
                <p className="text-[11px] font-bold text-forest">
                  Carefully matched
                </p>
                <p className="text-[9.5px] text-forest/45">
                  People you can trust at home
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee border-y border-forest/10 bg-mint/35 py-4">
        <p className="sr-only">
          Our services include {marqueeItems.join(', ')}.
        </p>
        <div aria-hidden="true" className="marquee-track">
          {[0, 1].map((copy) => (
            <div className="flex shrink-0 items-center" key={copy}>
              {marqueeItems.map((item) => (
                <span
                  className="flex items-center gap-6 px-6 text-[10px] font-bold uppercase tracking-[0.2em] text-forest/55"
                  key={`${copy}-${item}`}
                >
                  {item}
                  <Asterisk />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              description="From a weekly home refresh to a full commercial site, every service is scoped around your space and your routine."
              eyebrow="What we do"
              title={
                <>
                  Care for <span className="italic text-pine">every kind</span> of
                  space.
                </>
              }
            />
            <Button
              className="shrink-0 self-start md:self-auto"
              to="/services"
              variant="outline"
            >
              All services
            </Button>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-5">
            {featuredServices.map((service, index) => (
              <Reveal delay={index * 0.06} key={service.id}>
                <Link
                  aria-label={`${service.title} — learn more`}
                  className="group relative flex min-h-[410px] flex-col justify-between overflow-hidden rounded-[28px] bg-forest p-6 text-cream md:min-h-[470px] md:p-8"
                  to={`/services#${service.id}`}
                >
                  <img
                    alt={service.imageAlt}
                    className="img-zoom absolute inset-0 size-full object-cover"
                    loading="lazy"
                    src={service.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/35 to-ink/10" />
                  <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-ink/65 via-ink/25 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-forest/20 to-transparent" />

                  <div className="relative flex items-start justify-between gap-4">
                    <span className="eyebrow text-cream/70">
                      {service.number} — {service.eyebrow}
                    </span>
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-cream/25 bg-cream/10 text-cream backdrop-blur-md transition-all duration-300 group-hover:border-cream/60 group-hover:bg-cream group-hover:text-forest">
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4"
                        strokeWidth={1.7}
                      />
                    </span>
                  </div>

                  <div className="relative mt-16">
                    <h3 className="font-display text-[1.9rem] font-light leading-[1.02] tracking-[-0.02em] md:text-[2.15rem]">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-cream/70">
                      {service.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          className="rounded-full border border-cream/20 bg-cream/5 px-3 py-1.5 text-[9.5px] font-semibold uppercase tracking-[0.1em] text-cream/65 backdrop-blur-sm"
                          key={tag}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-4">
            <div className="grid overflow-hidden rounded-[28px] border border-forest/10 bg-mist/60 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-px w-8 bg-gold/70" />
                  <span className="eyebrow text-forest/50">Beyond the checklist</span>
                </div>
                <h3 className="mt-4 font-display text-[1.9rem] font-light leading-[1.05] tracking-[-0.02em] text-ink md:text-[2.4rem]">
                  Something specific in mind?
                </h3>
                <p className="mt-3 max-w-md text-[13.5px] leading-relaxed text-forest/60">
                  Windows, post-renovation dust, a move-out clean or a space that
                  needs a proper reset — tell us what matters and we will build a
                  scope around it.
                </p>
                <Link
                  className="group mt-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] text-forest"
                  to="/services#tailored-cleaning"
                >
                  Explore tailored cleaning
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={1.8}
                  />
                </Link>
              </div>
              <div className="relative min-h-[220px] overflow-hidden lg:min-h-full">
                <img
                  alt={tailored.imageAlt}
                  className="img-zoom absolute inset-0 size-full object-cover"
                  loading="lazy"
                  src={detailWindow}
                />
                <div className="absolute inset-0 bg-forest/10 mix-blend-multiply" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The difference */}
      <section className="border-y border-forest/8 bg-mist/55 py-20 md:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-[480px] lg:mx-0">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 hidden h-full w-full rounded-[32px] border border-gold/30 sm:block"
            />
            <div className="relative overflow-hidden rounded-[32px] shadow-card">
              <img
                alt="A spotless, light-filled bathroom with a walk-in shower and fresh towels"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
                src={detailBath}
              />
            </div>
            <div className="absolute -bottom-7 -right-2 w-[58%] overflow-hidden rounded-2xl border-[6px] border-cream shadow-soft sm:-right-6">
              <img
                alt="A cleaner bringing a shower screen to a streak-free shine"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                src={detailWindow}
              />
            </div>
            <div className="absolute left-5 top-5 rounded-full border border-cream/40 bg-cream/90 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-forest shadow-card backdrop-blur-sm">
              The details, finished
            </div>
          </Reveal>

          <div>
            <SectionHeading
              description="Anyone can push a broom. We bring a standard: thoughtful people, clear agreements and a finish that holds up to a closer look."
              eyebrow="The L&S standard"
              title={
                <>
                  The difference is in
                  <span className="italic text-pine"> the care.</span>
                </>
              }
            />

            <div className="mt-9">
              {[
                {
                  title: 'Matched with care',
                  description:
                    'We take the time to understand your space and the kind of help you actually want.',
                },
                {
                  title: 'A schedule that fits',
                  description:
                    'Part-time, weekly, fortnightly or once-off. Your routine leads, not ours.',
                },
                {
                  title: 'Clear scope, clear quote',
                  description:
                    'Agree what is included before we start. No guesswork, no awkward surprises.',
                },
                {
                  title: 'Details, finished',
                  description:
                    'Skirting boards, switch plates, the corners people notice. We finish properly.',
                },
              ].map((item, index) => (
                <Reveal delay={index * 0.05} key={item.title}>
                  <div className="grid grid-cols-[2.4rem_1fr] gap-3 border-t border-forest/12 py-5">
                    <span className="font-display text-lg text-gold">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-[14.5px] font-bold text-forest">
                        {item.title}
                      </h3>
                      <p className="mt-1 max-w-md text-[13px] leading-relaxed text-forest/55">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-7 border-l-2 border-gold/60 pl-5">
              <p className="font-display text-lg italic leading-snug text-forest/70 md:text-xl">
                “The best compliment is a space that simply feels right.”
              </p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-forest/35">
                The L&amp;S team
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Staffing */}
      <section className="grain relative overflow-hidden bg-forest py-20 text-cream md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-1/3 size-[28rem] rounded-full border border-cream/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 bottom-0 size-72 rounded-full bg-gold/[0.08] blur-3xl"
        />

        <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <SectionHeading
              description="We bring households, businesses and good cleaners together — with a proper conversation, a careful match and clear terms from the start."
              eyebrow="Placements & staffing"
              light
              title={
                <>
                  Good help shouldn't be
                  <span className="italic text-gold-soft"> hard to find.</span>
                </>
              }
            />

            <div className="mt-9 grid gap-6 sm:grid-cols-2">
              <div className="border-t border-cream/15 pt-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-soft/80">
                  For homes &amp; businesses
                </p>
                <p className="mt-2.5 text-[13px] leading-relaxed text-cream/60">
                  Part-time maids, domestic help and cleaning staff, matched to
                  your hours and requirements.
                </p>
              </div>
              <div className="border-t border-cream/15 pt-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-soft/80">
                  For maids &amp; cleaners
                </p>
                <p className="mt-2.5 text-[13px] leading-relaxed text-cream/60">
                  Looking for work? Share your experience and we will keep you in
                  mind for suitable placements.
                </p>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button size="md" to="/staffing" variant="light">
                Explore staffing
              </Button>
              <Button size="md" to="/staffing#apply" variant="outline-light">
                Apply to join
              </Button>
            </div>

            <p className="mt-5 text-[11px] leading-relaxed text-cream/35">
              We will explain the process and any terms clearly before you commit.
            </p>
          </div>

          <Reveal className="relative mx-auto w-full max-w-[520px] lg:mx-0">
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 hidden h-full w-full rounded-[32px] border border-cream/15 sm:block"
            />
            <div className="relative overflow-hidden rounded-[32px]">
              <img
                alt="A small, friendly cleaning team ready for work in a bright living space"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                src={teamStaffing}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-1 rounded-2xl border border-cream/15 bg-forest/70 px-4 py-3 backdrop-blur-md">
                  {['Part-time', 'Full-time', 'Ongoing'].map((item) => (
                    <span
                      className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-cream/70"
                      key={item}
                    >
                      <span
                        aria-hidden="true"
                        className="size-1 rounded-full bg-gold-soft"
                      />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <SectionHeading
            description="Simple, clear steps — whether it is a one-off clean or a long-term arrangement."
            eyebrow="How it works"
            title={
              <>
                From first message to
                <span className="italic text-pine"> spotless.</span>
              </>
            }
          />

          <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <Reveal delay={index * 0.06} key={step.number}>
                <div className="border-t border-forest/15 pt-5">
                  <span className="font-display text-[2.2rem] leading-none text-gold/80">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-[15px] font-bold text-forest">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-forest/55">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="pb-20 md:pb-28">
        <div className="container-x">
          <div className="grain relative overflow-hidden rounded-[36px] bg-forest px-6 py-12 text-cream md:px-12 md:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-32 size-96 rounded-full border border-cream/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 left-1/3 size-64 rounded-full bg-gold/10 blur-3xl"
            />

            <div className="relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <div>
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-px w-8 bg-gold-soft/70" />
                  <span className="eyebrow text-cream/50">Our promise</span>
                </div>
                <h2 className="mt-5 font-display text-[clamp(2rem,3.6vw,3.2rem)] font-light leading-[1.02] tracking-[-0.025em]">
                  Care you can
                  <span className="italic text-gold-soft"> count on.</span>
                </h2>
                <p className="mt-5 max-w-sm text-[13.5px] leading-relaxed text-cream/60">
                  No overpromising. Just the quiet, consistent things that make a
                  service worth keeping.
                </p>
                <Link
                  className="group mt-7 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-gold-soft transition-colors hover:text-cream"
                  to="/about"
                >
                  More about us
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>

              <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                {promises.map((promise, index) => {
                  const Icon = promiseIcons[index] ?? Sparkles
                  return (
                    <Reveal delay={index * 0.05} key={promise.title}>
                      <div>
                        <span className="grid size-9 place-items-center rounded-full border border-cream/15 bg-cream/5 text-gold-soft">
                          <Icon
                            aria-hidden="true"
                            className="size-4"
                            strokeWidth={1.5}
                          />
                        </span>
                        <h3 className="mt-3.5 text-[13.5px] font-bold">
                          {promise.title}
                        </h3>
                        <p className="mt-2 text-[12.5px] leading-relaxed text-cream/55">
                          {promise.description}
                        </p>
                      </div>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream pb-20 md:pb-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <SectionHeading
              description="If your question is not here, a quick WhatsApp is usually the fastest way to an answer."
              eyebrow="Good to know"
              title={
                <>
                  A few things you might be
                  <span className="italic text-pine"> wondering.</span>
                </>
              }
            />
            <div className="mt-8 rounded-2xl border border-forest/12 bg-mist/50 p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-forest/40">
                Prefer to talk?
              </p>
              <a
                className="mt-2 flex items-center gap-2 font-display text-xl text-forest transition-colors hover:text-pine"
                href={phonePrimary.href}
              >
                <Phone aria-hidden="true" className="size-4" />
                {phonePrimary.label}
              </a>
              <a
                className="mt-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-pine"
                href={whatsappLink(
                  "Hi L&S Helping Hands, I have a question about your services.",
                )}
                rel="noopener noreferrer"
                target="_blank"
              >
                <WhatsAppIcon size={15} />
                Or message us on WhatsApp
              </a>
            </div>
          </div>

          <FaqAccordion items={homeFaqs} />
        </div>
      </section>

      <CTASection />
    </>
  )
}

function Asterisk() {
  return (
    <svg
      aria-hidden="true"
      className="size-2.5 text-gold/70"
      fill="currentColor"
      viewBox="0 0 12 12"
    >
      <path d="M6 0v12M0 6h12M1.76 1.76l8.48 8.48M10.24 1.76l-8.48 8.48" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}
