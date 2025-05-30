import { ChevronRightIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  function toggleLanguage() {
    const newLanguage = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLanguage);
  }

  return (
    <p
      onClick={toggleLanguage}
      className='group -mt-3 flex cursor-pointer items-center gap-1 underline-offset-4 hover:underline'
    >
      {i18n.language}

      <ChevronRightIcon
        size={14}
        className='transition-transform group-hover:translate-x-1'
      />
    </p>
  );
}
