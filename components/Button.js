import { PrismicLink, PrismicText, PrismicRichText } from '@prismicio/react';
// import { Default, Mobile } from './MediaQueries';
import styled from '@emotion/styled';
import { Media } from './MediaQueries';

const Button = ({ link, label, color, area, size }) => {
  // if (normal) {
  return (
    <StyledBorderButton field={link} color={color} area={area} size={size}>
      <PrismicText field={label} />
    </StyledBorderButton>
  );
  /*   }
  return (
    <StyledLink field={link} color={color} area={area}>
      <PrismicText field={label} />
      {plain ? null : (
        <StyledMedia at='sm'>
          <StyledLine />
        </StyledMedia>
      )}
    </StyledLink>
  ); */
};
export default Button;

const StyledLink = styled(PrismicLink)`
  position: relative;
  display: flex;
  text-decoration: none;
  align-items: center;
  grid-area: ${({ area }) => (area ? area : null)};
  z-index: 100;
  font-size: 1.1rem;
  ${({ plain }) => (plain ? 'width: fit-content;' : null)}
  p {
    margin: 8px 1rem 8px 0;
  }

  &:link {
    color: ${({ color }) => (color ? color : 'black')};
  }
  &:visited {
    color: ${({ color }) => (color ? color : 'black')};
  }
  &:hover {
    color: ${({ color }) => (color === 'white' ? 'black' : 'white')};
  }
  &:active {
    color: ${({ color }) => (color === 'white' ? 'black' : 'white')};
  }

  ${({ plain }) =>
    plain
      ? `&:link {
    color: white;
  }
  &:visited {
    color: white;
  }
  &:hover {
    color: white;
  }
  &:active {
    color: white;
  }`
      : null}

  @media only screen and (min-width: 764px) {
    border: 1px solid black;
    /*   border: ${({ color }) =>
      color ? `1px solid ${color}` : `1px solid black`}; */
    padding: 6px 32px;
    border-radius: 32px;
    width: fit-content;
    p {
      font-size: 1.2rem;
      margin: 8px 0;
    }

    &:hover {
      border: ${({ color }) =>
        color === 'white' ? '1px solid black' : '1px solid black'};
      background-color: ${({ color }) =>
        color === 'white' ? 'transparent' : 'black'};
      color: ${({ color }) => (color === 'white' ? 'black' : 'white')};
    }
  }
`;

const StyledBorderButton = styled(PrismicLink)`
  text-decoration: none;
  align-items: center;
  border: ${({ color }) => (color ? `1px solid ${color}` : null)};
  padding: 6px 32px;
  border-radius: 32px;
  width: fit-content;
  z-index: 100;
  font-size: ${({ size }) => (size ? size : '1.1rem')};
  grid-area: ${({ area }) => (area ? area : null)};

  &:link {
    color: ${({ color }) => (color ? color : 'black')};
  }
  &:visited {
    color: ${({ color }) => (color ? color : 'black')};
  }
  &:hover {
    border: ${({ color }) =>
      color === 'white' ? '1px solid black' : '1px solid black'};
    background-color: ${({ color }) => (color === 'white' ? 'black' : 'black')};
    color: ${({ color }) => (color === 'white' ? 'white' : 'white')};
  }
  &:active {
    color: ${({ color }) => (color ? color : 'black')};
  }
  p {
    margin: 8px 0;
  }

  @media only screen and (min-width: 768px) {
    font-size: ${({ size }) => (size ? size : '1.3rem')};
  }
`;
