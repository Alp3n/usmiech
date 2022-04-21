import React from 'react';
import { PrismicLink, PrismicRichText } from '@prismicio/react';
import Image from 'next/image';
import { Media } from '../../components/MediaQueries';
import styled from '@emotion/styled';
import Button from '../../components/Button';

const Story = ({ slice }) => (
  <>
    <StyledImageWrapper at='sm' className='full-bleed'>
      <PrismicLink field={slice.primary.buttonLink}>
        <Image
          src={`${slice.primary.image.mobile.url}&auto=noCompress`}
          alt={slice.primary.image.mobile.alt}
          width={slice.primary.image.mobile.dimensions.width}
          height={slice.primary.image.mobile.dimensions.height}
          layout='responsive'
          quality={100}
        />
      </PrismicLink>
    </StyledImageWrapper>
    <StyledImageWrapper greaterThan='sm' className='full-bleed'>
      <PrismicLink field={slice.primary.buttonLink}>
        <Image
          src={`${slice.primary.image.url}&auto=noCompress`}
          alt={slice.primary.image.alt}
          width={slice.primary.image.dimensions.width}
          height={slice.primary.image.dimensions.height}
          layout='responsive'
          quality={100}
        />
      </PrismicLink>
    </StyledImageWrapper>
    <StyledGrid>
      <StyledLeftWrapper gridArea='leftWrapper'>
        <StyledTitle gridArea='title'>
          <PrismicRichText field={slice.primary.title} />
        </StyledTitle>
        <StyledSubtitle gridArea='subtitle'>
          <PrismicRichText field={slice.primary.subTitle} />
        </StyledSubtitle>
      </StyledLeftWrapper>
      <StyledDescription>
        <PrismicRichText field={slice.primary.description} />
      </StyledDescription>
      <Button
        link={slice.primary.buttonLink}
        label={slice.primary.buttonLabel}
        gridArea='button'
        color='black'
      />
    </StyledGrid>
  </>
);

export default Story;

const StyledImageWrapper = styled(Media)`
  margin-bottom: 10px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

const StyledGrid = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'leftWrapper'
    'description'
    'button';
  margin-bottom: 110px;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    margin-bottom: 110px;
    grid-template-areas:
      'leftWrapper description'
      'leftWrapper button';
    place-items: start;
  }
`;

const StyledDescription = styled.div`
  margin-bottom: 2rem;
  p {
    font-weight: 300;
    font-size: 1.2rem;
    line-height: 2.4;
    @media only screen and (min-width: 768px) {
      font-size: 2rem;
      line-height: 1.6;
    }
  }
`;

const StyledLeftWrapper = styled.div`
  grid-area: ${({ gridArea }) => gridArea};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'title'
    'subtitle';
`;

const StyledTitle = styled.span`
  font-size: 2rem;
  margin: 0;
  padding: 0;

  > h1 {
    margin: 0;
    padding: 0;
  }

  @media only screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

const StyledSubtitle = styled.span`
  grid-area: ${({ gridArea }) => gridArea};
  margin-bottom: 1.5rem;
  > p {
    margin: 0;
    padding: 0;
    font-weight: 300;
  }
`;
