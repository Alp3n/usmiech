import { createClient } from '../prismicio';
import styled from '@emotion/styled';
import SEO from '../components/SEO';
import { Layout } from '../components/layout/Layout';
import Button from '../components/Button';
import { PrismicRichText } from '@prismicio/react';

export default function Custom404({ page, menu, cookies }) {
  return (
    <Layout menu={menu} cookies={cookies}>
      <SEO
        metaTitle={page.data.metaTitle}
        metaDescription={page.data.metaDescription}
      />
      <StyledWrapper>
        <PrismicRichText
          field={page.data.errorText}
          components={{
            heading1: ({ children }) => <StyledTitle>{children}</StyledTitle>,
          }}
        />
        <Button
          color={'black'}
          link={page.data.redirectLink}
          label={page.data.redirectButtonLabel}
        />
      </StyledWrapper>
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const menu = await client.getByUID('menu', 'menu');
  const cookies = await client.getByUID('cookies_consent', 'cookies');
  const page = await client.getSingle('404');

  return {
    props: { menu, cookies, page },
  };
}

const StyledWrapper = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  padding: 6rem 0;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
`;
