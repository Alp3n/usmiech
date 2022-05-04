import { Layout } from '../components/layout/Layout';
import Head from 'next/head';
import { PrismicRichText, SliceZone } from '@prismicio/react';
import { createClient } from '../prismicio';
import { components } from '../slices/index';
import Calculator from '../components/calculator/calculator';
import Title from '../components/Title';
import styled from '@emotion/styled';
import SEO from '../components/SEO';

export default function Offer({ menu, page }) {
  return (
    <Layout menu={menu}>
      <SEO
        metaTitle={page.data.metaTitle}
        metaDescription={page.data.metaDescription}
      />
      <SliceZone slices={page.data.slices} components={components} />
      <Title marginBottom='40px'>
        <PrismicRichText field={page.data.title} />
      </Title>

      {/* TODO */}
      <StyledWrapper>
        <PrismicRichText field={page.data.description} />
      </StyledWrapper>

      <Calculator
        firstValuesData={[
          { first: 6, price: 10800 },
          { first: 10, price: 18000 },
          { first: 12, price: 21600 },
          { first: 20, price: 36000 },
          { first: 24, price: 43200 },
        ]}
        // ratesData={[0, 12, 24, 36, 48, 60]}
        ratesData={[
          { rates: 0, interest: 0 },
          { rates: 12, interest: 0.06 },
          { rates: 24, interest: 0.12 },
          { rates: 36, interest: 0.18 },
          { rates: 48, interest: 0.24 },
          { rates: 60, interest: 0.3 },
        ]}
        title='Licówki'
        firstDesc='Wybierz ilość licówek'
        secondDesc='Wybierz ilość rat'
      />
      <Calculator
        firstValuesData={[
          { first: 6, price: 6000 },
          { first: 9, price: 8000 },
          { first: 12, price: 10000 },
        ]}
        ratesData={[
          { rates: 0, interest: 0 },
          { rates: 12, interest: 0.06 },
          { rates: 24, interest: 0.12 },
          { rates: 36, interest: 0.18 },
          { rates: 48, interest: 0.24 },
          { rates: 60, interest: 0.3 },
        ]}
        title='Leczenie Ortodontyczne'
        firstDesc='Wybierz czas leczenia'
        secondDesc='Wybierz ilość rat'
      />
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const menu = await client.getByUID('menu', 'menu');
  const page = await client.getByUID('pageOffer', 'offer');

  return {
    props: { menu, page },
  };
}

const StyledWrapper = styled.div`
  width: 100%;
  line-height: 2;
  margin-bottom: 3rem;

  @media only screen and (min-width: 768px) {
    width: 50%;
    margin-bottom: 4rem;
  }
`;
