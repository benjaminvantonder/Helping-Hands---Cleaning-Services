import serviceHome from '@/assets/images/service-home.jpg'
import serviceStaffing from '@/assets/images/service-staffing.jpg'
import serviceOffice from '@/assets/images/service-office.jpg'
import serviceIndustrial from '@/assets/images/service-industrial.jpg'
import detailWindow from '@/assets/images/detail-window.jpg'

export type Service = {
  id: string
  number: string
  eyebrow: string
  title: string
  summary: string
  description: string
  image: string
  imageAlt: string
  includes: string[]
  tags: string[]
  idealFor: string
  ctaLabel: string
}

export const services: Service[] = [
  {
    id: 'domestic-cleaning',
    number: '01',
    eyebrow: 'For homes',
    title: 'Domestic cleaning',
    summary:
      'Considered, consistent cleaning for houses, apartments and townhouses — from a midweek refresh to a proper once-off reset.',
    description:
      "There's nothing quite like walking into a home that's already been cared for. We clean the rooms you live in — kitchens, bathrooms, bedrooms and living areas — with a steady, detail-first routine that fits around your week.",
    image: serviceHome,
    imageAlt: 'A bright, freshly cleaned modern kitchen with pale wood cabinetry',
    includes: [
      'Kitchens, sinks and food-prep surfaces',
      'Bathrooms, showers and sanitaryware',
      'Living areas, bedrooms and passages',
      'Floors, carpets, skirting boards and surfaces',
      'Dusting, mirrors and finishing touches',
      'Once-off, weekly, fortnightly or monthly',
    ],
    tags: ['Homes & apartments', 'Flexible frequency'],
    idealFor: 'Busy households, families, landlords and property agents.',
    ctaLabel: 'Ask about domestic cleaning',
  },
  {
    id: 'maid-placements',
    number: '02',
    eyebrow: 'For regular help',
    title: 'Part-time maids & placements',
    summary:
      'We connect reliable, carefully matched maids and cleaners with households that need a hand — part-time or on an ongoing basis.',
    description:
      "Finding someone you're comfortable welcoming into your home takes more than a quick search. Tell us the hours, duties and qualities that matter to you, and we'll help you find a cleaner who fits — then support the arrangement so expectations stay clear on both sides.",
    image: serviceStaffing,
    imageAlt: 'A professional cleaner wiping down a glass door in a bright home',
    includes: [
      'A proper conversation about your needs',
      'Suitable candidates put forward for your consideration',
      'Introductions before you decide',
      'Help settling hours, duties and expectations',
      'Ongoing support as the arrangement settles',
      'Part-time and regular placements',
    ],
    tags: ['Households', 'Ongoing support'],
    idealFor: 'Families and professionals who want dependable, regular help at home.',
    ctaLabel: 'Talk about finding help',
  },
  {
    id: 'office-cleaning',
    number: '03',
    eyebrow: 'For workplaces',
    title: 'Corporate & office cleaning',
    summary:
      "Workspaces that look the part and feel good to be in — cleaned around your team's schedule, not in the middle of it.",
    description:
      'Clients notice a clean reception. Teams notice a fresh kitchen. We keep offices, studios, clinics and retail spaces presentable with a quiet, reliable routine — before hours, after hours or alongside your day.',
    image: serviceOffice,
    imageAlt: 'A clean, modern open-plan office with glass walls and polished floors',
    includes: [
      'Reception, desks and meeting rooms',
      'Kitchens, pause areas and washrooms',
      'Floors, bins and high-touch points',
      'Glass, mirrors and entrance areas',
      'Daily, weekly or after-hours schedules',
      'A clear scope agreed with your team',
    ],
    tags: ['Offices & retail', 'After-hours option'],
    idealFor: 'Small businesses, professional firms, clinics and retail spaces.',
    ctaLabel: 'Request an office quote',
  },
  {
    id: 'industrial-cleaning',
    number: '04',
    eyebrow: 'For bigger spaces',
    title: 'Industrial & commercial',
    summary:
      'Dependable cleaning for warehouses, factories, workshops and larger commercial premises, scoped around how your site actually operates.',
    description:
      "Industrial spaces come with their own rhythms, safety considerations and stubborn dust. We'll walk the site, understand the constraints and build a practical cleaning schedule that keeps high-traffic areas, staff facilities and customer-facing zones in good order.",
    image: serviceIndustrial,
    imageAlt: 'A long, clean aisle between tall warehouse shelving racks',
    includes: [
      'Floors, walkways and high-traffic zones',
      'Ablutions, canteens and staff areas',
      'Surface and overhead dusting',
      'Dustbins, waste points and collection areas',
      'Once-off deep cleans or scheduled contracts',
      'A site-specific scope and safety briefing',
    ],
    tags: ['Warehouses & factories', 'Site-specific scope'],
    idealFor: 'Warehouses, factories, workshops, commercial and retail premises.',
    ctaLabel: 'Discuss a commercial site',
  },
  {
    id: 'tailored-cleaning',
    number: '05',
    eyebrow: 'For the in-between',
    title: 'Tailored & once-off services',
    summary:
      "Moving in or out. Post-renovation dust. A big event. Or a space that simply needs a reset — we'll build the clean around you.",
    description:
      "Not every job fits a standard checklist. Tell us what needs attention, what's been missed, and how you'd like it handled. We'll agree the scope and timing upfront, then bring the right hands and the right amount of time.",
    image: detailWindow,
    imageAlt: 'A gloved hand polishing a window to a streak-free finish',
    includes: [
      'Deep cleans and seasonal resets',
      'Move-in and move-out cleaning',
      "Post-renovation and builders' dust",
      'Windows, frames and tracks',
      'Pre- and post-event refreshes',
      'Custom scopes on request',
    ],
    tags: ['Once-off', 'Custom scope'],
    idealFor: 'Homeowners, tenants, property managers and event organisers.',
    ctaLabel: 'Build a custom clean',
  },
]

