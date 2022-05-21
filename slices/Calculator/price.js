import styled from '@emotion/styled';

const Price = ({ price }) => (
  <>
    <StyledWrapper>
      {/* <StyledFlex> */}
      <StyledText>Przybliżona rata</StyledText>
      <StyledPrice>{price} zł</StyledPrice>
      {/* </StyledFlex> */}
    </StyledWrapper>
    {/* <StyledLine /> */}
  </>
);

export default Price;

const StyledWrapper = styled.div`
  position: relative;
  display: grid;
  place-items: baseline;
  padding-bottom: 2rem;
  gap: 1rem;
  &:before {
    content: '';
    position: absolute;
    /* left: 50px; */
    bottom: 0;
    width: 100%;
    border-bottom: 1px solid black;
  }
  @media only screen and (min-width: 768px) {
    grid-template-columns: 30% 40%;
    gap: 3rem;
    &:before {
      content: '';
      position: absolute;
      /* left: 50px; */
      bottom: 0;
      width: 45%;
      border-bottom: 1px solid black;
    }
  }
`;

const StyledFlex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid black;
  /* padding-bottom: 2rem; */

  @media only screen and (min-width: 768px) {
    /* grid-template-columns: 30% 40%; */
    /* gap: 3rem; */
  }
`;

const StyledText = styled.span`
  font-weight: 400;
  font-size: 1.3rem;
  text-align: center;
`;
const StyledPrice = styled.div`
  text-align: center;
  font-weight: 300;
  font-size: 2rem;
  width: fit-content;
`;
