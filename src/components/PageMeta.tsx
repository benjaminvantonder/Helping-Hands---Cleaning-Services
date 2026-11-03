import { site } from '@/lib/site'

type Props = {
  title: string
  description?: string
  image?: string
}

export function PageMeta({ title, description, image = '/og.jpg' }: Props) {
  const fullTitle = title.includes(site.shortName)
    ? title
    : `${title} | ${site.shortName}`

  return (
    <>
      <title>{fullTitle}</title>
      <meta content={description ?? site.description} name="description" />
      <meta content={fullTitle} property="og:title" />
      <meta
        content={description ?? site.description}
        property="og:description"
      />
      <meta content={image} property="og:image" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={fullTitle} name="twitter:title" />
      <meta
        content={description ?? site.description}
        name="twitter:description"
      />
    </>
  )
}
