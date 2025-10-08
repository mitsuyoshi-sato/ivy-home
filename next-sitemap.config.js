/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://ivyho.me',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  transform: async (config, path) => {
    let priority = 0.7

    if (path === '/') priority = 1.0
    else if (path.startsWith('/services')) priority = 0.8
    else if (path.startsWith('/company')) priority = 0.6
    else if (path.startsWith('/news')) priority = 0.6
    else if (path.startsWith('/contact')) priority = 0.6

    return {
      loc: path,
      changefreq: 'monthly',
      priority,
    }
  },
}

module.exports = config
