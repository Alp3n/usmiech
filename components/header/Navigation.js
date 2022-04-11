import styled from '@emotion/styled';
import { PrismicRichText } from '@prismicio/react';
import MyLink from '../MyLink';

const Navigation = ({ menu, vertical }) => {
  return (
    <StyledNav>
      <StyledUl vertical={vertical}>
        {menu.data?.menuLinks.map((menuLink) => (
          <MyLink key={menuLink.link.id} field={menuLink.link}>
            <PrismicRichText field={menuLink.label} />
          </MyLink>
        ))}
      </StyledUl>
    </StyledNav>
  );
};

export default Navigation;

const StyledNav = styled.nav`
  flex-grow: 1;
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  ${({ vertical }) => (vertical ? 'flex-direction: column;' : null)}
`;
