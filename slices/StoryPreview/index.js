import React from 'react';
import styled from '@emotion/styled';
import { PrismicRichText } from '@prismicio/react';

const StoryPreview = ({ slice }) => (
  <>
    <StyledGrid>
      <StyledBox>
        {slice.primary.firstText ? (
          <StyledDescription>
            <PrismicRichText field={slice.primary.firstText} />
          </StyledDescription>
        ) : null}
        {slice.primary.firstDescription ? (
          <StyledDescription normal>
            <PrismicRichText field={slice.primary.firstDescription} />
          </StyledDescription>
        ) : null}
      </StyledBox>

      {slice.primary.video ? (
        <div></div>
      ) : (
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '80%',
            backgroundColor: 'grey',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1>Video</h1>
        </div>
      )}
    </StyledGrid>

    <StyledRight>
      <div />
      <StyledBox normal>
        <StyledLine />
        <StyledTitle>Leczenie</StyledTitle>
      </StyledBox>
      <div />
      <StyledBox normal>
        <div />
        {slice.primary.treatmentText ? (
          <StyledDescription normal>
            <PrismicRichText field={slice.primary.treatmentText} />
          </StyledDescription>
        ) : null}
      </StyledBox>
    </StyledRight>
  </>
);

export default StoryPreview;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 35% 65%;
  }
`;

const StyledBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
  align-items: center;
  width: ${({ normal }) => (normal ? '100%' : '35ch')};

  @media only screen and (min-width: 768px) {
    grid-template-columns: ${({ normal }) => (normal ? '30% 60%' : '1fr')};
  }
`;

const StyledTitle = styled.h2`
  font-size: 2rem;
  @media only screen and (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

const StyledRight = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: end;
  align-items: center;
  @media only screen and (min-width: 768px) {
    grid-template-columns: 30% 1fr;
  }
`;

const StyledLine = styled.div`
  display: hidden;
  @media only screen and (min-width: 768px) {
    border-top: 1px solid black;
    width: 90%;
    margin-right: 2rem;
  }
`;

const StyledDescription = styled.span`
  position: relative;
  margin-bottom: 2rem;
  z-index: 100;

  ${({ color }) =>
    color === 'white'
      ? `
    color: white;
  `
      : 'color: black;'}

  p {
    font-size: ${({ normal }) => (normal ? '1.1rem' : '1.5rem')};
    font-weight: 300;
    line-height: 2.5rem;
    margin-top: -1rem;
  }

  @media only screen and (min-width: 768px) {
    p {
      margin-top: 1rem;
      line-height: 2.5rem;
      font-size: ${({ normal }) => (normal ? '1.1rem' : '2rem')};
      /* width: 100%; */
    }
  }
`;
