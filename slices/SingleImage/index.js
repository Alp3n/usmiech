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
        <StyledHeader area='title'>
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
          <StyledLineTitle area='line' />
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
      {slice.variation === 'steps' ? null : (
        <StyledLineTitle side={slice.primary.imageSide} />
      )}
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
            marginBottom='50px'
            // line={slice.variation === 'steps' ? false : true}
          >
            <PrismicRichText field={slice.primary.title} />
            {/* <StyledLineTitle side={slice.primary.imageSide} /> */}
          </Title>
        ) : null}
        {slice.variation === 'clinic' ? (
          <>
            <Description area='description' marginBottom={'50px'}>
              <PrismicRichText field={slice.primary.descriptionOne} />
            </Description>

            <Description area='price' marginBottom={'50px'}>
              <PrismicRichText field={slice.primary.descriptionTwo} />
            </Description>
          </>
        ) : (
          <Description
            area='description'
            marginBottom={'50px'}
            // width={slice.primary.imageSide === 'right' ? '80%' : null}
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
  display: grid;
  grid-area: ${({ area }) => (area ? area : null)};
  grid-template-areas: 'title line';
  grid-template-columns: auto 1fr;
  gap: 1rem;
  @media only screen and (min-width: 768px) {
    gap: 3rem;
  }
`;
const StyledLineTitle = styled.div`
  position: relative;
  border-top: 1px solid #707070;
  top: 1.6rem;
  grid-area: ${({ area }) => (area ? area : null)};
  @media only screen and (min-width: 768px) {
    position: absolute;
    width: 15%;
    top: 2.3rem;
    ${({ side }) => (side === 'left' ? `right: 50%;` : `left: 40%;`)};
    z-index: 9;
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
    position: relative;
    width: 100%;
    margin-top: ${({ marginTop }) =>
      marginTop.includes('Ursynów') ? '50px' : '0'};
    margin-bottom: ${({ clinic }) => (clinic === 'clinic' ? '0' : '110px')};
    display: grid;

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
    marginTop.includes('Ursynów') ? '40px' : '0'};
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
    align-self: start;
    /* max-width: 800px; */
    /* width: 100%; */
  }
`;

const StyledCalendar = styled.div`
  /* margin-bottom: 10px; */
  @media only screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`;
