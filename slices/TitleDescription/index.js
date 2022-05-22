import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import styled from '@emotion/styled';
import Title from '../../components/Title';

const TitleDescription = ({ slice }) => (
  <>
    <Title marginBottom='40px'>
      <PrismicRichText field={slice.primary.title} />
    </Title>

    <StyledWrapper>
      <PrismicRichText field={slice.primary.description} />
    </StyledWrapper>
  </>
);

export default TitleDescription;
const StyledWrapper = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  p {
    line-height: 2rem;
    font-size: 1.1rem;
  }
  @media only screen and (min-width: 768px) {
    width: 50%;
    margin-bottom: 4rem;
    p {
      line-height: 2.2rem;
      font-size: 1.2rem;
    }
  }
`;
