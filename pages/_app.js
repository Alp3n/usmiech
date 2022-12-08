// /pages/_app.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';
import Link from 'next/link';
import '../styles/globals.css';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { linkResolver, repositoryName } from '../prismicio';
import { MediaContextProvider } from '../components/MediaQueries';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    // Initialize Fathom when the app loads
    // Example: yourdomain.com
    //  - Do not include https://
    //  - This must be an exact match of your domain.
    //  - If you're using www. for your domain, make sure you include that here.
    Fathom.load('REJRCCTL', {
      includedDomains: ['smiechu.pl', 'www.smiechu.pl'],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, []);
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <PrismicPreview repositoryName={repositoryName}>
        <MediaContextProvider>
          <Component {...pageProps}></Component>
        </MediaContextProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
}
