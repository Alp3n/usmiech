import styled from '@emotion/styled';
import { PrismicLink } from '@prismicio/react';
import { linkResolver } from '../prismicio';

export const LanguageSwitcher = ({ altLangs = [] }) => {
  return (
    <StyledUl>
      {altLangs.map((altLang, i) => (
        <li key={i} value={altLang.lang.slice(0, 2)}>
          <PrismicLink href={linkResolver(altLang)} locale={altLang.lang}>
            <span className='sr-only'>{altLang.lang.slice(0, 2)}</span>
          </PrismicLink>
        </li>
      ))}
    </StyledUl>
  );
};

export default LanguageSwitcher;

const StyledUl = styled.ul`
  list-style: none;
  text-transform: uppercase;
`;
