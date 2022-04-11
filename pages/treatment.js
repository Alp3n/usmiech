import { Layout } from '../components/layout/Layout';
import { SliceZone } from '@prismicio/react';
import { createClient } from '../prismicio';
import { components } from '../slices/index';

export default function Treatment({ menu, page }) {
  return (
    <Layout menu={menu}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const menu = await client.getByUID('menu', 'menu');
  const page = await client.getByUID('pageTreatment', 'treatment');

  return {
    props: { menu, page },
  };
}
