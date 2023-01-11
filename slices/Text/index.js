import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import styled from '@emotion/styled';

const Text = ({ slice }) => (
  <StyledWrapper>
    <PrismicRichText field={slice.primary.text} />
  </StyledWrapper>
);

export default Text;

const StyledWrapper = styled.div`
  margin: 50px 0;

  h4 {
    font-size: 1.3rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
`;
