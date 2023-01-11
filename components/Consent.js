import React, { useEffect, useState } from 'react';
import { setCookie, hasCookie } from 'cookies-next';
import styles from './consent.module.css';

import { PrismicLink } from '@prismicio/react';
function Consent({ privacyLink, privacyLabel }) {
  const [consent, setConsent] = useState(true);
  useEffect(() => {
    setConsent(hasCookie('GoogleAnalytics'));
    setConsent(hasCookie('googleAnalytics'));
  }, []);

  const acceptCookie = () => {
    setConsent(true);
    setCookie('GoogleAnalytics', 'true', { maxAge: 60 * 60 * 24 * 365 });
    setCookie('googleAnalytics', 'true', { maxAge: 60 * 60 * 24 * 365 });
    gtag('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
    });
  };
  const closeP = () => {
    setConsent(true);
  };
  const denyCookie = () => {
    setConsent(true);
    setCookie('GoogleAnalytics', 'false', { maxAge: 60 * 60 * 24 * 365 });
    setCookie('googleAnalytics', 'false', { maxAge: 60 * 60 * 24 * 365 });
  };
  if (consent === true) {
    return null;
  }

  return (
    <div>
      <h1>Cenimy Twoją prywatność</h1>
      <p>
        {`Używamy opcjonalne cookies w celach analizy ruchu na stronie.
                Klikając "Akceptuj", zgadzasz się na ich używanie.`}
      </p>
      <PrismicLink href='/'>Polityka prywatności</PrismicLink>
      <PrismicLink field={privacyLink}>Polityka prywatności</PrismicLink>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.primary}
          onClick={() => {
            acceptCookie();
          }}
        >
          Akceptuj
        </button>
        <button className={styles.secondary} onClick={(e) => denyCookie()}>
          Odrzuć
        </button>
        <button
          className={styles.plain}
          onClick={(e) => {
            closeP();
          }}
        >
          Zamknij
        </button>
      </div>
    </div>
  );
}
export default Consent;
