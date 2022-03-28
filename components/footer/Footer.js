import styled from '@emotion/styled';

const Footer = () => {
  return (
    <StyledFooter>
      <p>This is footer</p>
    </StyledFooter>
  );
};
export default Footer;
const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr min(115ch, calc(100% - 48px)) 1fr;
  grid-column-gap: 24px;
  > * {
    grid-column: 2;
  }

  background-color: grey;

  .full-bleed {
    grid-column: 1 / -1;
    width: 100%;
  }
`;
