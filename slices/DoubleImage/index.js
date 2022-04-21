import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import styled from '@emotion/styled';
import Title from '../../components/Title';
import Description from '../../components/Description';
import Button from '../../components/Button';
import Image from 'next/image';
import { Media } from '../../components/MediaQueries';

const DoubleImage = ({ slice }) => (
  <>
    <Media at='sm'>
      <StyledWrapper>
        <StyledImageStack className='full-bleed' gridArea='image'>
          <StyledImageBig width='100%' left='20px'>
            <Image
              src={slice.primary.imageBig.url}
              alt={slice.primary.imageBig.alt}
              width={slice.primary.imageBig.dimensions.width}
              height={slice.primary.imageBig.dimensions.height}
              layout='responsive'
              quality={90}
            />
            <StyledImageSmall width='42vw' left='-10%' bottom='-2rem'>
              <Image
                src={slice.primary.imageSmall.url}
                alt={slice.primary.imageSmall.alt}
                width={slice.primary.imageSmall.dimensions.width}
                height={slice.primary.imageSmall.dimensions.height}
                layout='responsive'
                quality={90}
              />
            </StyledImageSmall>
          </StyledImageBig>
        </StyledImageStack>
        {slice.primary.title ? (
          <Title gridArea='title' marginBottom={'40px'} line>
            <PrismicRichText field={slice.primary.title} />
          </Title>
        ) : null}
        {slice.primary.description ? (
          <Description gridArea='description' marginBottom={'50px'}>
            <PrismicRichText field={slice.primary.description} />
          </Description>
        ) : null}
        <Button
          link={slice.primary.buttonLink}
          label={slice.primary.buttonLabel}
          gridArea='button'
          color='black'
        />
      </StyledWrapper>
    </Media>
    <Media greaterThan='sm'>
      <StyledWrapper>
        <StyledImageStack gridArea='image'>
          <StyledImageBig width='100%' left='20px'>
            <Image
              src={slice.primary.imageBig.url}
              alt={slice.primary.imageBig.alt}
              width={slice.primary.imageBig.dimensions.width}
              height={slice.primary.imageBig.dimensions.height}
              layout='responsive'
              quality={90}
            />
            <StyledImageSmall width='45vw' left='-25%' bottom='-2rem'>
              <Image
                src={slice.primary.imageSmall.url}
                alt={slice.primary.imageSmall.alt}
                width={slice.primary.imageSmall.dimensions.width}
                height={slice.primary.imageSmall.dimensions.height}
                layout='responsive'
                quality={90}
              />
            </StyledImageSmall>
          </StyledImageBig>
        </StyledImageStack>
        <StyledSmallerWrapper gridArea='rightColumn'>
          {slice.primary.title ? (
            <Title gridArea='title' marginBottom={'40px'} line>
              <PrismicRichText field={slice.primary.title} />
            </Title>
          ) : null}
          {slice.primary.description ? (
            <Description gridArea='description' marginBottom={'50px'}>
              <PrismicRichText field={slice.primary.description} />
            </Description>
          ) : null}
          <Button
            link={slice.primary.buttonLink}
            label={slice.primary.buttonLabel}
            gridArea='button'
            color='black'
          />
        </StyledSmallerWrapper>
      </StyledWrapper>
    </Media>
  </>
);

export default DoubleImage;

const StyledWrapper = styled.div`
  display: grid;
  margin-bottom: 3rem;
  place-content: center;

  grid-template-columns: 1fr;
  grid-template-rows: repeat(1, 1fr);
  grid-template-areas:
    'title'
    'image'
    'description'
    'button';
  margin-bottom: 5rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 7rem;
    grid-template-areas: 'rightColumn image';
    margin-bottom: 10rem;
  }
  @media only screen and (min-width: 1292px) {
    column-gap: 10rem;
  }
`;

const StyledSmallerWrapper = styled.div`
  display: grid;
  grid-area: ${({ gridArea }) => (gridArea ? gridArea : null)};
  grid-template-columns: 1fr;
  grid-template-areas:
    'title'
    'description'
    'button';
  place-content: center;
  width: 80%;
`;

const StyledImageStack = styled.div`
  position: relative;
  grid-area: ${({ gridArea }) => (gridArea ? gridArea : null)};
  margin-bottom: 5rem;
  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const StyledImageBig = styled.div`
  position: relative;
  margin: 0 auto;
  width: ${({ width }) => (width ? width : null)};
  /* left: ${({ left }) => (left ? left : null)}; */
  /* max-width: 60%; */
  max-width: 450px;

  @media only screen and (min-width: 768px) {
    margin: 0;
    max-width: 520px;
  }
`;

const StyledImageSmall = styled.div`
  position: absolute;
  width: ${({ width }) => (width ? width : null)};
  left: ${({ left }) => (left ? left : null)};
  bottom: ${({ bottom }) => (bottom ? bottom : null)};
  max-width: 200px;
  z-index: 100;

  @media only screen and (min-width: 768px) {
    max-width: 250px;
  }
`;