export const featuredServices = services.slice(0, 4)

export const processSteps = [
  {
    number: '01',
    title: 'Say hello',
    description:
      'Call, WhatsApp or send the quote form. Tell us what you need, where you are and roughly when you need it.',
  },
  {
    number: '02',
    title: 'We scope it',
    description:
      "We'll ask a few practical questions and, for larger jobs, arrange a walkthrough to understand the space.",
  },
  {
    number: '03',
    title: 'Agree the details',
    description:
      'You receive a clear quote, schedule and scope before anything begins. No guesswork, no surprises.',
  },
  {
    number: '04',
    title: 'Enjoy the difference',
    description:
      'Your cleaner arrives as agreed, and we check in to keep the standard consistent over time.',
  },
]

export const promises = [
  {
    title: 'Careful with your space',
    description:
      'We treat your home or workplace with respect, from the front door to the last surface.',
  },
  {
    title: 'Clear from the start',
    description:
      'A defined scope, an agreed schedule and a quote you can actually understand.',
  },
  {
    title: 'Flexible by design',
    description:
      'Part-time, once-off or ongoing — we shape the service around your routine, not the other way around.',
  },
  {
    title: 'Local and accountable',
    description:
      'A Durban North team you can call, message and actually reach when you need us.',
  },
]

export const values = [
  {
    title: 'Care in the details',
    description:
      'The corners, the edges, the finishing touches. The small things that make a space feel properly clean.',
  },
  {
    title: 'Respect for your space',
    description:
      "We work carefully, quietly and considerately — whether you're home or not.",
  },
  {
    title: 'Reliability, quietly delivered',
    description:
      'Turn up when we say we will, do what we agreed, and make it easy to keep things consistent.',
  },
  {
    title: 'People first',
    description:
      'Good cleaning starts with good people. We treat our cleaners and our clients with the same respect.',
  },
]

export const placementSteps = [
  {
    number: '01',
    title: 'Tell us what you need',
    description:
      'Hours, duties, location and the kind of person who would fit your home or team.',
  },
  {
    number: '02',
    title: 'We match and introduce',
    description:
      'We put forward suitable candidates and arrange a conversation or meeting before you decide.',
  },
  {
    number: '03',
    title: 'Settle in with clarity',
    description:
      'Agree duties, hours and expectations before the first day, with support if anything needs adjusting.',
  },
]

export const candidateSteps = [
  {
    number: '01',
    title: 'Share your details',
    description:
      'Send your experience, availability and the areas you can travel to — WhatsApp is easiest.',
  },
  {
    number: '02',
    title: "We'll be in touch",
    description:
      'If your profile fits a current or upcoming placement, we will reach out to talk it through.',
  },
  {
    number: '03',
    title: 'Start with clear terms',
    description:
      'Duties, hours and pay are agreed upfront, before you begin. Bring any questions you have.',
  },
]

export const faqs = [
  {
    question: 'Which areas do you cover?',
    answer:
      "We're based in Durban North and work across Durban and the surrounding suburbs, including Umhlanga, Morningside, Glenashley and La Lucia. If you're a little further out, ask — we'll confirm availability.",
  },
  {
    question: 'Do you bring your own cleaning materials?',
    answer:
      'We can bring the basics, or use your preferred products if you would rather. Let us know when you enquire so we can plan accordingly.',
  },
  {
    question: 'Can I book a once-off clean?',
    answer:
      'Yes. Once-off, weekly, fortnightly and monthly cleans are all available. Once-off deep cleans and custom jobs are quoted on scope.',
  },
  {
    question: 'Will I get the same cleaner each time?',
    answer:
      'Where possible, yes. Consistency is part of the service, and we will do our best to keep the same person on your schedule.',
  },
  {
    question: 'How does the maid placement service work?',
    answer:
      'Tell us the hours, duties and qualities you need. We discuss suitable candidates, arrange introductions, and help you settle the arrangement clearly.',
  },
  {
    question: 'How much does a clean cost?',
    answer:
      'Every space is different, so quotes are tailored to size, condition, frequency and scope. You will agree the scope and price before any work begins.',
  },
  {
    question: 'Do you work weekends or after hours?',
    answer:
      'Weekend and after-hours slots can often be arranged, depending on availability. Ask us when you enquire and we will confirm what is possible.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Send a WhatsApp, give us a call, or use the quote form on the contact page. We will ask a few questions and take it from there.',
  },
]

export const homeFaqs = faqs.slice(0, 5)

export const staffingFaqs = [
  {
    question: 'How does the placement process work?',
    answer:
      'We start with a conversation about the role — hours, duties, location and the qualities that matter. From there we discuss suitable candidates, arrange introductions, and help both sides agree clear terms before work begins.',
  },
  {
    question: 'Do I need formal experience to apply?',
    answer:
      'Experience helps, but attitude and reliability matter just as much. Share what you have done, who you have worked for, and any references or skills that are relevant.',
  },
  {
    question: 'Can I meet a candidate before committing?',
    answer:
      'Yes. We arrange an introduction or conversation before you decide. It is important that both sides feel comfortable with the arrangement.',
  },
  {
    question: 'What areas do you place people in?',
    answer:
      'We work across Durban North and surrounding areas. If you are further afield, send us your details and we will confirm whether we can help.',
  },
  {
    question: 'What should employers prepare before we start?',
    answer:
      'Have a clear idea of the hours, duties, start date and budget. The clearer the brief, the easier it is to match the right person.',
  },
]
