import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import styled from '@emotion/styled';
import { Desktop, Mobile, Tablet } from '../../components/MediaQueries';
import Image from 'next/image';
import Button from '../../components/Button';

const FullBleed = ({ slice }) => (
  <>
    <StyledImageWrapper className='full-bleed'>
      <StyledBox color='grey' className='full-bleed' />
      <StyledTitle>
        {slice.primary.title ? (
          <PrismicRichText field={slice.primary.title} />
        ) : null}
      </StyledTitle>
      {/* <Image
      src={slice.primary.image.url}
      alt={slice.primary.image.alt}
      width={'1920px'}
      height={'700px'}
      layout='responsive'
      quality={100}
    /> */}
    </StyledImageWrapper>

    {slice.primary.description ? (
      <StyledDescription>
        <PrismicRichText field={slice.primary.description} />
      </StyledDescription>
    ) : null}
    {slice.variation === 'default' ? (
      <Button
        link={slice.primary.buttonLink}
        label={slice.primary.buttonLabel}
      />
    ) : null}
  </>
);

export default FullBleed;

const StyledTitle = styled.span`
  position: absolute;
  bottom: 0;
  place-content: bottom;
  padding: 2rem 0;
  color: #000;
  font-size: 1.8rem;
  h2 {
    font-weight: 200;
    line-height: 1.3rem;
    text-transform: capitalize;
  }
`;

const StyledDescription = styled.span`
  margin-bottom: 2rem;
  p {
    font-weight: 300;
    line-height: 2rem;
    text-transform: capitalize;
  }
`;

const StyledImageWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 1fr min(115ch, calc(100% - 48px)) 1fr;
  grid-column-gap: 24px;
  height: 100%;
  > * {
    grid-column: 2;
  }
  .full-bleed {
    grid-column: 1 / -1;
    width: 100%;
  }
`;

const StyledBox = styled.div`
  background-color: ${({ color }) => (color ? color : null)};
  height: 70vh;
`;
