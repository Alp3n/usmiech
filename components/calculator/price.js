import styled from '@emotion/styled';

const Price = ({ price }) => (
  <StyledWrapper>
    <StyledText>Przybliżona rata</StyledText>
    <StyledPrice>{price} zł</StyledPrice>
  </StyledWrapper>
);

export default Price;

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1;
  gap: 15px;
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
