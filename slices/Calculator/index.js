import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Price from './price';
import { PrismicRichText } from '@prismicio/react';

const mockDataFirst = [
  { first: 6, price: 10800 },
  { first: 10, price: 18000 },
  { first: 12, price: 21600 },
  { first: 20, price: 36000 },
  { first: 24, price: 43200 },
];

const mockDataSecond = [
  { rates: 0, interest: 0 },
  { rates: 12, interest: 0.06 },
  { rates: 24, interest: 0.12 },
  { rates: 36, interest: 0.18 },
  { rates: 48, interest: 0.24 },
  { rates: 60, interest: 0.3 },
];

const Calculator = ({ slice }) => {
  const [firstValues, setFirstValues] = useState(
    isJsonString(slice.primary.firstValuesData)
      ? JSON.parse(slice.primary.firstValuesData)
      : mockDataFirst
  );
  const [rates, setRates] = useState(
    isJsonString(slice.primary.ratesData)
      ? JSON.parse(slice.primary.ratesData)
      : mockDataSecond
  );
  const [selectedValue, setSelectedValue] = useState([firstValues[0], 'index']);
  const [selectedRate, setSelectedRate] = useState([rates[0], 'index']);
  const [price, setPrice] = useState('Wybierz wartości');

  const handleSelectValue = (value, index) => {
    setSelectedValue([value, index]);
  };

  const handleSelectRates = (value, index) => {
    setSelectedRate([value, index]);
  };

  function isJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  useEffect(() => {
    let numberOfRates = selectedRate[0].rates === 0 ? 1 : selectedRate[0].rates;
    let interest = selectedRate[0].interest;
    // console.log(interest, 'Interest');
    setPrice((selectedValue[0].price * (1 + interest)) / numberOfRates);
  }, [price, selectedValue, selectedRate, firstValues]);
  return (
    <StyledWrapper id={slice.primary.sectionId}>
      <PrismicRichText field={slice.primary.productTitle} />
      <StyledInputWrapper id='licowki'>
        <StyledSpan>
          <PrismicRichText field={slice.primary.firstDescription} />
        </StyledSpan>
        <StyledOptionsWrapper>
          {firstValues?.map((value, index) => (
            <React.Fragment key={value.first}>
              <StyledValueWrapper>
                <StyledValuesCircle
                  values={firstValues}
                  selectedValue={selectedValue}
                  index={index}
                  onClick={() => handleSelectValue(value, index)}
                ></StyledValuesCircle>
                <StyledValue>{value.first}</StyledValue>
              </StyledValueWrapper>
              {index === firstValues.length - 1 ? null : <StyledLine />}
            </React.Fragment>
          ))}
        </StyledOptionsWrapper>
      </StyledInputWrapper>
      <StyledInputWrapper id='ortodontist'>
        <StyledSpan>
          <PrismicRichText field={slice.primary.secondDescription} />
        </StyledSpan>
        <StyledOptionsWrapper>
          {rates.map((value, index) => (
            <React.Fragment key={value.rates}>
              <StyledValueWrapper key={value.rates}>
                <StyledRatesCircle
                  rates={rates}
                  selectedRate={selectedRate}
                  index={index}
                  onClick={() => handleSelectRates(value, index)}
                ></StyledRatesCircle>
                <StyledValue>{value.rates}</StyledValue>
              </StyledValueWrapper>
              {index === rates.length - 1 ? null : <StyledLine />}
            </React.Fragment>
          ))}
        </StyledOptionsWrapper>
      </StyledInputWrapper>
      <Price
        price={Math.round(price)}
        selectedRate={selectedRate}
        sumPriceLabel={slice.primary.sumPriceLabel}
        estimateInstallmentLabel={slice.primary.estimateInstallmentLabel}
      />
    </StyledWrapper>
  );
};

export default Calculator;
const StyledInputWrapper = styled.div`
  display: grid;
  scroll-margin-top: 15rem;
  gap: 3rem;
  @media only screen and (min-width: 768px) {
    font-size: 1.3rem;
    font-weight: 400;
    scroll-margin-top: 20rem;
    grid-template-columns: 30% 40%;
  }
`;
const StyledSpan = styled.span`
  font-weight: 400;
  line-height: 2.2rem;
  p {
    font-size: 1.3rem;
  }
`;

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1;
  row-gap: 3.5rem;
  margin-bottom: 3rem;

  @media only screen and (min-width: 768px) {
    margin-bottom: 5rem;
  }
`;

const StyledOptionsWrapper = styled.div`
  display: flex;
`;

const StyledValueWrapper = styled.div`
  display: grid;
  grid-template-columns: 1;
  gap: 16px;
  place-items: center;

  /* grid-template-columns: repeat(2, 1fr); */
`;

const StyledValuesCircle = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #a79797;
  border-radius: 100%;
  background-color: ${({ selectedValue, index, values }) =>
    selectedValue[0].first === values[index].first ? '#A79797' : 'transparent'};
  cursor: pointer;
`;

const StyledRatesCircle = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #a79797;
  border-radius: 100%;
  background-color: ${({ selectedRate, index, rates }) =>
    selectedRate[0].rates === rates[index].rates ? '#A79797' : 'transparent'};
  cursor: pointer;
`;

const StyledValue = styled.span`
  /* position: absolute; */
  /* left: 7px; */
`;

const StyledLine = styled.div`
  border-top: 1px solid #a79797;
  width: 100%;
  margin-top: 15px;
`;
