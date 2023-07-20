import styled from '@emotion/styled';
import { PrismicLink, PrismicRichText } from '@prismicio/react';
import { MdPhone, MdMail, MdLocationOn } from 'react-icons/md';
import { RiFacebookCircleLine, RiInstagramLine } from 'react-icons/ri';
import Navigation from '../header/Navigation';
import { Media } from '../MediaQueries';

const Footer = ({ menu }) => {
  return (
    <StyledFooter>
      <StyledWrapper>
        <StyledLine greaterThan='sm' area='line' />
        <StyledLine at='sm' />
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
                ul. Pustułeczki 23
                <br />
                02-811 Warszawa, Polska
              </StyledSpan>
            </div>
          </StyledItem>
          <StyledItem>
            <MdPhone size={'24'} />
            <StyledSpan>505 255 600</StyledSpan>
          </StyledItem>
          <StyledItem>
            <MdMail size={'24'} />
            <StyledSpan>info@smiechu.pl</StyledSpan>
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
      <StyledLine at='sm' marginTop />
      <StyledBottomWrapper>
        <StyledBottomLinks>
          <StyledLink field={menu.data.linkTerms}>
            <PrismicRichText field={menu.data.linkTermsLabel} />
          </StyledLink>
          <StyledLink field={menu.data.linkPrivacy}>
            <PrismicRichText field={menu.data.linkPrivacyLabel} />
          </StyledLink>
        </StyledBottomLinks>
        <span>
          Designed by{' '}
          <StyledHref href='https://ilovegrid.com'>ilovegrid.com</StyledHref>
        </span>
      </StyledBottomWrapper>
    </StyledFooter>
  );
};
export default Footer;

const StyledHref = styled.a`
  text-decoration: none;
  /* color: red; */

  &:link {
    color: grey;
  }
  &:visited {
    color: black;
  }
  &:hover {
    color: grey;
  }
  &:active {
    color: black;
  }
`;

const StyledBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    grid-template-columns: repeat(2, 1fr);
    /* place-content: center; */
    justify-content: space-between;
    /* align-items: center; */
    gap: 4rem;
  }
`;

const StyledSpan = styled.span`
  font-size: 1.1rem;
  line-height: 2.2rem;
  text-align: center;
  /* font-weight: 300; */
  @media only screen and (min-width: 768px) {
    text-align: start;
    font-size: 1.3rem;
    line-height: 2.4rem;
  }
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

    .full-bleed {
      max-height: 780px;
    }
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
  border-top: 1px solid #9b9b9b;
  grid-area: ${({ area }) => (area ? area : null)};
  ${({ marginTop }) => (marginTop ? 'margin: 2rem 0 1rem 0;' : null)}
`;

const StyledGrid = styled.div`
  display: grid;
  /* grid-template-columns: 1fr; */
  place-items: center;
  gap: 2.5rem;
  @media only screen and (min-width: 768px) {
    place-items: flex-start;
  }
`;
const StyledBottomLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  margin-bottom: 1.5rem;
  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledFlex = styled.div`
  display: flex;
  gap: 2rem;

  align-content: center;
  @media only screen and (max-width: 768px) {
    align-items: center;
    place-content: center;
    flex-direction: column;
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
    grid-template-columns: 40px 1fr;
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

  :hover > svg {
    color: grey;
  }
  @media only screen and (min-width: 768px) {
    margin-right: 16px;
    display: flex;
    /* place-items: top; */
  }
`;

const StyledLink = styled(PrismicLink)`
  text-decoration: none;
  color: black;
  /* margin-right: 32px; */
  &:link {
    color: black;
  }
  &:visited {
    color: black;
  }
  &:hover {
    color: grey;
  }
  &:active {
    color: black;
  }
`;
