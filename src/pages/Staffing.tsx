import {
  Building2,
  Check,
  ChevronRight,
  Phone,
  Sparkles,
  UserRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { ApplicationForm } from '@/components/forms/ApplicationForm'
import { Button } from '@/components/Button'
import { CTASection } from '@/components/CTASection'
import { FaqAccordion } from '@/components/FaqAccordion'
import { PageMeta } from '@/components/PageMeta'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { placementSteps, staffingFaqs } from '@/lib/content'
import { site, whatsappLink } from '@/lib/site'
import detailDusting from '@/assets/images/detail-dusting.jpg'
import teamStaffing from '@/assets/images/team-staffing.jpg'

export default function Staffing() {
  return (
    <>
      <PageMeta
        description="L&S Helping Hands connects reliable maids and cleaners with households and businesses in Durban North — and helps job seekers find suitable cleaning work."
        title="Staffing & Maids"
      />

      <section className="grain relative overflow-hidden bg-forest text-cream">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 size-[32rem] rounded-full border border-cream/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 left-1/4 size-96 rounded-full bg-gold/10 blur-3xl"
        />

        <div className="container-x relative grid items-center gap-14 pb-20 pt-9 md:pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24">
          <div>
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-cream/35"
            >
              <Link className="transition-colors hover:text-cream" to="/">
                Home
              </Link>
              <ChevronRight aria-hidden="true" className="size-3" />
              <span className="text-cream/70">Staffing</span>
            </nav>

            <div className="mt-8 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-gold-soft/70" />
              <span className="eyebrow text-cream/50">
                Placements &amp; staffing
              </span>
            </div>

            <h1 className="mt-6 font-display text-[clamp(2.8rem,6vw,5.2rem)] font-light leading-[0.96] tracking-[-0.03em]">
              Good people.
              <br />
              Good work.
              <span className="block italic text-gold-soft">A better fit.</span>
            </h1>

            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-cream/65 md:text-[16.5px]">
              We connect reliable maids and cleaners with households and
              businesses across Durban — and help job seekers find steady,
              respectful work.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" to="/contact?service=maid-placements" variant="light">
                I need help
              </Button>
              <Button size="lg" to="/staffing#apply" variant="outline-light">
                I'm looking for work
              </Button>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-cream/12 pt-6">
              {['Careful matching', 'Clear terms', 'Durban & surrounds'].map(
                (item) => (
                  <span
                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-cream/45"
                    key={item}
                  >
                    <Check
                      aria-hidden="true"
                      className="size-3.5 text-gold-soft/80"
                      strokeWidth={2.4}
                    />
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <Reveal className="relative mx-auto w-full max-w-[500px] lg:mx-0">
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 hidden h-full w-full rounded-[32px] border border-cream/15 sm:block"
            />
            <div className="relative overflow-hidden rounded-[32px]">
              <img
                alt="A friendly, diverse cleaning team standing together in a bright home"
                className="aspect-[4/3] w-full object-cover"
                loading="eager"
                src={teamStaffing}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-cream/15 bg-forest/75 p-4 backdrop-blur-md sm:inset-x-5 sm:bottom-5">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-full bg-gold/20 text-gold-soft">
                    <Sparkles aria-hidden="true" className="size-4" strokeWidth={1.6} />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold text-cream">
                      For employers &amp; job seekers
                    </p>
                    <p className="mt-0.5 text-[9.5px] text-cream/50">
                      One conversation at a time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Two audience cards */}
      <section className="bg-cream py-16 md:py-20">
        <div className="container-x">
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col rounded-[28px] border border-forest/12 bg-mist/55 p-6 md:p-8">
                <span className="grid size-11 place-items-center rounded-full bg-cream text-forest shadow-sm">
                  <Building2 aria-hidden="true" className="size-5" strokeWidth={1.5} />
                </span>
                <p className="mt-5 eyebrow text-forest/40">For employers</p>
                <h2 className="mt-2 font-display text-[1.9rem] font-light leading-tight tracking-[-0.02em] text-ink">
                  Find the right help.
                </h2>
                <p className="mt-3 text-[13.5px] leading-relaxed text-forest/60">
                  Tell us the hours, duties and kind of person who would fit your
                  home or team. We will help you find a suitable match.
                </p>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {[
                    'Part-time, full-time or ongoing help',
                    'Domestic, office and commercial roles',
                    'Introduced before you commit',
                    'Terms agreed upfront',
                  ].map((item) => (
                    <li
                      className="flex items-start gap-2.5 text-[12.5px] leading-snug text-forest/65"
                      key={item}
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 size-3.5 shrink-0 text-pine/70"
                        strokeWidth={2.2}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  className="mt-7 self-start"
                  size="md"
                  to="/contact?service=maid-placements"
                >
                  Request staff
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="flex h-full flex-col rounded-[28px] bg-forest p-6 text-cream md:p-8">
                <span className="grid size-11 place-items-center rounded-full bg-cream/10 text-gold-soft">
                  <UserRound aria-hidden="true" className="size-5" strokeWidth={1.5} />
                </span>
                <p className="mt-5 eyebrow text-cream/40">For maids &amp; cleaners</p>
                <h2 className="mt-2 font-display text-[1.9rem] font-light leading-tight tracking-[-0.02em]">
                  Looking for work?
                </h2>
                <p className="mt-3 text-[13.5px] leading-relaxed text-cream/60">
                  Share your experience, availability and the areas you can travel
                  to. If your profile fits a placement, we will be in touch.
                </p>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {[
                    'Part-time and full-time opportunities',
                    'Domestic, office and industrial cleaning',
                    'Your experience and availability considered',
                    'Clear expectations before you start',
                  ].map((item) => (
                    <li
                      className="flex items-start gap-2.5 text-[12.5px] leading-snug text-cream/65"
                      key={item}
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 size-3.5 shrink-0 text-gold-soft"
                        strokeWidth={2.2}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  className="mt-7 self-start"
                  size="md"
                  to="/staffing#apply"
                  variant="light"
                >
                  Apply to join
                </Button>
              </div>
            </Reveal>
          </div>

          <p className="mt-5 text-center text-[11px] text-forest/40">
            We will always explain the process and any terms before either side
            commits.
          </p>
        </div>
      </section>

      {/* How placements work */}
      <section className="border-y border-forest/10 bg-mist/60 py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <SectionHeading
            description="A considered process, so both sides start with the same understanding."
            eyebrow="How it works"
            title={
              <>
                A proper match, not a
                <span className="italic text-pine"> quick swap.</span>
              </>
            }
          />

          <div className="grid gap-8 sm:grid-cols-3">
            {placementSteps.map((step, index) => (
              <Reveal delay={index * 0.06} key={step.number}>
                <div className="border-t border-forest/15 pt-5">
                  <span className="font-display text-[2rem] leading-none text-gold/80">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-[14px] font-bold text-forest">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-forest/55">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Good fit */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-[470px] lg:mx-0">
            <div className="overflow-hidden rounded-[32px]">
              <img
                alt="A cleaner carefully dusting a shelved clock in a warm, well-kept home"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
                src={detailDusting}
              />
            </div>
            <div className="absolute -bottom-5 -right-2 max-w-[220px] rounded-2xl border border-forest/10 bg-cream/95 p-4 shadow-soft backdrop-blur-md sm:-right-5">
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-gold">
                The right match
              </p>
              <p className="mt-1.5 text-[11.5px] leading-relaxed text-forest/55">
                Someone who fits the space, the routine and the people in it.
              </p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              description="A placement only works when the person is right for the home or team — and the arrangement is right for them."
              eyebrow="On both sides"
              title={
                <>
                  A good fit
                  <span className="italic text-pine"> matters.</span>
                </>
              }
            />

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-forest/12 bg-mist/50 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-forest/40">
                  For employers
                </p>
                <ul className="mt-3 space-y-2">
                  {[
                    'A clear brief from the start',
                    'Suitable introductions',
                    'Support settling in',
                  ].map((item) => (
                    <li
                      className="flex items-start gap-2 text-[12px] text-forest/60"
                      key={item}
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 size-3 shrink-0 text-pine/60"
                        strokeWidth={2.4}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-forest/12 bg-mist/50 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-forest/40">
                  For candidates
                </p>
                <ul className="mt-3 space-y-2">
                  {[
                    'Honest conversations',
                    'Suitable roles and hours',
                    'Clear terms upfront',
                  ].map((item) => (
                    <li
                      className="flex items-start gap-2 text-[12px] text-forest/60"
                      key={item}
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 size-3 shrink-0 text-pine/60"
                        strokeWidth={2.4}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button size="md" to="/contact?service=maid-placements">
                Talk about hiring
              </Button>
              <Button size="md" to="/staffing#apply" variant="outline">
                Apply to join
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Application */}
      <section
        className="scroll-mt-24 border-t border-forest/10 bg-mist/65 py-20 md:py-28"
        id="apply"
      >
        <div className="container-x">
          <SectionHeading
            description="No CV needed. Tell us the basics through the form and it will open in WhatsApp, ready to send."
            eyebrow="For maids & cleaners"
            title={
              <>
                Put your hand
                <span className="italic text-pine"> up.</span>
              </>
            }
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <div className="rounded-[28px] border border-forest/12 bg-cream/85 p-5 shadow-card sm:p-7 md:p-8">
              <ApplicationForm />
            </div>

            <aside className="space-y-4">
              <div className="rounded-[28px] bg-forest p-6 text-cream md:p-7">
                <p className="eyebrow text-cream/40">Prefer to talk?</p>
                <p className="mt-3 text-[13px] leading-relaxed text-cream/60">
                  Call or WhatsApp us directly. We are happy to answer questions
                  before you apply.
                </p>
                <div className="mt-5 space-y-2">
                  {site.phones.map((phone) => (
                    <a
                      className="flex items-center gap-2.5 text-sm text-cream/80 transition-colors hover:text-cream"
                      href={phone.href}
                      key={phone.href}
                    >
                      <Phone aria-hidden="true" className="size-4 text-gold-soft" />
                      {phone.label}
                    </a>
                  ))}
                </div>
                <Button
                  className="mt-5 w-full"
                  external
                  href={whatsappLink(
                    "Hi L&S Helping Hands, I'd like to ask about cleaning work.",
                  )}
                  icon={<WhatsAppIcon size={17} />}
                  size="sm"
                  variant="light"
                >
                  WhatsApp us
                </Button>
              </div>

              <div className="rounded-[28px] border border-forest/12 bg-cream/80 p-6">
                <p className="eyebrow text-forest/40">Helpful to include</p>
                <ul className="mt-4 space-y-2.5">
                  {[
                    'Any cleaning or domestic experience',
                    'The areas you can travel to',
                    'Your availability and preferred hours',
                    'References, if you have them',
                  ].map((item) => (
                    <li
                      className="flex items-start gap-2.5 text-[12px] leading-snug text-forest/55"
                      key={item}
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 size-3.5 shrink-0 text-pine/60"
                        strokeWidth={2.2}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[10.5px] leading-relaxed text-forest/35">
                  Your details are used only to consider you for suitable
                  placements. See our{' '}
                  <Link
                    className="underline underline-offset-2 hover:text-forest"
                    to="/privacy"
                  >
                    privacy note
                  </Link>
                  .
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeading
            description="The practical bits, before you get in touch."
            eyebrow="Placement questions"
            title={
              <>
                A few things to
                <span className="italic text-pine"> know.</span>
              </>
            }
          />
          <FaqAccordion items={staffingFaqs} />
        </div>
      </section>

      <CTASection
        description="Whether you need a helping hand or want to offer yours, a short conversation is the best place to start."
        eyebrow="Let's talk"
        title="The right fit starts here."
      />
    </>
  )
}
