import styled from '@emotion/styled';
import { PrismicRichText } from '@prismicio/react';
import MyLink from './MyLink';

const Navigation = ({ menu }) => {
  return (
    <StyledNav className='flex-grow mr-5'>
      <StyledUl>
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
`;
