import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import styled from '@emotion/styled';
import Title from '../../components/Title';
import Description from '../../components/Description';
import Button from '../../components/Button';
import Image from 'next/image';

const DoubleImage = ({ slice }) => (
  <>
    <StyledImageStack className='full-bleed'>
      <StyledImageWrapper width={'250px'} right>
        <Image
          src={slice.primary.imageBig.url}
          alt={slice.primary.imageBig.alt}
          width={slice.primary.imageBig.dimensions.width}
          height={slice.primary.imageBig.dimensions.height}
          layout='responsive'
        />
      </StyledImageWrapper>
      <StyledImageWrapper width={'125px'} left bottom='30px'>
        <Image
          src={slice.primary.imageSmall.url}
          alt={slice.primary.imageSmall.alt}
          width={slice.primary.imageSmall.dimensions.width}
          height={slice.primary.imageSmall.dimensions.height}
          layout='responsive'
        />
      </StyledImageWrapper>
    </StyledImageStack>
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
    <Button label={slice.primary.buttonLabel} link={slice.primary.buttonLink} />
  </>
);

export default DoubleImage;

const StyledImageStack = styled.div`
  position: relative;
  height: 70vh;
`;

const StyledImageWrapper = styled.div`
  position: absolute;
  width: ${({ width }) => (width ? width : null)};
  /* height: 600px; */
  right: ${({ right }) => (right ? '0' : null)};
  left: ${({ left }) => (left ? '0' : null)};
  bottom: ${({ bottom }) => (bottom ? bottom : null)};
`;
