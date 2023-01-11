// /pages/_app.js

import Script from 'next/script';
import { getCookie } from 'cookies-next';
import Link from 'next/link';
import '../styles/globals.css';
import { createClient } from '@prismicio/client';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { linkResolver, repositoryName } from '../prismicio';
import { MediaContextProvider } from '../components/MediaQueries';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  const consent = getCookie('googleAnalytics');
  const client = createClient(repositoryName);
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
      client={client}
    >
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      {/* Google Tag Manager */}
      <Script id='gtag' strategy='afterInteractive'>{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      
      gtag('consent', 'default', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied'
      });
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MNR2WBR');
        
      `}</Script>
      {/* End Google Tag manager */}
      {/* Consent update to cookies */}
      {consent === true && (
        <Script
          id='consupd'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
            gtag('consent', 'update', {
              'ad_storage': 'granted',
              'analytics_storage': 'granted'
            });
          `,
          }}
        />
      )}
      <PrismicPreview repositoryName={repositoryName}>
        <MediaContextProvider>
          <Component {...pageProps}></Component>
        </MediaContextProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
}
