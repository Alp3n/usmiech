import styled from '@emotion/styled';

const Title = ({ children, absolute, size, gridArea }) => (
  <StyledTitle absolute={absolute} size={size} gridArea={gridArea}>
    {children}
  </StyledTitle>
);

export default Title;

const StyledTitle = styled.span`
  position: ${({ absolute }) => (absolute ? 'absolute' : 'relative')};
  bottom: 0;
  place-content: bottom;
  margin: 0;
  color: #000;
  place-self: baseline;
  z-index: 1000;
  margin: 2rem 0;
  grid-area: ${({ gridArea }) => (gridArea ? gridArea : null)};

  > h1 {
    font-size: ${({ size }) => (size === 'large' ? '1.8rem' : '3.5rem')};
    margin: 0;
    padding: 0;
    bottom: 50px;
  }

  > h2 {
    font-size: ${({ size }) => (size === 'large' ? '2rem' : '1.8rem')};
    line-height: 1.5;
    margin: 0;
  }
  @media only screen and (min-width: 767px) {
    > h1 {
      font-size: ${({ size }) => (size === 'large' ? '2rem' : '6rem')};
    }

    > h2 {
      font-size: ${({ size }) => (size === 'large' ? '2rem' : '1.8rem')};
      line-height: 1.5;
    }
  }
`;
