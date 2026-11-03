import { cn } from '@/lib/cn'

export function inputClasses(hasError?: boolean) {
  return cn(
    'w-full rounded-xl border bg-white/65 px-4 py-3 text-[14px] text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-colors duration-200 placeholder:text-forest/30 hover:border-forest/25 focus:border-pine/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-pine/15 focus-visible:outline-none',
    hasError ? 'border-[#a43a2b]/45' : 'border-forest/14',
  )
}
