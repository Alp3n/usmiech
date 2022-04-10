import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import styled from '@emotion/styled';
import Title from '../../components/Title';
import Description from '../../components/Description';
import Button from '../../components/Button';
import Image from 'next/image';

const DoubleImage = ({ slice }) => (
  <div>
    <StyledImageStack className='full-bleed'>
      <StyledImageBig width='80vw' left='20px'>
        <Image
          src={slice.primary.imageBig.url}
          alt={slice.primary.imageBig.alt}
          width={slice.primary.imageBig.dimensions.width}
          height={slice.primary.imageBig.dimensions.height}
          layout='responsive'
        />
        <StyledImageSmall width='40vw' left='-25%' bottom='-2rem'>
          <Image
            src={slice.primary.imageSmall.url}
            alt={slice.primary.imageSmall.alt}
            width={slice.primary.imageSmall.dimensions.width}
            height={slice.primary.imageSmall.dimensions.height}
            layout='responsive'
          />
        </StyledImageSmall>
      </StyledImageBig>
    </StyledImageStack>
    <StyledWrapper>
      <Title>
        {slice.primary.title ? (
          <PrismicRichText field={slice.primary.title} />
        ) : null}
      </Title>
      <Description>
        {slice.primary.description ? (
          <PrismicRichText field={slice.primary.description} />
        ) : null}
      </Description>
      <Button
        label={slice.primary.buttonLabel}
        link={slice.primary.buttonLink}
      />
    </StyledWrapper>
  </div>
);

export default DoubleImage;

const StyledWrapper = styled.div`
  display: grid;
  margin-bottom: 1rem;
`;

const StyledImageStack = styled.div`
  position: relative;
  margin-bottom: 15vw;
`;

const StyledImageBig = styled.div`
  position: relative;
  margin: 0 auto;
  width: ${({ width }) => (width ? width : null)};
  left: ${({ left }) => (left ? left : null)};
  max-width: 400px;
`;

const StyledImageSmall = styled.div`
  position: absolute;
  margin: 0 auto;
  width: ${({ width }) => (width ? width : null)};
  left: ${({ left }) => (left ? left : null)};
  bottom: ${({ bottom }) => (bottom ? bottom : null)};
  max-width: 200px;
  z-index: 100;
`;
