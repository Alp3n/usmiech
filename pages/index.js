import { createClient } from '../prismicio';
import { SliceZone } from '@prismicio/react';
import { components } from '../slices/index';
import SEO from '../components/SEO';
import { Layout } from '../components/layout/Layout';
export default function Home({ menu, homepage, cookies }) {
  return (
    <Layout
      menu={menu}
      cookies={cookies}
      altLangs={homepage.alternate_languages}
    >
      <SEO
        metaTitle={homepage.data.metaTitle}
        metaDescription={homepage.data.metaDescription}
      />
      <SliceZone slices={homepage.data.slices} components={components} />
    </Layout>
  );
}

export async function getStaticProps({ previewData, locale }) {
  const client = createClient({ previewData });

  const menu = await client.getByUID('menu', 'menu', { lang: locale });
  const cookies = await client.getByUID('cookies_consent', 'cookies', {
    lang: locale,
  });
  const homepage = await client.getByUID('homepage', 'homepage', {
    lang: locale,
  });

  return {
    props: { menu, homepage, cookies },
  };
}
