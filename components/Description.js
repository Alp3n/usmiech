import styled from '@emotion/styled';

const Description = ({
  children,
  absolute,
  noBottomMargin,
  gridArea,
  borderLeft,
  marginBottom,
  width,
}) => (
  <StyledDescription
    absolute={absolute}
    noBottomMargin={noBottomMargin}
    gridArea={gridArea}
    borderLeft={borderLeft}
    marginBottom={marginBottom}
    width={width}
  >
    {children}
  </StyledDescription>
);

export default Description;

const StyledDescription = styled.span`
  overflow: hidden;
  margin-top: 0;
  grid-area: ${({ gridArea }) => (gridArea ? gridArea : null)};
  ${({ marginBottom }) =>
    marginBottom ? `margin-bottom: ${marginBottom};` : null}
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
    width: ${({ width }) => (width ? width : '90%')};
    > p {
      font-size: 1.2rem;
    }
  }
`;
