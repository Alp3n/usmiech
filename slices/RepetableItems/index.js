import React from 'react';
import styled from '@emotion/styled';
import { PrismicRichText } from '@prismicio/react';
import Title from '../../components/Title';
import Description from '../../components/Description';

const RepetableItems = ({ slice }) => (
  <>
    <Title>
      {slice.primary.title ? (
        <PrismicRichText field={slice.primary.title} />
      ) : null}
    </Title>
    <StyledGrid>
      {slice.items.map((item) => (
        <div key={item.uid}>
          {slice.variation === 'steps' ? (
            <StyledNumber>{item.number}</StyledNumber>
          ) : null}
          <Title>
            <PrismicRichText field={item.title} />
          </Title>
          <Description>
            <PrismicRichText field={item.description} />
          </Description>
        </div>
      ))}
    </StyledGrid>
  </>
);

export default RepetableItems;

const StyledNumber = styled.span`
  font-size: 3rem;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-flow: grid;

  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
