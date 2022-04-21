import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import Title from '../../components/Title';
import Description from '../../components/Description';
import styled from '@emotion/styled';

const FaQ = ({ slice }) => (
  <StyledWrapper>
    {slice.items.map((item) => (
      <StyledItem key={item.uid}>
        <Title marginBottom='40px'>
          <PrismicRichText field={item.Question} />
        </Title>
        <Description>
          <PrismicRichText field={item.Answer} />
        </Description>
      </StyledItem>
    ))}
  </StyledWrapper>
);

export default FaQ;

const StyledWrapper = styled.div`
  margin-bottom: 3rem;

  @media only screen and (min-width: 768px) {
    margin-bottom: 6rem;
  }
`;

const StyledItem = styled.div`
  display: grid;
  /* width: 60%; */
  /* grid-template-columns: 80%; */
  margin-bottom: 50px;
  @media only screen and (min-width: 768px) {
    grid-template-columns: 80%;
  }
`;
