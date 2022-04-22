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
      {slice.primary.title ? (
        <Title marginBottom={'40px'} line>
          <PrismicRichText field={slice.primary.title} />
        </Title>
      ) : null}
      <StyledDesktopLine greaterThanOrEqual='sm' />
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
              <StyledNumber area='number'>{item.number}</StyledNumber>
              <StyledLine area='line' />
            </>
          ) : null}
          <Title area='title' marginBottom={'40px'}>
            <PrismicRichText field={item.title} />
          </Title>
          {slice.variation === 'steps' ? (
            <Description area='description' noBottomMargin>
              <PrismicRichText field={item.description} />
            </Description>
          ) : (
            <Description area='description' noBottomMargin borderLeft>
              <PrismicRichText field={item.description} />
            </Description>
          )}
        </StyledItem>
      ))}
      {/* <Media at='sm'>
        {slice.primary.buttonLink ? (
          <Button
            label={slice.primary.buttonLabel}
            link={slice.primary.buttonLink}
            color='black'
            area={'button'}
          />
        ) : null}
      </Media> */}
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
  grid-area: ${({ area }) => (area ? area : null)};
  font-size: 2.2rem;

  @media only screen and (min-width: 768px) {
    font-size: 3rem;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 9.5rem;
  }
`;

const StyledDesktopLine = styled(Media)`
  border-top: 1px solid black;
  width: 85%;
  height: 0;
  place-self: center end;
  /* margin-bottom: 90px; */
  padding-bottom: 35px;
`;

const StyledLine = styled.div`
  grid-area: ${({ area }) => (area ? area : null)};
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
