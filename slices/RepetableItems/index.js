import React from 'react';
import styled from '@emotion/styled';
import { PrismicRichText } from '@prismicio/react';
import Title from '../../components/Title';
import Description from '../../components/Description';
import Button from '../../components/Button';

const RepetableItems = ({ slice }) => (
  <>
    <Title>
      {slice.primary.title ? (
        <PrismicRichText field={slice.primary.title} />
      ) : null}
    </Title>
    <StyledGrid>
      {slice.items.map((item) => (
        <StyledItem key={item.uid} slice={slice}>
          {slice.variation === 'steps' ? (
            <>
              {' '}
              <StyledNumber area='number'>{item.number}</StyledNumber>
              <StyledLine area='line' className='line' />
            </>
          ) : null}
          <Title area='title'>
            <PrismicRichText field={item.title} />
          </Title>
          <Description area='description' noBottomMargin>
            <PrismicRichText field={item.description} />
          </Description>
        </StyledItem>
      ))}
    </StyledGrid>
    {/* <Button label={slice.primary.buttonLabel} link={slice.primary.buttonLink} /> */}
  </>
);

export default RepetableItems;

const StyledWrapper = styled.div`
  margin-bottom: 3rem;
`;

const StyledNumber = styled.span`
  grid-area: ${({ area }) => (area ? area : null)};
  font-size: 2.2rem;
  place-self: baseline;
`;

const StyledLine = styled.div`
  grid-area: ${({ area }) => (area ? area : null)};
  border-left: 1px solid black;
  height: 100%;
  place-self: center;
`;

const StyledItem = styled.div`
  display: grid;
  grid-template-areas: ${({ slice }) =>
    slice.variation === 'steps'
      ? `'number title'
  'line description'`
      : `'title' 
      'description'`};

  grid-auto-rows: auto 1fr;
  grid-column-gap: 15%;
  /* padding-right: 10%; */
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  div:last-child > div:nth-child(2) {
    border: none;
  }

  div > span:first-child {
    margin-left: 3%;
  }
  div > span:nth-child(2) {
    border-left: 1px solid black;
    margin-left: 5%;
    padding: 0 10%;
  }
  /* grid-auto-flow: row; */

  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
