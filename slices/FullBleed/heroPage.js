import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Button from '../../components/Button';
import Title from '../../components/Title';
import { Media } from '../../components/MediaQueries';

const heroPage = ({ slice }) => (
  <>
    {/* MOBILE */}
    <StyledWrapper at='sm' className='full-bleed'>
      <StyledImageWrapper className='full-bleed'>
        <Image
          src={`${slice.primary.image.mobile.url}&dpr=2`}
          alt={slice.primary.image.mobile.alt}
          width={slice.primary.image.mobile.dimensions.width}
          height={slice.primary.image.mobile.dimensions.height}
          layout='responsive'
          quality={85}
        />
      </StyledImageWrapper>
      <StyleMobileWrapper>
        {slice.primary.title ? (
          <Title white={false} marginBottom='40px'>
            <PrismicRichText field={slice.primary.title} />
          </Title>
        ) : null}
        {slice.primary.description ? (
          <StyledDescription>
            <PrismicRichText field={slice.primary.description} />
          </StyledDescription>
        ) : null}
        {slice.primary.buttonLink ? (
          <Button
            link={slice.primary.buttonLink}
            label={slice.primary.buttonLabel}
            plain
          />
        ) : null}
      </StyleMobileWrapper>
    </StyledWrapper>

    {/* DEFAULT */}
    <StyledWrapper
      greaterThan='sm'
      className='full-bleed'
      color={slice.primary?.color}
      inside={slice.primary?.inside}
    >
      <StyledAbsoluteWrapper>
        {slice.primary.title ? (
          <Title white={slice.primary?.color} marginBottom='40px'>
            <PrismicRichText field={slice.primary.title} />
          </Title>
        ) : null}
        {slice.primary.description ? (
          <StyledDescription color={slice.primary.color}>
            <PrismicRichText field={slice.primary.description} />
          </StyledDescription>
        ) : null}
        {slice.primary.buttonLink ? (
          <Button
            link={slice.primary.buttonLink}
            label={slice.primary.buttonLabel}
            color={slice.primary?.color}
          />
        ) : null}
      </StyledAbsoluteWrapper>
      {/* TODO TABLET SIZES */}

      <div className='full-bleed' style={{ overflow: 'hidden' }}>
        <Media greaterThan='sm'>
          <Image
            src={`${slice.primary.image.url}?dpr=2`}
            alt={slice.primary.image.alt}
            width={slice.primary.image.dimensions.width}
            height={slice.primary.image.dimensions.height}
            layout='responsive'
            quality={85}
          />
        </Media>
      </div>
    </StyledWrapper>
  </>
);

export default heroPage;
const StyleMobileWrapper = styled.div`
  display: grid;
  margin-bottom: 20px;
`;
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

const StyledDescription = styled.div`
  position: relative;
  /* margin-bottom: 2rem; */
  z-index: 100;
  /* width: 50ch; */
  ${({ color }) =>
    color === 'white'
      ? `
    color: white;
  `
      : 'color: black;'}

  p {
    font-weight: 400;
    line-height: 2rem;
  }

  @media only screen and (min-width: 768px) {
    width: 50ch;
    p {
      line-height: 2.2rem;
      font-size: 1.2rem;
      /* width: 100%; */
    }
  }
`;

const StyledImageWrapper = styled.div`
  margin-bottom: 3rem;
`;

const StyledWrapper = styled(Media)`
  position: relative;
  display: grid;
  margin-bottom: 3rem;
  grid-template-columns: 1fr min(135ch, calc(100% - 48px)) 1fr;
  /* grid-template-columns: 1fr min(115ch, calc(100% - 48px)) 1fr; */
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
    grid-template-columns: 1fr min(135ch, calc(100% - 98px)) 1fr;

    margin-bottom: 5rem;
    ${({ color }) =>
      color === 'white'
        ? ` > * > * {
    color: white;
  }`
        : '#000;'}
  }
`;
