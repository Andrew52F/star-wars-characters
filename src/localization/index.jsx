import i18n from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import  LanguageDetector from 'i18next-browser-languagedetector';
import resources from './locales';


const LocalizationProvider = ({children}) => {
  i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      fallbackLng: 'en',
      resources,
    });

    return (
      <I18nextProvider i18n={i18n}>
        { children }
      </I18nextProvider>
    )
}
export default LocalizationProvider;