import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import EN_TRANSLATE from "./locales/en/translate";
import EN_MESSAGE from "./locales/en/message";
import VI_TRANSLATE from "./locales/vi/translate";
import VI_MESSAGE from "./locales/vi/message";

const resources = {
  en: { message: EN_MESSAGE, translation: EN_TRANSLATE },
  vi: { message: VI_MESSAGE, translation: VI_TRANSLATE },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigate"],
      lookupQuerystring: "lng",
      lookupLocalStorage: "lang",
      lookupCookie: "lang",
      caches: ["cookie", "localStorage"],
    },
    lng: "vi",
    fallbackLng: "vi",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
