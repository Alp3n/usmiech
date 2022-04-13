import { PrismicLink, PrismicText, PrismicRichText } from '@prismicio/react';
// import { Default, Mobile } from './MediaQueries';
import styled from '@emotion/styled';
import { Media } from './MediaQueries';

const NewButton = ({ link, label, color, gridArea, plain, normal }) => {
  if (normal) {
    return (
      <StyledBorderButton field={link} color={color} gridArea={gridArea}>
        <PrismicText field={label} />
      </StyledBorderButton>
    );
  }
  return (
    <StyledLink field={link} color={color} gridArea={gridArea}>
      <PrismicText field={label} />
      {plain ? null : (
        <StyledMedia at='sm'>
          <StyledLine />
        </StyledMedia>
      )}
    </StyledLink>
  );
};
export default NewButton;

const StyledLink = styled(PrismicLink)`
  position: relative;
  display: flex;
  text-decoration: none;
  align-items: center;
  grid-area: ${({ gridArea }) => (gridArea ? gridArea : null)};
  z-index: 100;
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
    border: ${({ color }) =>
      color ? `1px solid ${color}` : `1px solid black`};
    padding: 6px 32px;
    border-radius: 32px;
    width: fit-content;
    p {
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

const StyledLine = styled.div`
  border-top: 1px solid black;
  width: calc(100% - 1rem);
  margin-left: 1rem;
`;

const StyledMedia = styled(Media)`
  width: 100%;
`;

const StyledBorderButton = styled(PrismicLink)`
  text-decoration: none;
  align-items: center;
  border: ${({ color }) => (color ? `1px solid ${color}` : null)};
  padding: 6px 32px;
  border-radius: 32px;
  width: fit-content;
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
    color: ${({ color }) => (color ? color : 'black')};
  }
  p {
    margin: 8px 0;
  }

  &:hover {
    border: ${({ color }) =>
      color === 'white' ? '1px solid black' : '1px solid black'};
    background-color: ${({ color }) =>
      color === 'white' ? 'transparent' : 'black'};
    color: ${({ color }) => (color === 'white' ? 'black' : 'white')};
  }
`;
