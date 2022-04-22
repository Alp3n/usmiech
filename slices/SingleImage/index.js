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
      // className='full-bleed'
      clinic={slice.variation === 'clinic' ? 'clinic' : null}
      marginTop={slice.primary.title.map((t) => t.text)}
    >
      {slice.variation === 'steps' ? (
        <StyledStepLineWrapper area='stepLine'>
          <PrismicRichText field={slice.primary.step} />
          <StyledLine />
        </StyledStepLineWrapper>
      ) : null}
      {slice.variation === 'steps' ? (
        <Title
          area='title'
          marginBottom='40px'
          line={slice.variation === 'steps' ? false : true}
        >
          <PrismicRichText
            field={
              slice.primary.titleMobile
                ? slice.primary.titleMobile
                : slice.primary.title
            }
          />
        </Title>
      ) : (
        <StyledHeader>
          <StyledLineTitle />
          <Title
            area='title'
            marginBottom='40px'
            line={slice.variation === 'steps' ? false : true}
          >
            <PrismicRichText
              field={
                slice.primary.titleMobile
                  ? slice.primary.titleMobile
                  : slice.primary.title
              }
            />
          </Title>
        </StyledHeader>
      )}

      <StyledImageWrapper area='image'>
        <Image
          src={`${slice.primary.image.mobile.url}&dpr=2`}
          alt={slice.primary.image.mobile.alt}
          width={slice.primary.image.mobile.dimensions.width}
          height={slice.primary.image.mobile.dimensions.height}
          layout='responsive'
          // quality={85}
        />
      </StyledImageWrapper>
      {slice.variation === 'clinic' ? (
        <>
          <Description area='description' marginBottom={'40px'}>
            <PrismicRichText field={slice.primary.descriptionOne} />
          </Description>

          <Description area='price' marginBottom={'40px'}>
            <PrismicRichText field={slice.primary.descriptionTwo} />
          </Description>
        </>
      ) : (
        <Description
          area='description'
          marginBottom={'40px'}
          width={slice.primary.imageSide === 'right' ? '80%' : null}
        >
          <PrismicRichText field={slice.primary.description} />
        </Description>
      )}

      {slice.variation === 'product' ? (
        slice.primary.price ? (
          <Description area='price' marginBottom={'40px'}>
            <PrismicRichText field={slice.primary.price} />
          </Description>
        ) : null
      ) : null}

      <Button
        link={slice.primary.buttonLink}
        label={slice.primary.buttonLabel}
        area='button'
        color='black'
      />
    </StyledWrapper>

    <StyledWrapperDesktop
      side={slice.primary.imageSide}
      greaterThan='sm'
      clinic={slice.variation === 'clinic' ? 'clinic' : null}
      marginTop={slice.primary.title.map((t) => t.text)}
    >
      <StyledImageWrapper area='image'>
        <Image
          src={`${slice.primary.image.url}&dpr=2`}
          alt={slice.primary.image.alt}
          width={slice.primary.image.dimensions.width}
          height={slice.primary.image.dimensions.height}
          layout='responsive'
          // quality={100}
        />
      </StyledImageWrapper>
      <StyledSmallerWrapper area='column'>
        {slice.variation === 'steps' ? (
          <StyledStepLineWrapper area='stepLine'>
            <PrismicRichText field={slice.primary.step} />
            <StyledLine />
          </StyledStepLineWrapper>
        ) : null}

        {slice.primary.title ? (
          <Title
            area='title'
            marginBottom='40px'
            // line={slice.variation === 'steps' ? false : true}
          >
            <PrismicRichText field={slice.primary.title} />
          </Title>
        ) : null}
        {slice.variation === 'clinic' ? (
          <>
            <Description area='description' marginBottom={'40px'}>
              <PrismicRichText field={slice.primary.descriptionOne} />
            </Description>

            <Description area='price' marginBottom={'40px'}>
              <PrismicRichText field={slice.primary.descriptionTwo} />
            </Description>
          </>
        ) : (
          <Description
            area='description'
            marginBottom={'40px'}
            width={slice.primary.imageSide === 'right' ? '80%' : null}
          >
            <PrismicRichText field={slice.primary.description} />
          </Description>
        )}
        {slice.primary.buttonLink ? (
          <Button
            link={slice.primary.buttonLink}
            label={slice.primary.buttonLabel}
            area='button'
            color='black'
          />
        ) : null}
        {slice.variation === 'product' ? (
          // slice.primary.price ? (
          <Description area='price' marginBottom={'50px'}>
            <PrismicRichText field={slice.primary.price} />
          </Description>
        ) : // ) : null
        null}
      </StyledSmallerWrapper>
    </StyledWrapperDesktop>
    {slice.variation === 'clinic' ? (
      slice.primary.calendarLink ? (
        <StyledCalendar greaterThanOrEqual='sm' className='iframe'>
          <div
            dangerouslySetInnerHTML={{ __html: slice.primary.calendarLink2 }}
          />
        </StyledCalendar>
      ) : null
    ) : null}
  </>
);

