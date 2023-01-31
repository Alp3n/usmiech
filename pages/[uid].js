import { Layout } from '../components/layout/Layout';
import { SliceZone } from '@prismicio/react';
import { createClient } from '../prismicio';
import { components } from '../slices/index';
import SEO from '../components/SEO';

const Page = ({ page, menu, cookies }) => {
  return (
    <Layout menu={menu} cookies={cookies} altLangs={page.alternate_languages}>
      <SEO
        metaTitle={page.data.metaTitle}
        metaDescription={page.data.metaDescription}
      />
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export async function getStaticProps({ params, previewData, locale }) {
  const client = createClient({ previewData });

  const menu = await client.getByUID('menu', 'menu', { lang: locale });
  const page = await client.getByUID('page', params.uid, { lang: locale });
  const cookies = await client.getByUID('cookies_consent', 'cookies', {
    lang: locale,
  });

  return {
    props: { menu, page, cookies },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType('page', { lang: '*' });

  return {
    paths: pages.map((page) => {
      return { params: { uid: page.uid }, locale: page.lang };
    }),
    fallback: false,
  };
}

export default Page;
