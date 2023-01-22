const API_ENDPOINT = 'https://smiech.prismic.io/api/v2';
const SITE_URL = 'https://smiechu.pl';

function linkResolver(doc) {
  if (doc.uid === 'homepage') {
    return `/`;
  } else if (doc.type === 'story') {
    return `/stories/${doc.uid}`;
  } else if (doc.type === 'page') {
    return `/${doc.uid}`;
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: [
      'images.prismic.io',
      'smiech.cdn.prismic.io',
      'images.unsplash.com',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

const withPrismicSitemap = require('@reecem/prismic-sitemap')({
  linkResolver: linkResolver,
  apiEndpoint: API_ENDPOINT,
  hostname: SITE_URL,
  optionsMapPerDocumentType: {
    // setting the update date of the article.
    story: (document) => {
      return {
        // get the last time the document was published in Prismic
        lastmod: document.last_publication_date,
        changefreq: 'monthly',
        priority: 0.8,
      };
    },
    homepage: (document) => {
      return {
        lastmod: document.last_publication_date,
        changefreq: 'daily',
        priority: 1,
      };
    },
    page: (document) => {
      return {
        lastmod: document.last_publication_date,
        changefreq: 'monthly',
        priority: 0.9,
      };
    },
  },
  documentTypes: ['homepage', 'page', 'story'],
});

module.exports = withPrismicSitemap({ ...nextConfig });
