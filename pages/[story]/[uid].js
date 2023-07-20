// import Head from 'next/head';
import { createClient, linkResolver } from '../../prismicio';
import { SliceZone } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import { components } from '../../slices';
import { Layout } from '../../components/layout/Layout';
import SEO from '../../components/SEO';

export default function Story({ story, menu, cookies }) {
  const slices = story?.data?.slices ? story.data.slices : null;
  return (
    <Layout menu={menu} cookies={cookies} altLangs={story.alternate_languages}>
      <SEO
        metaTitle={story.data.metaTitle}
        metaDescription={story.data.metaDescription}
      />
      <SliceZone slices={slices} components={components} />
    </Layout>
  );
}

export const getStaticProps = async ({ params, locale, previewData }) => {
  const client = createClient({ previewData });

  const menu = await client.getByUID('menu', 'menu', { locale: locale });
  const story = await client.getByUID('story', params.uid, { locale: locale });
  const cookies = await client.getByUID('cookies_consent', 'cookies', {
    locale: locale,
  });
  return {
    props: {
      story,
      menu,
      cookies,
      fallback: false,
    },
  };
};

export const getStaticPaths = async () => {
  const client = createClient();

  const stories = await client.getAllByType('story', { lang: '*' });
  return {
    paths: stories?.map((story) => {
      return { params: { uid: story.uid }, locale: story.lang };
    }),
    // paths: stories?.map((sotry) => prismicH.asLink(doc, linkResolver)),
    fallback: false,
  };
};
