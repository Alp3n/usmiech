import styled from '@emotion/styled';

const Title = ({
  children,
  absolute,
  size,
  gridArea,
  white,
  noBottomMargin,
}) => (
  <StyledTitle
    absolute={absolute}
    size={size}
    gridArea={gridArea}
    white={white}
    noBottomMargin={noBottomMargin}
  >
    {children}
  </StyledTitle>
);

export default Title;

const StyledTitle = styled.span`
  position: ${({ absolute }) => (absolute ? 'absolute' : 'relative')};
  bottom: 0;
  place-content: bottom;
  margin: 0;
  color: ${({ white }) => (white === 'white' ? '#fff' : '#000')};
  place-self: baseline;
  z-index: 1000;
  margin-bottom: ${({ noBottomMargin }) => (noBottomMargin ? '0' : '2rem')};
  grid-area: ${({ gridArea }) => (gridArea ? gridArea : null)};

  > h1 {
    font-size: ${({ size }) => (size ? size : '3.5rem')};
    margin: 0;
    padding: 0;
    bottom: 50px;
    font-weight: 300;
  }

  > h2 {
    font-size: ${({ size }) => (size ? size : '2rem')};

    line-height: 1.5;
    margin: 0;
  }
  @media only screen and (min-width: 767px) {
    margin-bottom: 2rem;
    > h1 {
      font-size: ${({ size }) => (size ? size : '5vw')};
      /* font-weight: 200; */
    }

    > h2 {
      font-size: ${({ size }) => (size ? size : '2.2rem')};
      line-height: 1.5;
    }
  }
`;
