import {
  CalendarCheck,
  Check,
  HeartHandshake,
  Sparkles,
  Users,
} from 'lucide-react'
import { Button } from '@/components/Button'
import { CTASection } from '@/components/CTASection'
import { PageIntro } from '@/components/PageIntro'
import { PageMeta } from '@/components/PageMeta'
import { Reveal } from '@/components/Reveal'
import { Seal } from '@/components/Seal'
import { SectionHeading } from '@/components/SectionHeading'
import { values } from '@/lib/content'
import aboutCleaner from '@/assets/images/about-cleaner.jpg'
import homeLounge from '@/assets/images/home-lounge.jpg'
import teamStaffing from '@/assets/images/team-staffing.jpg'

const valueIcons = [Sparkles, HeartHandshake, CalendarCheck, Users]

export default function About() {
  return (
    <>
      <PageMeta
        description="Meet L&S Helping Hands & Cleaning Services — a Durban North team offering careful cleaning and thoughtful maid placements for homes, offices and commercial spaces."
        title="About Us"
      />

      <PageIntro
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        eyebrow="About L&S"
        lead="L and S Helping Hands & Cleaning Services is a Durban North cleaning and placement service built on the belief that good help should be easy to find — and a clean space should feel effortless."
        title={
          <>
            A local team with a simple standard:
            <span className="italic text-pine"> care.</span>
          </>
        }
      >
        <Button size="md" to="/contact">
          Work with us
        </Button>
        <Button size="md" to="/services" variant="outline">
          Explore services
        </Button>
      </PageIntro>

      <section className="bg-cream pb-16 pt-10 md:pb-24 md:pt-14">
        <div className="container-x">
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-[32px] md:rounded-[40px]">
              <img
                alt="A warm, immaculate living room with timber floors, linen sofas and greenery"
                className="aspect-[16/10] w-full object-cover md:aspect-[21/9]"
                loading="eager"
                src={homeLounge}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
            </div>

            <div className="absolute -top-5 right-6 z-20 hidden sm:block md:right-12">
              <Seal className="size-28 border-cream/40" />
            </div>

            <div className="relative -mt-10 ml-4 max-w-sm rounded-2xl border border-forest/10 bg-cream/95 p-5 shadow-soft backdrop-blur-md sm:-mt-14 sm:ml-8 sm:p-6 md:-mt-20 md:ml-12">
              <p className="eyebrow text-forest/35">Our standard</p>
              <p className="mt-2.5 font-display text-lg italic leading-snug text-forest/75 md:text-xl">
                “Careful hands, clear communication, a job properly finished.”
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream pb-20 md:pb-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title={
                <>
                  We lend a hand, so you can get on with
                  <span className="italic text-pine"> your day.</span>
                </>
              }
            />

            <div className="mt-6 max-w-xl space-y-4 text-[14px] leading-relaxed text-forest/62">
              <p>
                We work with households, offices and commercial sites across
                Durban — offering part-time cleaning and connecting reliable
                maids and cleaners with the people who need them.
              </p>
              <p>
                Whether it is a weekly home refresh, a busy office or a once-off
                reset, we bring the same standard: careful hands, clear
                communication and a job properly finished.
              </p>
              <p>
                The name says it all. We are here to lend a hand — and leave your
                space better than we found it.
              </p>
            </div>

            <div className="mt-8 border-l-2 border-gold/60 pl-5">
              <p className="font-display text-xl italic text-forest/75">
                The L&amp;S team
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-forest/35">
                Durban North, KwaZulu-Natal
              </p>
            </div>
          </div>

          <Reveal className="relative mx-auto w-full max-w-[460px] lg:mx-0">
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 hidden h-full w-full rounded-[32px] border border-gold/30 sm:block"
            />
            <div className="relative overflow-hidden rounded-[32px]">
              <img
                alt="A professional cleaner mopping the floor of a bright, modern home"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
                src={aboutCleaner}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-cream/20 bg-forest/70 p-4 backdrop-blur-md sm:inset-x-5 sm:bottom-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-gold-soft">
                  Real people, real care
                </p>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-cream/75">
                  Introductions before work begins, so you always know who is
                  coming into your space.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-forest/10 bg-mist/60 py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            align="center"
            description="Four quiet principles that shape how we clean, how we communicate and how we work with people."
            eyebrow="What we believe"
            title={
              <>
                Small things, done
                <span className="italic text-pine"> properly.</span>
              </>
            }
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = valueIcons[index] ?? Sparkles
              return (
                <Reveal delay={index * 0.05} key={value.title}>
                  <div className="h-full rounded-3xl border border-forest/10 bg-cream/85 p-6 transition-transform duration-500 hover:-translate-y-1">
                    <div className="flex items-center justify-between">
                      <span className="grid size-10 place-items-center rounded-full bg-mint/80 text-forest">
                        <Icon
                          aria-hidden="true"
                          className="size-[18px]"
                          strokeWidth={1.5}
                        />
                      </span>
                      <span className="font-display text-sm text-gold/70">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 text-[14px] font-bold text-forest">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-forest/55">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-forest py-20 text-cream md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-10 size-80 rounded-full border border-cream/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 bottom-0 size-72 rounded-full bg-gold/10 blur-3xl"
        />

        <div className="container-x relative grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Reveal className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-[32px]">
              <img
                alt="Three cleaners standing together in a freshly cleaned living room"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                src={teamStaffing}
              />
            </div>
            <div className="absolute -bottom-5 left-5 rounded-2xl border border-cream/15 bg-forest/85 px-4 py-3 backdrop-blur-md">
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-gold-soft">
                Homes · offices · industry
              </p>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              description="A clean space is personal. That is why we keep the human part of the service as considered as the cleaning itself."
              eyebrow="People first"
              light
              title={
                <>
                  You should know who is coming into
                  <span className="italic text-gold-soft"> your space.</span>
                </>
              }
            />

            <ul className="mt-8 space-y-4">
              {[
                'A proper conversation before anything is arranged',
                'Introductions before work begins, so you can decide',
                'Clear duties, hours and expectations agreed upfront',
                'A local team you can call or message when needed',
              ].map((item) => (
                <li className="flex items-start gap-3" key={item}>
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-cream/20 text-gold-soft">
                    <Check
                      aria-hidden="true"
                      className="size-3"
                      strokeWidth={2.4}
                    />
                  </span>
                  <span className="text-[13px] leading-relaxed text-cream/70">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button size="md" to="/staffing" variant="light">
                How staffing works
              </Button>
              <Button size="md" to="/contact" variant="outline-light">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        description="If our approach sounds like the kind of service you want, we would love to hear about your space."
        eyebrow="Let's work together"
        title="A cleaner space, a lighter day."
      />
    </>
  )
}
