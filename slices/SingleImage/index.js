import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import Image from 'next/image';
import styled from '@emotion/styled';
import Title from '../../components/Title';
import Description from '../../components/Description';
import Button from '../../components/Button';
import { Default, Mobile } from '../../components/MediaQueries';

const SingleImage = ({ slice }) => (
  <>
    <Mobile>
      <div className='full-bleed'>
        <Image
          src={slice.primary.image.url}
          alt={slice.primary.image.alt}
          width={slice.primary.image.dimensions.width}
          height={slice.primary.image.dimensions.height}
          layout='responsive'
        />
      </div>
      <Title gridArea='title'>
        {slice.primary.title ? (
          <PrismicRichText field={slice.primary.title} />
        ) : null}
      </Title>
      <Description gridArea='description'>
        {slice.primary.description ? (
          <PrismicRichText field={slice.primary.description} />
        ) : null}
      </Description>
      <Button
        link={slice.primary.buttonLink}
        label={slice.primary.buttonLabel}
        gridArea='button'
      />
    </Mobile>
    <Default>
      <StyledWrapper>
        <StyledImageWrapper gridArea='image'>
          <Image
            src={slice.primary.image.url}
            alt={slice.primary.image.alt}
            width={slice.primary.image.dimensions.width}
            height={slice.primary.image.dimensions.height}
            layout='responsive'
          />
        </StyledImageWrapper>
        <StyledSmallerWrapper gridArea='rightColumn'>
          <Title gridArea='title'>
            {slice.primary.title ? (
              <PrismicRichText field={slice.primary.title} />
            ) : null}
          </Title>
          <Description gridArea='description'>
            {slice.primary.description ? (
              <PrismicRichText field={slice.primary.description} />
            ) : null}
          </Description>
          <Button
            link={slice.primary.buttonLink}
            label={slice.primary.buttonLabel}
            gridArea='button'
          />
        </StyledSmallerWrapper>
      </StyledWrapper>
    </Default>
  </>
);

export default SingleImage;

const StyledWrapper = styled.div`
  display: grid;
  margin-bottom: 3rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 'image rightColumn';
  gap: 5rem;
  margin-bottom: 5rem;
`;

const StyledSmallerWrapper = styled.div`
  display: grid;
  grid-area: ${({ gridArea }) => (gridArea ? gridArea : null)};
  grid-template-columns: 1fr;
  grid-template-areas:
    'title'
    'description'
    'button';
  margin-bottom: 5rem;
`;

const StyledImageWrapper = styled.div`
  grid-area: ${({ gridArea }) => (gridArea ? gridArea : null)};
  align-self: center;
`;
