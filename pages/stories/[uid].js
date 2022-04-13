// import Head from 'next/head';
import { createClient, linkResolver } from '../../prismicio';
import { SliceZone } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import { components } from '../../slices';
import { Layout } from '../../components/layout/Layout';

export default function Story({ story, menu }) {
  const slices = story?.data?.slices ? story.data.slices : null;
  console.log(slices);
  return (
    <Layout menu={menu}>
      <SliceZone slices={slices} components={components} />
    </Layout>
  );
}

export const getStaticProps = async ({ params, previewData }) => {
  const client = createClient({ previewData });

  const menu = await client.getByUID('menu', 'menu');
  const story = await client.getByUID('story', params.uid);
  return {
    props: {
      story,
      menu,
      fallback: false,
    },
  };
};

export const getStaticPaths = async () => {
  const client = createClient();

  const stories = await client.getAllByType('story');
  return {
    paths: stories?.map((doc) => prismicH.asLink(doc, linkResolver)),
    fallback: false,
  };
};
