import styled from '@emotion/styled';
import { PrismicRichText } from '@prismicio/react';

const Price = ({
  price,
  selectedRate,
  sumPriceLabel,
  estimateInstallmentLabel,
}) => {
  console.log('RATA: ', selectedRate);
  return (
    <>
      <StyledWrapper>
        <StyledText>
          <PrismicRichText
            components={{
              paragraph: ({ children }) => <StyledText>{children}</StyledText>,
            }}
            field={
              selectedRate[0].rates === 0
                ? sumPriceLabel
                : estimateInstallmentLabel
            }
          />
        </StyledText>
        <StyledPrice>{price} zł</StyledPrice>
      </StyledWrapper>
    </>
  );
};

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

const StyledText = styled.p`
  font-weight: 400;
  font-size: 1.3rem;
  text-align: center;
  margin: 0;
  padding: 0;
`;
const StyledPrice = styled.div`
  text-align: center;
  font-weight: 300;
  font-size: 2rem;
  width: fit-content;
`;
