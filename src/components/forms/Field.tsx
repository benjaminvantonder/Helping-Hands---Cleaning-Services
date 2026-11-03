import { ChevronDown } from 'lucide-react'
import type { ChangeEvent, ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { inputClasses } from '@/components/forms/fieldStyles'

type FieldProps = {
  id: string
  label: string
  error?: string
  hint?: string
  optional?: boolean
  className?: string
  children: ReactNode
}

export function Field({
  id,
  label,
  error,
  hint,
  optional,
  className,
  children,
}: FieldProps) {
  return (
    <div className={className}>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <label
          className="text-[10px] font-bold uppercase tracking-[0.16em] text-forest/55"
          htmlFor={id}
        >
          {label}
        </label>
        {optional ? (
          <span className="text-[10px] font-medium text-forest/30">Optional</span>
        ) : null}
      </div>
      {children}
      {error ? (
        <p className="mt-1.5 text-[11.5px] font-medium text-[#a43a2b]" id={`${id}-error`}>
          {error}
        </p>
      ) : hint ? (
        <p className="mt-1.5 text-[11.5px] text-forest/40" id={`${id}-hint`}>
          {hint}
        </p>
      ) : null}
    </div>
  )
}

export function SelectField({
  id,
  name,
  value,
  onChange,
  options,
  placeholder,
  hasError,
}: {
  id: string
  name?: string
  value: string
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
  options: readonly string[]
  placeholder: string
  hasError?: boolean
}) {
  return (
    <div className="relative">
      <select
        aria-describedby={hasError ? `${id}-error` : undefined}
        aria-invalid={hasError || undefined}
        className={cn(inputClasses(hasError), 'appearance-none pr-10')}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
      >
        <option disabled value="">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-forest/40"
        strokeWidth={1.7}
      />
    </div>
  )
}
