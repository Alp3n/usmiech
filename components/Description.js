import styled from '@emotion/styled';

const Description = ({
  children,
  absolute,
  noBottomMargin,
  area,
  borderLeft,
  marginBottom,
  width,
}) => (
  <StyledDescription
    absolute={absolute}
    noBottomMargin={noBottomMargin}
    area={area}
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
  grid-area: ${({ area }) => (area ? area : null)};
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
    
    > p {
    font-size: 1.1rem;
    line-height: 30px;
    margin-bottom: 12px;
  }
  @media only screen and (min-width: 768px) {
    width: ${({ width }) => (width ? width : '90%')};
    > p {
      font-size: 1.1rem;
    }
  }
  @media only screen and (min-width: 1280px) {
    > p {
      font-size: 1.2rem;
      line-height: 2.2rem;
    }
  }
`;
