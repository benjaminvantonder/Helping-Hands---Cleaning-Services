export const site = {
  name: 'L and S Helping Hands & Cleaning Services',
  shortName: 'L&S Helping Hands',
  tagline: 'Helping hands & cleaning services',
  description:
    'Reliable cleaning for homes, offices and industrial spaces across Durban North — plus careful placement of trusted maids and cleaners.',
  location: {
    suburb: 'Durban North',
    postalCode: '4051',
    province: 'KwaZulu-Natal',
    country: 'South Africa',
  },
  phones: [
    {
      label: '075 101 9153',
      href: 'tel:+27751019153',
      whatsapp: true,
    },
    {
      label: '084 481 0858',
      href: 'tel:+27844810858',
      whatsapp: false,
    },
  ],
  whatsappNumber: '27751019153',
  email: 'sinabondhlovu7@gmail.com',
  hours: [
    { days: 'Monday – Friday', time: '07:00 – 17:00' },
    { days: 'Saturday', time: '08:00 – 13:00' },
    { days: 'Sunday & public holidays', time: 'By arrangement' },
  ],
  serviceAreas: [
    'Durban North',
    'Umhlanga',
    'Morningside',
    'Glenashley',
    'La Lucia',
    'Surrounding areas',
  ],
} as const

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Staffing', to: '/staffing' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function emailLink(subject: string, body: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export const defaultWhatsAppMessage =
  'Hi L&S Helping Hands, I would like to find out more about your cleaning services in Durban North.'

export const phonePrimary = site.phones[0]
export const phoneSecondary = site.phones[1]
