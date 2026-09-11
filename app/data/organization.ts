export const idOrganization = 'https://www.ivyho.me/#organization'

export const nameOrganization = '株式会社アイビーホーム'

export const telephoneDisplayOrganization = '089-907-6504'

export const telephoneHrefOrganization = 'tel:+81899076504'

export const dataOrganization = {
  '@context': 'https://schema.org',
  '@id': idOrganization,
  '@type': 'LocalBusiness',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'JP',
    addressLocality: '松山市',
    addressRegion: '愛媛県',
    postalCode: '790-0952',
    streetAddress: '朝生田町7丁目2-22 大興ビル201',
  },
  logo: 'https://www.ivyho.me/images/ivy-home.svg',
  name: nameOrganization,
  telephone: '+81-89-907-6504',
  url: 'https://www.ivyho.me',
} as const
