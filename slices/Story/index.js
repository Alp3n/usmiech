import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import Image from 'next/image';
import { Media } from '../../components/MediaQueries';
import styled from '@emotion/styled';
import Button from '../../components/Button';

const Story = ({ slice }) => (
  <>
    <Media at='sm' className='full-bleed'>
      <Image
        src={`${slice.primary.image.mobile.url}&auto=noCompress`}
        alt={slice.primary.image.mobile.alt}
        width={slice.primary.image.mobile.dimensions.width}
        height={slice.primary.image.mobile.dimensions.height}
        layout='responsive'
        quality={100}
      />
    </Media>
    <Media greaterThan='sm' className='full-bleed'>
      <Image
        src={`${slice.primary.image.url}&auto=noCompress`}
        alt={slice.primary.image.alt}
        width={slice.primary.image.dimensions.width}
        height={slice.primary.image.dimensions.height}
        layout='responsive'
        quality={100}
      />
    </Media>
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
      />
    </StyledGrid>
  </>
);

export default Story;

const StyledGrid = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'leftWrapper'
    'description'
    'button';
  margin-bottom: 3rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    margin-bottom: 10rem;
    grid-template-areas:
      'leftWrapper description'
      'leftWrapper button';
  }
`;

const StyledDescription = styled.div`
  font-size: 1.1rem;
  line-height: 2.2;
  margin-bottom: 2rem;
  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
    line-height: 1.6;
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

  > p {
    margin: 0;
    padding: 0;
    font-weight: 300;
  }
`;
