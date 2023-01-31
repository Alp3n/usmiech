import { PrismicLink } from '@prismicio/react';
import { linkResolver } from '../prismicio';

const LangIcon = ({ lang }) => {
  const code = lang.substring(3).toLowerCase();

  return <span className={`fi fi-${code}`} />;
};

export const LanguageSwitcher = ({ altLangs = [] }) => {
  // console.log(altLangs);
  return (
    <ul>
      {altLangs.map((altLang, i) => (
        <li key={i}>
          <PrismicLink href={linkResolver(altLang)} locale={altLang.lang}>
            <span className='sr-only'>{altLang.lang}</span>
            <LangIcon lang={altLang.lang} />
          </PrismicLink>
        </li>
      ))}
    </ul>
  );
};

export default LanguageSwitcher;
