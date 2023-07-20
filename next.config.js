const prismic = require('@prismicio/client');
const sm = require('./sm.json');

function linkResolver(doc) {
  const prefix = doc.lang !== 'pl' ? `/${doc.lang}` : '/pl';
  switch (doc.type) {
    case 'homepage':
      return `${prefix}`;
    case 'story':
      return `${prefix}/stories/${doc.uid}`;
    case 'page':
      return `${prefix}/${doc.uid}`;
  }
}

const withPrismicSitemap = require('@reecem/prismic-sitemap')({
  linkResolver: linkResolver,
  apiEndpoint: sm.apiEndpoint,
  hostname: sm.siteURL,
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

module.exports = async () => {
  const client = prismic.createClient(sm.apiEndpoint);
  const repository = await client.getRepository();
  const locales = repository.languages.map((lang) => lang.id);

  /** @type {import('next').NextConfig} */
  const nextConfig = {
    compiler: {
      // ssr and displayName are configured by default
      styledComponents: true,
    },
    reactStrictMode: true,
    images: {
      loader: 'imgix',
      path: '',
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      domains: [
        'images.prismic.io',
        'smiech.cdn.prismic.io',
        'images.unsplash.com',
      ],
    },
    i18n: {
      // These are all the locales you want to support in
      // your application
      locales: locales, //: ['default', 'pl', 'en', 'uk', 'ru'],
      // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      defaultLocale: locales[0], //'default',
      localeDetection: false,
    },
    trailingSlash: true,
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      });

      return config;
    },
  };

  return withPrismicSitemap({ ...nextConfig });
  // return nextConfig;
};
