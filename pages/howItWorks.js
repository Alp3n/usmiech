import { Layout } from '../components/layout/Layout';
// import styled from '@emotion/styled';
import { SliceZone } from '@prismicio/react';
import { createClient } from '../prismicio';
import { components } from '../slices/index';

export default function HowItWorks({ menu, page }) {
  return (
    <Layout menu={menu}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const menu = await client.getByUID('menu', 'menu');
  const page = await client.getByUID('pageHowItWorks', 'howitworks');

  return {
    props: { menu, page },
  };
}
