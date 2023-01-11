import React from 'react';
// import { PrismicRichText } from '@prismicio/react';
import styled from '@emotion/styled';
import Image from 'next/image';
// import Button from '../../components/Button';
// import Title from '../../components/Title';
import { Media } from '../../components/MediaQueries';
import MainPage from './mainPage';
import Outside from './outside';
import Inside from './inside';
import HeroPage from './heroPage';

const FullBleed = ({ slice }) => {
  if (slice.variation === 'mainPage') {
    return <MainPage slice={slice} />;
  }
  if (slice.variation === 'heroPage') {
    return <HeroPage slice={slice} />;
  }
  if (slice.variation === 'outside') {
    return <Outside slice={slice} />;
  }
  if (slice.variation === 'inside') {
    return <Inside slice={slice} />;
  }
  return null;
};

export default FullBleed;

const StyledAbsoluteWrapper = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 100%;
  align-self: center;

  @media only screen and (max-width: 767px) {
    margin-left: 1rem;
    ${({ inside }) => (inside ? 'top:3rem;' : 'bottom: 0;')};
  }
`;

const StyledDescription = styled.span`
  position: relative;
  margin-bottom: 2rem;
  z-index: 100;
  width: 50ch;
  ${({ color }) =>
    color === 'white'
      ? `
    color: white;
  `
      : 'color: black;'}

  p {
    font-weight: 300;
    line-height: 2rem;
  }

  @media only screen and (min-width: 768px) {
    p {
      line-height: 2.2rem;
      font-size: 1rem;
      /* width: 100%; */
    }
  }
`;

const StyledImageWrapper = styled(Media)`
  position: relative;
  display: grid;
  margin-bottom: 3rem;
  grid-template-columns: 1fr min(115ch, calc(100% - 48px)) 1fr;
  grid-column-gap: 24px;
  height: auto;

  > * {
    grid-column: 2;
  }
  .full-bleed {
    grid-column: 1 / -1;
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
    margin-bottom: 3rem;
    ${({ color }) =>
      color === 'white'
        ? ` > * > * {
    color: white;
  }`
        : '#000;'}
  }
`;
