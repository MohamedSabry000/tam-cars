import i18n, { init } from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: init.LanguageDetector ,
    interpolation: {
      escapeValue: false,
    },
    initImmediate: true,
    reloadOnLanguageChange: true,
  });

export default i18n;