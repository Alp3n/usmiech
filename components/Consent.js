import React, { useEffect, useState } from 'react';
import { setCookie, hasCookie } from 'cookies-next';

import { PrismicLink, PrismicRichText } from '@prismicio/react';
import styled from '@emotion/styled';

function Consent({ cookies }) {
  const [consent, setConsent] = useState(true);
  useEffect(() => {
    setConsent(hasCookie('googleAnalytics'));
  }, []);

  const acceptCookie = () => {
    setConsent(true);
    setCookie('googleAnalytics', 'true', { maxAge: 60 * 60 * 24 * 365 });
    gtag('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
    });
  };
  const close = () => {
    setConsent(true);
  };
  const denyCookie = () => {
    setConsent(true);
    setCookie('googleAnalytics', 'false', { maxAge: 60 * 60 * 24 * 365 });
  };
  if (consent === true) {
    return null;
  }

  return (
    <StyledWrapper className='full-bleed'>
      <StyledInside>
        <PrismicRichText field={cookies.data.title} />
        <PrismicRichText field={cookies.data.text} />

        {/* <PrismicLink field={cookies.data.privacyLink}>
          {cookies.data.privacyLabel}
        </PrismicLink> */}
        <StyledButtonWrapper>
          <StyledButton
            onClick={() => {
              acceptCookie();
            }}
            color='black'
            primary
          >
            {cookies.data.acceptButtonLabel}
          </StyledButton>
          <StyledButton onClick={() => denyCookie()} color='black'>
            {cookies.data.denyButtonLabel}
          </StyledButton>
          <StyledButton
            onClick={() => {
              close();
            }}
            color='black'
          >
            {cookies.data.closeButtonLabel}
          </StyledButton>
        </StyledButtonWrapper>
      </StyledInside>
    </StyledWrapper>
  );
}
export default Consent;

const StyledWrapper = styled.div`
  position: sticky;
  bottom: 0;
  display: grid;
  padding: 2rem 0;
  grid-template-columns: 1fr min(135ch, calc(100% - 48px)) 1fr;
  grid-column-gap: 24px;
  height: auto;
  width: 100%;
  background: #f0f0f0;
  z-index: 9999;

  h1 {
    margin: 0;
  }

  > * {
    grid-column: 2;
  }
  .full-bleed {
    grid-column: 1 / -1;
    grid-template-columns: 1fr min(135ch, calc(100% - 98px)) 1fr;
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1564px) {
  }
`;
const StyledInside = styled.div`
  display: grid;
  gap: 1rem;
`;
const StyledButtonWrapper = styled.div`
  display: grid;
  gap: 1.5rem;
  @media only screen and (min-width: 768px) {
    grid-gap: 2rem;
    grid-template-columns: 30% repeat(2, 20%);
  }
  @media only screen and (min-width: 1264px) {
    grid-template-columns: 30% repeat(2, 15%);
    grid-gap: 10rem;
  }
`;

const StyledButton = styled.button`
  text-decoration: none;
  align-items: center;
  border: ${({ primary, color }) =>
    primary ? '1px solid black' : color ? `1px solid ${color}` : null};
  background: ${({ primary }) => (primary ? 'black' : null)};
  padding: 6px 32px;
  border-radius: 32px;
  width: 100%;
  height: 48px;
  z-index: 100;
  font-size: ${({ size }) => (size ? size : '1.1rem')};
  grid-area: ${({ area }) => (area ? area : null)};
  color: ${({ primary, color }) =>
    primary ? 'white' : color ? color : 'black'};
  &:link {
    color: ${({ primary, color }) =>
      primary ? 'white' : color ? color : 'black'};
  }
  &:visited {
    color: ${({ primary, color }) =>
      primary ? 'white' : color ? color : 'black'};
  }
  &:hover {
    border: ${({ primary, color }) =>
      primary
        ? '1px solid black'
        : color === 'white'
        ? '1px solid black'
        : '1px solid black'};
    background-color: ${({ primary, color }) =>
      primary ? 'transparent' : color === 'white' ? 'black' : 'black'};
    color: ${({ primary, color }) =>
      primary ? 'black' : color === 'white' ? 'white' : 'white'};
    cursor: pointer;
  }
  &:active {
    color: ${({ color }) => (color ? color : 'black')};
  }
  p {
    margin: 8px 0;
  }

  @media only screen and (min-width: 768px) {
    font-size: ${({ size }) => (size ? size : '1.3rem')};
  }
`;
