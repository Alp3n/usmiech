import { PrismicLink, PrismicRichText } from '@prismicio/react';
import styled from '@emotion/styled';
import Button from '../Button';
import Logo from '../../images/logo.svg';
import { Default, Desktop, Mobile } from '../MediaQueries';
import Navigation from './Navigation';

export const Header = ({ menu }) => {
  return (
    <StyledWrapper>
      <StyledFlex>
        <PrismicLink href='/'>
          {/* <PrismicRichText field={menu.data?.title} /> */}
          <Default>
            <Logo
              width='230'
              height='90'
              viewBox='60 -13 120 95'
              className='place-self-center'
            />
          </Default>
          <Mobile>
            <Logo
              width='150'
              height='58'
              viewBox='70 -13 100 95'
              className='place-self-center'
            />
          </Mobile>
        </PrismicLink>
        <Desktop>
          <Navigation menu={menu} />
          <Button link={menu.data?.buttonLink} label={menu.data?.buttonLabel} />
        </Desktop>
      </StyledFlex>
    </StyledWrapper>
  );
};

const StyledFlex = styled.header`
  display: flex;
  align-items: center;
`;

const StyledWrapper = styled.header`
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
