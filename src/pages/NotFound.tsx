import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/Button'
import { PageMeta } from '@/components/PageMeta'

export default function NotFound() {
  return (
    <>
      <PageMeta
        description="This page could not be found."
        title="Page Not Found"
      />

      <section className="grain relative flex min-h-[70svh] items-center overflow-hidden bg-cream">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 size-[30rem] rounded-full border border-forest/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-20 size-80 rounded-full bg-mint/60 blur-3xl"
        />

        <div className="container-x relative py-20">
          <p className="font-display text-[clamp(5rem,16vw,11rem)] font-light leading-none tracking-[-0.06em] text-forest/12">
            404
          </p>
          <h1 className="mt-2 max-w-2xl font-display text-[clamp(2.2rem,5vw,3.8rem)] font-light leading-[1.02] tracking-[-0.03em] text-ink">
            This page has been tidied
            <span className="italic text-pine"> away.</span>
          </h1>
          <p className="mt-5 max-w-md text-[14px] leading-relaxed text-forest/60">
            The link may be old, or the page may have moved. Let's get you back to
            something useful.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button icon={<ArrowLeft className="size-4" />} to="/" variant="primary">
              Back to home
            </Button>
            <Button to="/contact" variant="outline">
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
