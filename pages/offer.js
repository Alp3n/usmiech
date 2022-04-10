import { useState } from 'react';
import { Layout } from '../components/layout/Layout';
// import styled from '@emotion/styled';
// import { SliceZone } from '@prismicio/react';
import { createClient } from '../prismicio';
// import { components } from '../slices/index';
import Calculator from '../components/calculator/calculator';

export default function Offer({ menu, page }) {
  return (
    <Layout menu={menu}>
      <Calculator
        monthsData={[6, 10, 12, 24]}
        ratesData={[0, 12, 18, 24]}
        priceData={500}
      />
      {/* <SliceZone slices={page.data.slices} components={components} /> */}
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const menu = await client.getByUID('menu', 'menu');
  // const page = await client.getByUID('pageOffer', 'home');

  return {
    props: { menu /* page */ },
  };
}
