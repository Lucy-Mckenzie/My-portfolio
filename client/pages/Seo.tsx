import { Helmet } from 'react-helmet'

type SEOProps = {
  title: string
  description: string
  keywords?: string
  canonical: string
}

export default function SEO({ title, description, keywords, canonical }: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <link rel='canonical' href={canonical} />
      <meta name='robots' content='index, follow' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={canonical} />
    </Helmet>
  )
}
