import { Layout } from '../components/layout/Layout';
// import styled from '@emotion/styled';
import { PrismicRichText, SliceZone } from '@prismicio/react';
import { createClient } from '../prismicio';
import { components } from '../slices/index';
import SEO from '../components/SEO';
import styled from '@emotion/styled';

export default function Privacy({ menu, page }) {
  return (
    <Layout menu={menu}>
      <SEO
        metaTitle={page.data.metaTitle}
        metaDescription={page.data.metaDescription}
      />
      <SliceZone slices={page.data.slices} components={components} />
      <StyledWrapper>
        <PrismicRichText field={page.data.text} />
      </StyledWrapper>
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const menu = await client.getByUID('menu', 'menu');
  const page = await client.getByUID('pageTerms', 'terms');

  return {
    props: { menu, page },
  };
}

const StyledWrapper = styled.div`
  margin: 50px 0;

  h4 {
    font-size: 1.3rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
`;
