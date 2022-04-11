import { useState } from 'react';
import { PrismicLink } from '@prismicio/react';
import styled from '@emotion/styled';
import Button from '../Button';
import Logo from '../../images/logo.svg';
import Navigation from './Navigation';
import { Media } from '../MediaQueries';
import { VscMenu, VscClose } from 'react-icons/vsc';
import Menu from './Menu';

export const Header = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <StyledWrapper>
        <StyledFlex>
          <StyledMobileDiv at='sm'>
            {isOpen ? (
              <VscClose
                size={34}
                onClick={() => {
                  setIsOpen((prev) => !prev);
                }}
              />
            ) : (
              <VscMenu
                size={34}
                onClick={() => {
                  setIsOpen((prev) => !prev);
                }}
              />
            )}
          </StyledMobileDiv>
          <PrismicLink href='/'>
            <Media greaterThan='sm'>
              <Logo width='200' height='68' viewBox='70 -25 100 95' />
            </Media>
            <Media at='sm'>
              <Logo width='150' height='58' viewBox='70 -25 100 95' />
            </Media>
          </PrismicLink>
          <StyledDiv greaterThan='sm'>
            <Navigation menu={menu} />
            <Button
              link={menu.data.buttonLink}
              label={menu.data.buttonLabel}
              color='black'
            />
          </StyledDiv>
        </StyledFlex>
        {isOpen ? <Menu menu={menu} /> : null}
      </StyledWrapper>
    </>
  );
};

const StyledFlex = styled.header`
  display: grid;
  align-items: center;
  /* justify-content: space-between; */
  grid-template-columns: 30% 1fr;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 200px 1fr;
    /* place-content: space-around;
    place-items: space-between; */
  }
`;

const StyledDiv = styled(Media)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledMobileDiv = styled(Media)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const StyledWrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr min(115ch, calc(100% - 48px)) 1fr;
  grid-column-gap: 24px;
  padding: 0.5rem 0;
  box-shadow: 1px 3px 5px grey;
  z-index: 9999;
  background-color: #fff;
  > * {
    grid-column: 2;
  }

  .full-bleed {
    grid-column: 1 / -1;
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    padding: 0;
  }

  @media only screen and (min-width: 1192px) {
    padding: 1rem 0;
  }
`;
