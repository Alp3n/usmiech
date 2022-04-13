import styled from '@emotion/styled';

const Description = ({
  children,
  absolute,
  noBottomMargin,
  gridArea,
  borderLeft,
}) => (
  <StyledDescription
    absolute={absolute}
    noBottomMargin={noBottomMargin}
    gridArea={gridArea}
    borderLeft={borderLeft}
  >
    {children}
  </StyledDescription>
);

export default Description;

const StyledDescription = styled.p`
  margin-top: 0;
  margin-bottom: 2rem;
  grid-area: ${({ gridArea }) => (gridArea ? gridArea : null)};
  > p {
    margin-top: 0;
    margin-bottom: ${({ noBottomMargin }) => (noBottomMargin ? '0' : null)};
    font-weight: 300;
    line-height: 2rem;
  }
  ${({ borderLeft }) =>
    borderLeft
      ? `@media only screen and (max-width: 767px) {
    
      border-left: 1px solid black;
      margin-left: 5%;
      padding: 0 10%;
    }
  `
      : null}

  @media only screen and (min-width: 768px) {
    > p {
      font-size: 1.1rem;
    }
  }
`;