export default SingleImage;
const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledLineTitle = styled.div`
  position: relative;
  border-top: 1px solid black;
  width: 40%;
  align-self: end;
  top: 1.6rem;
  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`;
const StyledStepLineWrapper = styled.div`
  grid-area: ${({ area }) => (area ? area : null)};
  display: grid;
  gap: 2rem;
  grid-template-columns: auto 1fr;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  p {
    font-weight: 300;
  }
`;

const StyledLine = styled.div`
  border-top: 1px solid black;
  width: 100%;
`;

const StyledWrapperDesktop = styled(Media)`
  @media only screen and (min-width: 768px) {
    column-gap: 4rem;
    display: inline-block;
    position: relative;
    width: 100%;
    margin-top: ${({ marginTop }) =>
      marginTop.includes('Centrum') ? '50px' : '0'};
    margin-bottom: ${({ clinic }) => (clinic === 'clinic' ? '0' : '110px')};
    /* margin-top: 1.5rem; */
    display: grid;
    /* grid-template-columns: 1fr min(115ch, calc(100% - 48px)) 1fr; */
    height: auto;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: ${({ side }) =>
      side === 'left' ? `'image column'` : `'column image'`};
    column-gap: 7rem;
    margin-bottom: ${({ clinic }) => (clinic === 'clinic' ? '3rem' : '110px')};
  }

  @media only screen and (min-width: 1292px) {
    column-gap: 10rem;
  }
`;

const StyledWrapper = styled(Media)`
  position: relative;
  width: 100%;
  margin-top: ${({ marginTop }) =>
    marginTop.includes('Centrum') ? '40px' : '0'};
  margin-bottom: ${({ clinic }) => (clinic === 'clinic' ? '0' : '90px')};
  display: grid;

  height: auto;

  > * {
    grid-column: 2;
  }
  .full-bleed {
    grid-column: 1 / -1;
    width: 100%;
  }
  grid-template-areas:
    '. stepLine .'
    '. title .'
    '. image .'
    '. description .'
    '. price .'
    '. button .';
`;

const StyledSmallerWrapper = styled.div`
  display: grid;
  grid-area: ${({ area }) => (area ? area : null)};
  grid-template-columns: 1fr;
  grid-template-areas:
    'stepLine'
    'title'
    'description'
    'price'
    'button';
  place-content: start;
  padding-top: 1rem;
  /* width: 80%; */
`;

const StyledImageWrapper = styled.div`
  grid-area: ${({ area }) => (area ? area : null)};
  margin-bottom: 50px;
  @media only screen and (max-width: 767px) {
    /* width: 90vw; */
    margin-bottom: 2.5rem;
  }

  @media only screen and (min-width: 768px) {
    align-self: center;
    max-width: 500px;
  }
`;

const StyledCalendar = styled.div`
  /* margin-bottom: 10px; */
  @media only screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`;
