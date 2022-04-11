// /pages/_app.js

import Link from 'next/link';
import '../styles/globals.css';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { linkResolver, repositoryName } from '../prismicio';
import { MediaContextProvider } from '../components/MediaQueries';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
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
