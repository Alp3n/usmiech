import Script from 'next/script';
import { createClient } from '../prismicio';
import { SliceZone } from '@prismicio/react';
import { components } from '../slices/index';
import SEO from '../components/SEO';
import { Layout } from '../components/layout/Layout';
export default function Home({ menu, page }) {
  console.log(menu);
  return (
    <Layout menu={menu}>
      <SEO
        metaTitle={page.data.metaTitle}
        metaDescription={page.data.metaDescription}
      />
      <SliceZone slices={page.data.slices} components={components} />
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        // async
        src='https://www.googletagmanager.com/gtag/js?id=UA-231775823-1'
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-231775823-1');`}
      </Script>
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const menu = await client.getByUID('menu', 'menu');
  const page = await client.getByUID('homepage', 'homepage');

  return {
    props: { menu, page },
  };
}
