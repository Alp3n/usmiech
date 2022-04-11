import styled from '@emotion/styled';
import Navigation from './Navigation';

const Menu = ({ menu }) => {
  return (
    <StyledMenu>
      <Navigation menu={menu} vertical />
    </StyledMenu>
  );
};

export default Menu;

const StyledMenu = styled.div`
  margin: 0;
  position: absolute;
  top: 4rem;
  left: -1.5rem;
  background-color: white;
  width: 100vw;
  box-shadow: 1px 4px 4px grey;
`;
