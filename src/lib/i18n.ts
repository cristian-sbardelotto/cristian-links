import i18n from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import ptTranslations from '../locales/pt.json';
import enTranslations from '../locales/en.json';

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: { ...ptTranslations },
      },
      en: {
        translation: { ...enTranslations },
      },
    },
    fallbackLng: 'en',
  });

export default i18n;
