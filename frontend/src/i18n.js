// src/i18n.js
import { createI18n } from 'vue-i18n'

// Import your translations
import en from './locales/en.json'
import hi from './locales/hi.json'
import te from './locales/te.json'

// 🌐 Get saved language or fallback to English
const lang = localStorage.getItem('lang') || 'en'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: lang,          // 🔁 use saved language
  fallbackLocale: 'en',
  messages: {
    en,
    hi,
    te,
  },
})

export default i18n
