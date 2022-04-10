import styled from '@emotion/styled';

const Description = ({ children, absolute, noBottomMargin, gridArea }) => (
  <StyledDescription
    absolute={absolute}
    noBottomMargin={noBottomMargin}
    gridArea={gridArea}
  >
    {children}
  </StyledDescription>
);

export default Description;

const StyledDescription = styled.span`
  margin-top: 0;
  margin-bottom: 2rem;
  place-self: self-end;
  grid-area: ${({ gridArea }) => (gridArea ? gridArea : null)};
  p {
    margin-top: 0;
    margin-bottom: ${({ noBottomMargin }) => (noBottomMargin ? '0' : null)};
    font-weight: 300;
    line-height: 2rem;
    text-transform: capitalize;
  }
`;
