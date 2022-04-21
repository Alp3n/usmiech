import React from 'react';
import styled from '@emotion/styled';
import { PrismicRichText } from '@prismicio/react';
import Title from '../../components/Title';
import Description from '../../components/Description';
import Button from '../../components/Button';
import { Media } from '../../components/MediaQueries';

const RepetableItems = ({ slice }) => (
  <StyledWrapper>
    <StyledHeader>
      <Title marginBottom={'40px'}>
        {slice.primary.title ? (
          <PrismicRichText field={slice.primary.title} />
        ) : null}
      </Title>
      <StyledDesktopLine greaterThan='sm' />
    </StyledHeader>

    <StyledGrid variation={slice.variation}>
      {slice.items.map((item) => (
        <StyledItem
          key={item.uid}
          variation={slice.variation}
          id={slice.variation === 'steps' ? 'steps' : 'opinion'}
        >
          {slice.variation === 'steps' ? (
            <>
              <StyledNumber gridArea='number'>{item.number}</StyledNumber>
              <StyledLine gridArea='line' />
            </>
          ) : null}
          <Title gridArea='title' marginBottom={'40px'}>
            <PrismicRichText field={item.title} />
          </Title>
          {slice.variation === 'steps' ? (
            <Description gridArea='description' noBottomMargin>
              <PrismicRichText field={item.description} />
            </Description>
          ) : (
            <Description gridArea='description' noBottomMargin borderLeft>
              <PrismicRichText field={item.description} />
            </Description>
          )}
        </StyledItem>
      ))}
      <Media at='sm'>
        {slice.primary.buttonLink ? (
          <Button
            label={slice.primary.buttonLabel}
            link={slice.primary.buttonLink}
            color='black'
            gridArea={'button'}
          />
        ) : null}
      </Media>
    </StyledGrid>
  </StyledWrapper>
);

export default RepetableItems;

const StyledWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'content';
  margin-bottom: 110px;
`;
const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-area: header;
  place-content: center;
  margin-bottom: 10px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

const StyledNumber = styled.span`
  grid-area: ${({ gridArea }) => (gridArea ? gridArea : null)};
  font-size: 2.2rem;

  @media only screen and (min-width: 768px) {
    font-size: 3rem;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 9.5rem;
  }
`;

const StyledDesktopLine = styled(Media)`
  @media only screen and (min-width: 768px) {
    border-top: 1px solid black;
    width: 85%;
    height: 0;
    place-self: center end;
    /* margin-bottom: 90px; */
    padding-bottom: 35px;
  }
`;

const StyledLine = styled.div`
  grid-area: ${({ gridArea }) => (gridArea ? gridArea : null)};
  border-left: 1px solid black;
  height: 100%;
  place-self: center;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const StyledItem = styled.div`
  display: grid;
  /* place-items: baseline; */
  column-gap: 15%;
  grid-template-areas: ${({ variation }) =>
    variation === 'steps'
      ? `'number title'
  'line description'`
      : `'title' 
      'description'`};

  @media only screen and (min-width: 768px) {
    column-gap: 0;
    grid-template-areas: ${({ variation }) =>
      variation === 'steps'
        ? `'number'
        'title'
        'description'`
        : `'title' 
      'description'`};
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-area: content;
  grid-template-columns: 1fr;
  /* margin-bottom: 3rem; */
  column-gap: 2rem;
  row-gap: 2rem;

  div:nth-of-type(4) > div:nth-of-type(1) {
    border: none;
  }

  div > span:first-of-type {
    margin-left: 3%;
  }

  @media only screen and (max-width: 767px) {
    span > p:nth-of-type(2) {
      border-left: 1px solid black;
      margin-left: 5%;
      padding: 0 10%;
    }
  }
  /* grid-auto-flow: row; */

  @media only screen and (min-width: 768px) {
    place-items: baseline;
    gap: 3rem;

    div > span:first-of-type {
      margin-left: 0;
    }

    div > span:nth-of-type(2) {
      border-left: none;
      margin-left: 0;
      padding: 0;
    }
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: ${({ variation }) =>
      variation === 'steps' ? `repeat(4, 1fr)` : 'repeat(3, 1fr)'};
    /* margin-bottom: 4rem; */
  }
`;
