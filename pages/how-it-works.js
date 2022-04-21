import { Layout } from '../components/layout/Layout';
// import styled from '@emotion/styled';
import { SliceZone } from '@prismicio/react';
import { createClient } from '../prismicio';
import { components } from '../slices/index';
import SEO from '../components/SEO';

export default function HowItWorks({ menu, page }) {
  return (
    <Layout menu={menu}>
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
  const page = await client.getByUID('pageHowItWorks', 'how-it-works');

  return {
    props: { menu, page },
  };
}
