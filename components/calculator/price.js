import styled from '@emotion/styled';

const Price = ({ price }) => (
  <>
    <StyledWrapper>
      <StyledText>Przybliżona rata</StyledText>
      <StyledPrice>{price} zł</StyledPrice>
    </StyledWrapper>
    {/* <StyledLine /> */}
  </>
);

export default Price;

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: baseline;
  gap: 15px;
  /* padding-bottom: 2rem; */

  @media only screen and (min-width: 768px) {
    grid-template-columns: 30% 40%;
    gap: 3rem;
  }
`;
const StyledLine = styled.div`
  border-bottom: 1px solid black;
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 550px;
  }
`;
const StyledText = styled.span`
  font-weight: 300;
  font-size: 1.3rem;
  text-align: center;
`;
const StyledPrice = styled.div`
  text-align: center;
  font-weight: 300;
  font-size: 2rem;
`;
