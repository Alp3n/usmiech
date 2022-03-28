import styled from '@emotion/styled';

const Description = ({ children, absolute }) => (
  <StyledDescription absolute={absolute}>{children}</StyledDescription>
);

export default Description;

const StyledDescription = styled.span`
  margin-top: 0;
  margin-bottom: 2rem;
  p {
    margin-top: 0;
    font-weight: 300;
    line-height: 2rem;
    text-transform: capitalize;
  }
`;
