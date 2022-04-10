import styled from '@emotion/styled';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLine />
      <StyledContactGrid>
        <div>
          <div>sda</div>
          <div>dsa</div>
        </div>
      </StyledContactGrid>
      <StyledLine />
    </StyledFooter>
  );
};
export default Footer;
const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr min(115ch, calc(100% - 48px)) 1fr;
  grid-column-gap: 24px;
  margin: 2rem 0;
  > * {
    grid-column: 2;
  }

  .full-bleed {
    grid-column: 1 / -1;
    width: 100%;
  }
`;

const StyledLine = styled.div`
  width: 100%;
  border-top: 1px solid black;
  margin: 3rem 0;
`;

const StyledContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;
