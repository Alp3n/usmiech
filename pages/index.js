import { createClient } from '../prismicio';
import { SliceZone } from '@prismicio/react';
import { components } from '../slices/index';
import SEO from '../components/SEO';
import { Layout } from '../components/layout/Layout';
export default function Home({ menu, page, cookies }) {
  return (
    <Layout menu={menu} cookies={cookies}>
      <SEO
        metaTitle={page.data.metaTitle}
        metaDescription={page.data.metaDescription}
      />
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const menu = await client.getByUID('menu', 'menu');
  const cookies = await client.getByUID('cookies_consent', 'cookies');
  const page = await client.getByUID('homepage', 'homepage');

  return {
    props: { menu, page, cookies },
  };
}
