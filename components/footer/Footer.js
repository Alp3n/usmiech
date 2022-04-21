import styled from '@emotion/styled';
import { PrismicLink } from '@prismicio/react';
import { MdPhone, MdMail, MdLocationOn } from 'react-icons/md';
import { RiFacebookCircleLine, RiInstagramLine } from 'react-icons/ri';
import Navigation from '../header/Navigation';
import { Media } from '../MediaQueries';

const Footer = ({ menu }) => {
  return (
    <StyledFooter>
      <StyledWrapper>
        {/* <StyledLine greaterThan='sm' area='line' />
        <StyledLine at='sm' /> */}
        <StyledGrid>
          <StyledItem>
            <MdLocationOn size={'24'} />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <StyledSpan>
                ul. Grzybowska 43 lok. U7
                <br />
                00-855 Warszawa, Polska
              </StyledSpan>
            </div>
          </StyledItem>
          <StyledItem>
            <MdPhone size={'24'} />
            <StyledSpan>505 255 600</StyledSpan>
          </StyledItem>
          <StyledItem>
            <MdMail size={'24'} />
            <StyledSpan>kontakt@smiechu.pl</StyledSpan>
          </StyledItem>
        </StyledGrid>
        <StyledLine at='sm' />
        <StyledGrid>
          <Navigation menu={menu} vertical margin />
        </StyledGrid>
        <StyledLine at='sm' />
        <StyledFlex>
          <PrismicLink field={menu.data.socialInstagram}>
            <StyledItemSocial>
              <RiFacebookCircleLine size={'34'} aria-label='facebook' />
            </StyledItemSocial>
          </PrismicLink>
          <PrismicLink field={menu.data.socialFacebook}>
            <StyledItemSocial>
              <RiInstagramLine size={'34'} aria-label='instagram' />
            </StyledItemSocial>
          </PrismicLink>
        </StyledFlex>
        <StyledLine greaterThan='sm' area='line2' />
      </StyledWrapper>
      <p>hello</p>
    </StyledFooter>
  );
};
export default Footer;
const StyledSpan = styled.span`
  font-size: 1.3rem;
  line-height: 2.4rem;
  /* font-weight: 300; */
`;

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr min(115ch, calc(100% - 48px)) 1fr;
  grid-column-gap: 24px;
  margin: 4rem 0 2rem 0;
  > * {
    grid-column: 2;
  }

  .full-bleed {
    grid-column: 1 / -1;
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr min(135ch, calc(100% - 98px)) 1fr;
  }
`;

const StyledWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'contact'
    'menu'
    'social'
    'line2';
  gap: 2rem;
  @media only screen and (min-width: 768px) {
    grid-template-areas:
      'line line'
      'contact menu'
      'social menu'
      'line2 line2';
    gap: 4rem;
  }
`;

const StyledLine = styled(Media)`
  width: 100%;
  border-top: 1px solid black;
  grid-area: ${({ area }) => (area ? area : null)};
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  gap: 2.5rem;
  @media only screen and (min-width: 768px) {
    place-items: flex-start;
  }
`;

const StyledFlex = styled.div`
  display: flex;
  gap: 2rem;

  @media only screen and (max-width: 768px) {
    place-content: center;
  }
`;

const StyledItem = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  place-content: center;
  place-items: center;
  color: black;
  @media only screen and (min-width: 768px) {
    display: flex;
    /* place-items: top; */
  }
`;

const StyledItemSocial = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  place-content: center;
  place-items: center;
  color: black;
  @media only screen and (min-width: 768px) {
    display: flex;
    /* place-items: top; */

    :hover > svg {
      color: grey;
    }
  }
`;
