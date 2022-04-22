import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Button from '../../components/Button';
import Title from '../../components/Title';
import { Media } from '../../components/MediaQueries';

const Inside = ({ slice }) => (
  <>
    {/* MOBILE */}
    <StyledImageWrapper
      at='sm'
      className='full-bleed'
      color={slice.primary?.color}
      inside={slice.primary?.inside}
    >
      <div className='full-bleed'>
        <Image
          src={`${slice.primary.image.mobile.url}&dpr=2`}
          alt={slice.primary.image.mobile.alt}
          width={slice.primary.image.mobile.dimensions.width}
          height={slice.primary.image.mobile.dimensions.height}
          layout='responsive'
          // quality={85}
        />
      </div>
      <StyledAbsoluteWrapper inside={slice.primary.inside}>
        {slice.primary.title ? (
          <Title white={slice.primary.color} size='2.2rem' marginBottom='1rem'>
            <PrismicRichText
              field={
                slice.primary.titleMobile
                  ? slice.primary.titleMobile
                  : slice.primary.title
              }
            />
          </Title>
        ) : null}
        {slice.primary.description ? (
          <StyledDescription color={slice.primary?.color}>
            <PrismicRichText field={slice.primary.descriptionMobile} />
          </StyledDescription>
        ) : null}

        {slice.primary.buttonLink ? (
          <Button
            link={slice.primary.buttonLink}
            label={slice.primary.buttonLabel}
            color={slice.primary.color}
            // normal
          />
        ) : null}
      </StyledAbsoluteWrapper>
    </StyledImageWrapper>

    {/* DEFAULT */}
    <StyledImageWrapper
      greaterThan='sm'
      className='full-bleed'
      color={slice.primary?.color}
      inside={slice.primary?.inside}
    >
      <StyledAbsoluteWrapper>
        {slice.primary.title ? (
          <Title white={slice.primary?.color} size='4rem' marginBottom='40px'>
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
            color={slice.primary.color}
            size={'1.5rem'}
          />
        ) : null}
      </StyledAbsoluteWrapper>
      {/* TODO TABLET SIZES */}

      <div className='full-bleed' style={{ overflow: 'hidden' }}>
        <Media greaterThan='sm'>
          <Image
            src={`${slice.primary.image.url}&dpr=2`}
            alt={slice.primary.image.alt}
            width={slice.primary.image.dimensions.width}
            height={slice.primary.image.dimensions.height}
            layout='responsive'
            // quality={85}
          />
        </Media>
      </div>
    </StyledImageWrapper>
  </>
);

export default Inside;

const StyledAbsoluteWrapper = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 100%;
  align-self: center;
  /*   @media only screen and (max-width: 767px) {
    top: 1rem;
  } */

  @media only screen and (min-width: 768px) {
  }
`;

const StyledDescription = styled.span`
  position: relative;
  margin-bottom: 2rem;
  z-index: 100;
  width: 15ch;
  ${({ color }) =>
    color === 'white'
      ? `
    color: white;
  `
      : 'color: black;'}

  p {
    /* font-weight: 300; */

    line-height: 2rem;
  }

  @media only screen and (min-width: 768px) {
    width: 61ch;
    p {
      line-height: 2.6rem;
      font-size: 1.5rem;
      /* width: 100%; */
    }
  }
`;

const StyledImageWrapper = styled(Media)`
  position: relative;
  display: grid;
  margin-bottom: 110px;
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

    margin-bottom: 110px;
    ${({ color }) =>
      color === 'white'
        ? ` > * > * {
    color: white;
  }`
        : '#000;'}
  }
`;
