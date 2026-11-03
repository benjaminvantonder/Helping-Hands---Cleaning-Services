import { Check, RotateCcw } from 'lucide-react'
import { useId, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/Button'
import { Field, SelectField } from '@/components/forms/Field'
import { inputClasses } from '@/components/forms/fieldStyles'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { cn } from '@/lib/cn'
import { emailLink, whatsappLink } from '@/lib/site'

type FormState = {
  name: string
  phone: string
  area: string
  role: string
  experience: string
  availability: string
  message: string
  consent: boolean
}

type Errors = Partial<Record<keyof FormState, string>>

const roles = [
  'Part-time maid / cleaner',
  'Full-time domestic',
  'Office cleaner',
  'Industrial cleaner',
  'Not sure yet',
]

const experienceLevels = [
  'No formal experience',
  'Less than 1 year',
  '1–3 years',
  '3+ years',
]

const availabilityOptions = ['Weekdays', 'Weekends', 'Flexible']

export function ApplicationForm() {
  const formId = useId().replace(/:/g, '')
  const id = (field: string) => `${formId}-${field}`

  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    area: '',
    role: '',
    experience: '',
    availability: '',
    message: '',
    consent: false,
  })
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  const update =
    (key: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value = event.target.value
      setForm((current) => ({ ...current, [key]: value }))
      setErrors((current) => ({ ...current, [key]: undefined }))
    }

  const buildMessage = () =>
    [
      "Hi L&S Helping Hands, I'd like to be considered for cleaning work.",
      '',
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Area: ${form.area.trim()}`,
      `Role: ${form.role}`,
      form.experience ? `Experience: ${form.experience}` : null,
      form.availability ? `Availability: ${form.availability}` : null,
      form.message.trim() ? `About me: ${form.message.trim()}` : null,
    ]
      .filter(Boolean)
      .join('\n')

  const validate = () => {
    const next: Errors = {}
    if (form.name.trim().length < 2) next.name = 'Please tell us your name.'
    const digits = form.phone.replace(/\D/g, '')
    if (digits.length < 9) {
      next.phone = 'Please enter a phone number we can reach you on.'
    }
    if (form.area.trim().length < 2) next.area = 'Please add the area you live in.'
    if (!form.role) next.role = 'Please choose the kind of work you are after.'
    if (!form.consent) {
      next.consent = 'Please confirm we may contact you about your application.'
    }
    return next
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    const firstError = Object.keys(nextErrors)[0]
    if (firstError) {
      window.setTimeout(() => {
        const field = document.getElementById(id(firstError))
        field?.focus()
        field?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 60)
      return
    }

    window.open(whatsappLink(buildMessage()), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex min-h-[380px] flex-col items-start justify-center rounded-2xl border border-forest/10 bg-white/55 p-7 md:p-10">
        <span className="grid size-12 place-items-center rounded-full bg-forest text-cream">
          <Check aria-hidden="true" className="size-5" strokeWidth={2} />
        </span>
        <h3 className="mt-5 font-display text-3xl font-light tracking-[-0.02em] text-ink">
          Your application is ready.
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-forest/60">
          WhatsApp should have opened with your details filled in. Press send and
          we will review your application. If nothing opened, use a button below.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Button
            external
            href={whatsappLink(buildMessage())}
            icon={<WhatsAppIcon size={18} />}
            size="md"
            variant="primary"
          >
            Open WhatsApp
          </Button>
          <Button
            href={emailLink(
              `Cleaning work application — ${form.name.trim()}`,
              buildMessage(),
            )}
            size="md"
            variant="outline"
          >
            Send by email
          </Button>
        </div>

        <button
          className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold text-forest/50 transition-colors hover:text-forest"
          onClick={() => setSent(false)}
          type="button"
        >
          <RotateCcw aria-hidden="true" className="size-3.5" />
          Edit my details
        </button>
      </div>
    )
  }

  return (
    <form className="space-y-4" noValidate onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field error={errors.name} id={id('name')} label="Your name">
          <input
            aria-describedby={errors.name ? `${id('name')}-error` : undefined}
            aria-invalid={Boolean(errors.name)}
            autoComplete="name"
            className={inputClasses(Boolean(errors.name))}
            id={id('name')}
            name="name"
            onChange={update('name')}
            placeholder="First and last name"
            type="text"
            value={form.name}
          />
        </Field>

        <Field error={errors.phone} id={id('phone')} label="Phone number">
          <input
            aria-describedby={errors.phone ? `${id('phone')}-error` : undefined}
            aria-invalid={Boolean(errors.phone)}
            autoComplete="tel"
            className={inputClasses(Boolean(errors.phone))}
            id={id('phone')}
            inputMode="tel"
            name="phone"
            onChange={update('phone')}
            placeholder="e.g. 075 101 9153"
            type="tel"
            value={form.phone}
          />
        </Field>

        <Field error={errors.area} id={id('area')} label="Where do you live?">
          <input
            aria-describedby={errors.area ? `${id('area')}-error` : undefined}
            aria-invalid={Boolean(errors.area)}
            autoComplete="address-level2"
            className={inputClasses(Boolean(errors.area))}
            id={id('area')}
            name="area"
            onChange={update('area')}
            placeholder="e.g. Durban North"
            type="text"
            value={form.area}
          />
        </Field>

        <Field error={errors.role} id={id('role')} label="Work you're after">
          <SelectField
            hasError={Boolean(errors.role)}
            id={id('role')}
            name="role"
            onChange={update('role')}
            options={roles}
            placeholder="Choose a role"
            value={form.role}
          />
        </Field>

        <Field id={id('experience')} label="Experience" optional>
          <SelectField
            id={id('experience')}
            name="experience"
            onChange={update('experience')}
            options={experienceLevels}
            placeholder="How much experience?"
            value={form.experience}
          />
        </Field>

        <Field id={id('availability')} label="Availability" optional>
          <SelectField
            id={id('availability')}
            name="availability"
            onChange={update('availability')}
            options={availabilityOptions}
            placeholder="When can you work?"
            value={form.availability}
          />
        </Field>

        <Field
          className="sm:col-span-2"
          id={id('message')}
          label="A little about you"
          optional
        >
          <textarea
            className={cn(inputClasses(), 'min-h-[110px] resize-y')}
            id={id('message')}
            name="message"
            onChange={update('message')}
            placeholder="Past experience, references, transport, the areas you can travel to..."
            value={form.message}
          />
        </Field>
      </div>

      <div>
        <label
          className="flex cursor-pointer items-start gap-3 rounded-xl border border-transparent py-1 text-[12px] leading-relaxed text-forest/55"
          htmlFor={id('consent')}
        >
          <input
            aria-describedby={errors.consent ? `${id('consent')}-error` : undefined}
            aria-invalid={Boolean(errors.consent)}
            checked={form.consent}
            className="mt-0.5 size-4 shrink-0 cursor-pointer accent-forest"
            id={id('consent')}
            name="consent"
            onChange={(event) => {
              setForm((current) => ({
                ...current,
                consent: event.target.checked,
              }))
              setErrors((current) => ({ ...current, consent: undefined }))
            }}
            type="checkbox"
          />
          <span>
            I am happy for L&amp;S Helping Hands to contact me about my
            application. See our{' '}
            <Link
              className="font-semibold text-forest underline decoration-forest/25 underline-offset-2 hover:decoration-forest"
              to="/privacy"
            >
              privacy note
            </Link>
            .
          </span>
        </label>
        {errors.consent ? (
          <p className="mt-1.5 text-[11.5px] font-medium text-[#a43a2b]" id={`${id('consent')}-error`}>
            {errors.consent}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
        <Button
          arrow={false}
          icon={<WhatsAppIcon size={18} />}
          size="lg"
          type="submit"
        >
          Send application
        </Button>
        <p className="text-[11px] leading-relaxed text-forest/45">
          This opens WhatsApp with your details ready to send.
          <br className="hidden sm:block" /> Nothing is sent until you press send
          there.
        </p>
      </div>
    </form>
  )
}

