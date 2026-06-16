import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/app/', '/app', '/editor', '/editor/', '/signin', '/signup', '/share/'],
    },
    sitemap: 'https://atsai.pro/sitemap.xml',
  }
}
