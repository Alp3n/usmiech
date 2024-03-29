import React from 'react';
import styled from '@emotion/styled';
import { PrismicRichText } from '@prismicio/react';

const StoryPreview = ({ slice }) => {
  // console.log(slice.primary.video);
  return (
    <>
      <StyledGrid>
        <StyledBox>
          {slice.primary.firstText ? (
            <div>
              <StyledDescription mb>
                <PrismicRichText field={slice.primary.firstText} />
              </StyledDescription>
            </div>
          ) : null}
          {slice.primary.firstDescription.length > 0 ? (
            <div>
              <StyledDescription normal>
                <PrismicRichText field={slice.primary.firstDescription} />
              </StyledDescription>
            </div>
          ) : null}
        </StyledBox>

        {slice.primary.video ? (
          <StyledVideo
            dangerouslySetInnerHTML={{
              __html: slice.primary.video.html,
            }}
          />
        ) : null}
      </StyledGrid>

      <StyledRight>
        <div />
        <div>
          <StyledBox normal>
            <StyledLine />
            <StyledTitle>Jakie Leczenie</StyledTitle>
          </StyledBox>
          {/* <div /> */}

          {/* <div /> */}
          {slice.primary.treatmentText ? (
            <StyledDescription normal>
              <PrismicRichText field={slice.primary.treatmentText} />
            </StyledDescription>
          ) : null}
        </div>
      </StyledRight>
    </>
  );
};

export default StoryPreview;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 35% 65%;
  }
`;

const StyledBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
  align-items: center;
  width: ${({ normal }) => (normal ? '100%' : '1fr')};

  @media only screen and (min-width: 768px) {
    grid-template-columns: ${({ normal }) => (normal ? '30% 60%' : '1fr')};
  }
`;

const StyledTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 50px;
  font-weight: 300;
  @media only screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

const StyledVideo = styled.div`
  display: flex;
  max-width: 760px;
  max-height: 420px;
  background-color: grey;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  > iframe {
    height: 420px;
    width: 760px;
  }

  @media only screen and (max-width: 768px) {
    > iframe {
      height: auto;
      min-height: 250px;
      height: 30%;
      width: 100%;
    }
  }
`;

const StyledRight = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 10rem;
  justify-content: end;
  align-items: center;
  margin-bottom: 2rem;
  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledLine = styled.div`
  display: hidden;
  @media only screen and (min-width: 768px) {
    position: absolute;
    border-top: 1px solid black;
    width: 220px;
    margin-right: 2rem;
    right: 46%;
  }
`;

const StyledDescription = styled.div`
  position: relative;
  margin-bottom: ${({ mb }) => (mb ? mb : '80px')};

  z-index: 100;
  ${({ color }) =>
    color === 'white'
      ? `
    color: white;
  `
      : 'color: black;'}

  p {
    font-size: ${({ normal }) => (normal ? '1.1rem' : '1.4rem')};
    font-weight: 400;
    line-height: 2.2rem;
    margin-top: -1rem;
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 110px;
    p {
      margin-bottom: 1rem;
      line-height: ${({ normal }) => (normal ? '2.2rem' : '3.5rem')};
      font-size: ${({ normal }) => (normal ? '1.2rem' : '2rem')};
      width: 80%;
    }
  }
`;
