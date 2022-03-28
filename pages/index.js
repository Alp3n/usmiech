import { Layout } from '../components/layout/Layout';
import styled from '@emotion/styled';
import { createClient } from '../prismicio';
import { SliceZone } from '@prismicio/react';
import { components } from '../slices/index';
import Button from '../components/Button';
import FullBleed from '../slices/FullBleed';

export default function Home({ menu, page }) {
  console.log(page);
  return (
    <Layout menu={menu}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const menu = await client.getByUID('menu', 'menu');
  const page = await client.getByUID('pageHome', 'home');

  return {
    props: { menu, page },
  };
}

const StyledBox = styled.div`
  background-color: ${({ color }) => (color ? color : null)};
  height: 100px;
`;
