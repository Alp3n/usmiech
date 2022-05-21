import styled from '@emotion/styled';

const Title = ({
  children,
  absolute,
  size,
  area,
  white,
  marginBottom,
  line,
  story,
}) => (
  <StyledTitle
    absolute={absolute}
    size={size}
    area={area}
    white={white}
    marginBottom={marginBottom}
    line={line}
    story={story}
  >
    {children}
  </StyledTitle>
);

export default Title;

const StyledTitle = styled.span`
  position: ${({ absolute }) => (absolute ? 'absolute' : 'relative')};
  display: grid;
  ${({ line }) => (line ? 'grid-template-columns: auto 1fr;' : null)};
  width: fit-content;
  bottom: 0;
  place-content: bottom;
  margin: 0;
  color: ${({ white }) => (white === 'white' ? '#fff' : '#000')};
  place-self: baseline;
  z-index: 1000;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : '0')};

  grid-area: ${({ area }) => (area ? area : null)};

  > h1 {
    font-size: ${({ size }) => (size ? size : '3.5rem')};
    margin: 0;
    padding: 0;
    bottom: 50px;
    font-weight: 300;
    width: fit-content;
  }

  > h2 {
    font-size: ${({ size }) => (size ? size : '2rem')};
    line-height: 1.5;
    margin: 0;
    width: fit-content;
    font-weight: 300;
  }
  @media only screen and (min-width: 767px) {
    ${({ line }) => (line ? 'grid-template-columns: auto 1fr;' : null)};
    ${({ story }) => (story === 'Annie' ? 'margin-bottom: 0.5rem;' : null)}
    ${({ story }) => (story === 'Viola' ? 'margin-bottom: 0.5rem;' : null)}
    ${({ story }) => (story === 'Karolina' ? 'margin-bottom: 0.5rem;' : null)}
    > h1 {
      font-size: ${({ size }) => (size ? size : '6.5rem')};
      line-height: ${({ size }) => (size === '4rem' ? '2' : '1.5')};
      line-height: 1;
      width: fit-content;
    }

    > h2 {
      font-size: ${({ size }) => (size ? size : '3rem')};
      line-height: ${({ size }) => (size === '4rem' ? '1.3' : '1.5')};
      width: fit-content;
      font-weight: 300;
    }
  }
`;
