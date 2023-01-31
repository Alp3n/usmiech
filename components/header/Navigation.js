import styled from '@emotion/styled';
import { PrismicRichText } from '@prismicio/react';
import MyLink from '../MyLink';

const Navigation = ({ menu, vertical, margin, bordertop }) => {
  // console.log(menu.data.menuLinks);
  return (
    <StyledNav bordertop={bordertop}>
      <StyledUl vertical={vertical} margin={margin}>
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
  display: flex;
  flex-grow: 1;
  ${({ bordertop }) =>
    bordertop
      ? 'border-top: 1px solid #f0f0f0; padding-top: 0.5rem; margin-top: 1rem;'
      : null}
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  ${({ vertical }) =>
    vertical
      ? `flex-direction: column; > li {
      margin-bottom: 8px;
      
    }`
      : null}

  @media only screen and (max-width: 768px) {
    padding: 1rem 0 1.5rem 0;
    gap: 16px;
    ${({ margin }) =>
      margin
        ? `> li {
      margin: 0;
      text-align: center;
    }`
        : null}
  }
`;
