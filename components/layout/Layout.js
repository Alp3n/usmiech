import styled from '@emotion/styled';
import { Header } from '../header/Header';
import Footer from '../footer/Footer';
import Consent from '../Consent';

export const Layout = ({ children, menu, cookies, altLangs }) => {
  return (
    <>
      <Header menu={menu} altLangs={altLangs} />
      <StyledMain>{children}</StyledMain>
      <Footer menu={menu}></Footer>
      <Consent cookies={cookies} />
    </>
  );
};

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr min(135ch, calc(100% - 48px)) 1fr;
  grid-column-gap: 24px;

  > * {
    grid-column: 2;
  }

  .full-bleed {
    grid-column: 1 / -1;
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr min(135ch, calc(100% - 98px)) 1fr;

    .full-bleed {
      max-height: 780px;
    }
  }
`;
