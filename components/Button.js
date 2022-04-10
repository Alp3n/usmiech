import { PrismicLink, PrismicText, PrismicRichText } from '@prismicio/react';
import { Default, Mobile } from './MediaQueries';
import styled from '@emotion/styled';

const Button = ({ link, label, plain, gridArea }) => {
  return (
    <>
      <StyledLink field={link} plain={plain} gridArea={gridArea}>
        <p field={label}>{label.toString()}</p>
        {plain ? null : (
          <Mobile>
            <StyledLine />
          </Mobile>
        )}
      </StyledLink>
    </>
  );
};
export default Button;

const StyledLink = styled(PrismicLink)`
  display: flex;
  /* width: fit-content; */
  text-decoration: none;
  justify-content: center;
  align-items: center;
  grid-area: ${({ gridArea }) => (gridArea ? gridArea : null)};
  p {
    margin: 8px 1rem 8px 0;
  }

  &:link {
    color: ${({ plain }) => (plain ? 'white' : 'black')};
  }
  &:visited {
    color: ${({ plain }) => (plain ? 'white' : 'black')};
  }
  &:hover {
    color: ${({ plain }) => (plain ? 'white' : 'black')};
  }
  &:active {
    color: ${({ plain }) => (plain ? 'white' : 'black')};
  }

  @media only screen and (min-width: 764px) {
    border: 1px solid black;
    padding: 2px 24px;
    border-radius: 32px;
    width: fit-content;
    p {
      margin: 8px 0;
    }

    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

const StyledLine = styled.div`
  border-top: 1px solid black;
  width: 100%;
`;
