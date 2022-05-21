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
  line-height: 2;
  margin-bottom: 3rem;

  @media only screen and (min-width: 768px) {
    width: 50%;
    margin-bottom: 4rem;
  }
`;
