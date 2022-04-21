import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Button from '../../components/Button';
import Title from '../../components/Title';
import { Media } from '../../components/MediaQueries';

const Outside = ({ slice }) => (
  <>
    {/* MOBILE */}
    <StyledWrapper
      at='sm'
      className='full-bleed'
      color={slice.primary?.color}
      inside={slice.primary?.inside}
    >
      <StyledImageWrapper /* className='full-bleed' */>
        <Image
          src={slice.primary.image.mobile.url}
          alt={slice.primary.image.mobile.alt}
          width={slice.primary.image.mobile.dimensions.width}
          height={slice.primary.image.mobile.dimensions.height}
          layout='responsive'
          quality={90}
        />
      </StyledImageWrapper>
      <StyledGrid>
        <Title white={false} marginBottom='40px'>
          {slice.primary.title ? (
            <PrismicRichText field={slice.primary.title} />
          ) : null}
        </Title>
        {slice.primary.description ? (
          <StyledDescription>
            <PrismicRichText field={slice.primary.description} />
          </StyledDescription>
        ) : null}
        {slice.primary.buttonLink ? (
          <Button
            link={slice.primary.buttonLink}
            label={slice.primary.buttonLabel}
            color='black'
          />
        ) : null}
      </StyledGrid>
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
            color={slice.primary?.color}
            size={'1.5rem'}
          />
        ) : null}
      </StyledAbsoluteWrapper>
      {/* TODO TABLET SIZES */}

      <div className='full-bleed' style={{ overflow: 'hidden' }}>
        <Media greaterThan='sm'>
          <Image
            src={slice.primary.image.url}
            alt={slice.primary.image.alt}
            width={slice.primary.image.dimensions.width}
            height={slice.primary.image.dimensions.height}
            layout='responsive'
            quality={90}
          />
        </Media>
      </div>
    </StyledWrapper>
  </>
);

export default Outside;

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
  margin-bottom: 40px;
  z-index: 100;

  ${({ color }) =>
    color === 'white'
      ? `
    color: white;
  `
      : 'color: black;'}

  p {
    margin: 0;
    font-weight: 400;
    line-height: 2rem;
  }

  @media only screen and (min-width: 1024px) {
    /* width: 50ch; */
    p {
      line-height: 2.6rem;
      font-size: 1.5rem;
      /* width: 23ch; */
      /* width: 100%; */
    }
  }
`;

const StyledGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-template-columns: 1fr;
  gap: 0;
`;

const StyledImageWrapper = styled.div`
  margin-bottom: 40px;
`;

const StyledWrapper = styled(Media)`
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
