import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import styled from '@emotion/styled';
import {
  Default,
  Desktop,
  Mobile,
  Tablet,
} from '../../components/MediaQueries';
import Image from 'next/image';
import Button from '../../components/Button';
import Title from '../../components/Title';

const FullBleed = ({ slice }) => (
  <>
    {console.log(slice)}
    <StyledImageWrapper className='full-bleed'>
      {slice.primary.inside ? null : (
        <Title absolute>
          {slice.primary.title ? (
            <PrismicRichText field={slice.primary.title} />
          ) : null}
        </Title>
      )}
      <div className='full-bleed'>
        <Mobile>
          <Image
            src={`${slice.primary.image.mobile.url}&auto=noCompress`}
            alt={slice.primary.image.mobile.alt}
            width={slice.primary.image.mobile.dimensions.width}
            height={slice.primary.image.mobile.dimensions.height}
            layout='responsive'
            quality={100}
          />
        </Mobile>
        <Default>
          <Image
            src={`${slice.primary.image.url}&auto=noCompress`}
            alt={slice.primary.image.alt}
            width={slice.primary.image.dimensions.width}
            height={slice.primary.image.dimensions.height}
            layout='responsive'
            quality={100}
          />
        </Default>
      </div>
      {slice.primary.inside ? (
        <StyledWrapper absolute>
          <Title>
            {slice.primary.title ? (
              <PrismicRichText field={slice.primary.title} />
            ) : null}
          </Title>
          {slice.primary.description ? (
            <StyledDescription>
              <PrismicRichText field={slice.primary.description} />
            </StyledDescription>
          ) : null}
          {slice.variation === 'default' ? (
            <Button
              link={slice.primary.buttonLink}
              label={slice.primary.buttonLabel}
              plain
            />
          ) : null}
        </StyledWrapper>
      ) : null}
    </StyledImageWrapper>
    {slice.primary.inside ? null : (
      <StyledWrapper>
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
      </StyledWrapper>
    )}
  </>
);

export default FullBleed;

const StyledWrapper = styled.div`
  margin-bottom: 1rem;
  position: ${({ absolute }) => (absolute ? 'absolute' : null)};
`;

const StyledTitle = styled.span`
  position: absolute;
  bottom: 0;
  place-content: bottom;
  padding: 2rem 0;
  color: #000;
  font-size: 1.8rem;
  z-index: 100;
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
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
  display: grid;
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
`;

const ImageWrapper = styled.div`
  height: 600px;
`;
