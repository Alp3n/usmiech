import { Layout } from '../components/layout/Layout';
import { SliceZone } from '@prismicio/react';
import { createClient } from '../prismicio';
import { components } from '../slices/index';

export default function About({ menu, page }) {
  return (
    <Layout menu={menu}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const menu = await client.getByUID('menu', 'menu');
  const page = await client.getByUID('pageAboutUs', 'about');

  return {
    props: { menu, page },
  };
}
