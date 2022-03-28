import Head from 'next/head';
import styled from '@emotion/styled';
import { Header } from '../header/Header';
import styles from './Layout.module.css';
import Footer from '../footer/Footer';

export const Layout = ({ children, menu }) => {
  return (
    <>
      <Head>
        <title> Prismic Next.js Multi Page Website </title>
      </Head>
      <Header menu={menu} />
      <StyledMain>{children}</StyledMain>
      <Footer></Footer>
    </>
  );
};

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr min(115ch, calc(100% - 48px)) 1fr;
  grid-column-gap: 24px;
  > * {
    grid-column: 2;
  }

  .full-bleed {
    grid-column: 1 / -1;
    width: 100%;
  }
`;
