import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import Image from 'next/image';
import styled from '@emotion/styled';
import Title from '../../components/Title';
import Description from '../../components/Description';
import Button from '../../components/Button';
import { Media } from '../../components/MediaQueries';

const SingleImage = ({ slice }) => (
  <>
    <StyledWrapper
      at='sm'
      className='full-bleed'
      clinic={slice.variation === 'clinic' ? 'clinic' : null}
    >
      <StyledImageWrapper gridArea='image' className='full-bleed'>
        <Image
          src={slice.primary.image.mobile.url}
          alt={slice.primary.image.mobile.alt}
          width={slice.primary.image.mobile.dimensions.width}
          height={slice.primary.image.mobile.dimensions.height}
          layout='responsive'
          quality={100}
        />
      </StyledImageWrapper>
      {slice.variation === 'step' ? (
        <StyledStepLineWrapper gridArea='stepLine'>
          <PrismicRichText field={slice.primary.step} />
          <StyledLine />
        </StyledStepLineWrapper>
      ) : null}
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
      {slice.variation === 'product' ? (
        slice.primary.price ? (
          <Description>
            <PrismicRichText field={slice.primary.price} />
          </Description>
        ) : null
      ) : null}
      <Button
        link={slice.primary.buttonLink}
        label={slice.primary.buttonLabel}
        gridArea='button'
      />
    </StyledWrapper>

    <StyledWrapper
      side={slice.primary.imageSide}
      greaterThan='sm'
      clinic={slice.variation === 'clinic' ? 'clinic' : null}
    >
      <StyledImageWrapper gridArea='image'>
        <Image
          src={slice.primary.image.url}
          alt={slice.primary.image.alt}
          width={slice.primary.image.dimensions.width}
          height={slice.primary.image.dimensions.height}
          layout='responsive'
          quality={100}
        />
      </StyledImageWrapper>
      <StyledSmallerWrapper gridArea='column'>
        {slice.variation === 'step' ? (
          <StyledStepLineWrapper gridArea='stepLine'>
            <PrismicRichText field={slice.primary.step} />
            <StyledLine />
          </StyledStepLineWrapper>
        ) : null}

        {slice.primary.title ? (
          <Title gridArea='title'>
            <PrismicRichText field={slice.primary.title} />
          </Title>
        ) : null}
        {slice.primary.description ? (
          <Description gridArea='description'>
            <PrismicRichText field={slice.primary.description} />
          </Description>
        ) : null}
        {slice.primary.buttonLink ? (
          <Button
            link={slice.primary.buttonLink}
            label={slice.primary.buttonLabel}
            gridArea='button'
          />
        ) : null}
        {slice.variation === 'product' ? (
          slice.primary.price ? (
            <Description>
              <PrismicRichText field={slice.primary.price} />
            </Description>
          ) : null
        ) : null}
      </StyledSmallerWrapper>
    </StyledWrapper>
    <StyledCalendar greaterThanOrEqual='sm' className='iframe'>
      {slice.variation === 'clinic' ? (
        slice.primary.calendarLink ? (
          <div
            dangerouslySetInnerHTML={{ __html: slice.primary.calendarLink2 }}
          />
        ) : null
      ) : null}
    </StyledCalendar>
  </>
);

export default SingleImage;

const StyledStepLineWrapper = styled.div`
  grid-area: ${({ gridArea }) => (gridArea ? gridArea : null)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  p {
    font-weight: 300;
  }
`;

const StyledLine = styled.div`
  border-top: 1px solid black;
  width: 80%;
`;

const StyledWrapper = styled(Media)`
  position: relative;
  width: 100%;
  margin-bottom: ${({ clinic }) => (clinic === 'clinic' ? '0' : '1rem')};
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr min(115ch, calc(100% - 48px)) 1fr;
  height: auto;

  @media only screen and (max-width: 767px) {
    > * {
      grid-column: 2;
    }
    .full-bleed {
      grid-column: 1 / -1;
      width: 100%;
    }
    grid-template-areas:
      '. image .'
      '. stepLine .'
      '. title .'
      '. description .'
      '. button .';
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: ${({ side }) =>
      side === 'left' ? `'image column'` : `'column image'`};
    column-gap: 10rem;
    margin-bottom: ${({ clinic }) => (clinic === 'clinic' ? '3rem' : '10rem')};
  }
`;

const StyledSmallerWrapper = styled.div`
  display: grid;
  grid-area: ${({ gridArea }) => (gridArea ? gridArea : null)};
  grid-template-columns: 1fr;
  grid-template-areas:
    'stepLine'
    'title'
    'description'
    'button';
  place-content: start;
  padding-top: 1rem;
`;

const StyledImageWrapper = styled.div`
  grid-area: ${({ gridArea }) => (gridArea ? gridArea : null)};
  @media only screen and (max-width: 767px) {
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 768px) {
    align-self: center;
  }
`;

const StyledCalendar = styled.div``;
