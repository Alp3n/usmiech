import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Price from './price';

const Calculator = ({
  monthsData,
  ratesData,
  priceData,
  title,
  firstDesc,
  secondDesc,
}) => {
  const [months, setMonths] = useState(monthsData);
  const [rates, setRates] = useState(ratesData);
  const [selectedMonth, setSelectedMonth] = useState([months[0], 'index']);
  const [selectedRate, setSelectedRate] = useState([rates[0], 'index']);
  const [price, setPrice] = useState('Wybierz wartości');
  const priceOfRate = priceData;

  const handleSelectMonths = (value, index) => {
    setSelectedMonth([value, index]);
  };

  const handleSelectRates = (value, index) => {
    setSelectedRate([value, index]);
  };

  useEffect(() => {
    let licowkiPrice = 500;
    let numberOfRates = selectedRate[0] === 0 ? 1 : selectedRate[0];
    setPrice((selectedMonth[0] * licowkiPrice) / numberOfRates);
  }, [price, priceOfRate, selectedMonth, selectedRate]);

  return (
    <StyledWrapper>
      <h1>{title}</h1>
      <StyledInputWrapper id='licowki'>
        <StyledSpan>{firstDesc}</StyledSpan>
        <StyledOptionsWrapper>
          {months?.map((value, index) => (
            <>
              <StyledValueWrapper>
                <StyledCircle
                  values={months}
                  selectedValue={selectedMonth}
                  index={index}
                  onClick={() => handleSelectMonths(value, index)}
                ></StyledCircle>
                <StyledValue>{value}</StyledValue>
              </StyledValueWrapper>
              {index === months.length - 1 ? null : <StyledLine />}
            </>
          ))}
        </StyledOptionsWrapper>
      </StyledInputWrapper>
      <StyledInputWrapper id='ortodontist'>
        <StyledSpan>{secondDesc}</StyledSpan>
        <StyledOptionsWrapper>
          {rates.map((value, index) => (
            <>
              <StyledValueWrapper>
                <StyledCircle
                  values={rates}
                  selectedValue={selectedRate}
                  index={index}
                  onClick={() => handleSelectRates(value, index)}
                ></StyledCircle>
                <StyledValue>{value}</StyledValue>
              </StyledValueWrapper>
              {index === rates.length - 1 ? null : <StyledLine />}
            </>
          ))}
        </StyledOptionsWrapper>
      </StyledInputWrapper>
      <Price price={Math.round(price)} />
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
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 2.2rem;
`;
const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1;
  row-gap: 2rem;
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

const StyledCircle = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #a79797;
  border-radius: 100%;
  background-color: ${({ selectedValue, index, values }) =>
    selectedValue[0] === values[index] ? '#A79797' : 'transparent'};
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
