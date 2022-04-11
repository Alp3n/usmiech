import { useState } from 'react';
import { Layout } from '../components/layout/Layout';
// import styled from '@emotion/styled';
import { PrismicRichText, SliceZone } from '@prismicio/react';
import { createClient } from '../prismicio';
import { components } from '../slices/index';
import Calculator from '../components/calculator/calculator';
import Title from '../components/Title';
import styled from '@emotion/styled';

export default function Offer({ menu, page }) {
  return (
    <Layout menu={menu}>
      <SliceZone slices={page.data.slices} components={components} />
      <Title>
        <PrismicRichText field={page.data.title} />
      </Title>

      {/* TODO */}
      <StyledWrapper>
        <PrismicRichText field={page.data.description} />
      </StyledWrapper>

      <Calculator
        monthsData={[6, 10, 12, 24]}
        ratesData={[0, 12, 18, 24]}
        priceData={500}
        title='Licówki'
        firstDesc='Wybierz ilość licówek'
        secondDesc='Wybierz ilość rat'
      />
      <Calculator
        monthsData={[6, 9, 12]}
        ratesData={[0, 12, 18, 24]}
        priceData={500}
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
