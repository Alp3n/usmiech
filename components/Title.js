import styled from '@emotion/styled';

const Title = ({ children, absolute }) => (
  <StyledTitle absolute={absolute}>{children}</StyledTitle>
);

export default Title;

const StyledTitle = styled.span`
  position: ${({ absolute }) => (absolute ? 'absolute' : 'relative')};
  bottom: 0;
  place-content: bottom;
  padding: 2rem 0;
  color: #000;
  font-size: 1.4rem;
  h2 {
    margin: 0;
  }
`;
