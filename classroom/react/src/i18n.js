import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json"
import ru from "./locales/ru/translation.json"
import hy from "./locales/hy/translation.json"

i18next
.use(initReactI18next)
.init({
    resources: {
        en: {
            translation: en
        },
        ru: {
            translation: ru
        },
        hy: {
            translation: hy
        }
    },
    lng: localStorage.getItem("language") || "en",
    interpolation: {
        escapeValue: false
    }
})