import styled from '@emotion/styled';
import { PrismicLink } from '@prismicio/react';

const MyLink = ({ field, children }) => {
  return (
    <StyledListElement>
      <StyledLink field={field}>{children}</StyledLink>
    </StyledListElement>
  );
};

export default MyLink;

const StyledListElement = styled.li`
  margin-left: 2rem;
`;

const StyledLink = styled(PrismicLink)`
  text-decoration: none;
  color: black;
  font-size: 1.2rem;

  &:link {
    color: black;
  }
  &:visited {
    color: black;
  }
  &:hover {
    color: grey;
  }
  &:active {
    color: black;
  }
`;
