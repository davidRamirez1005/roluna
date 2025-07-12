import { ref, provide, inject } from 'vue';
import es from './es.json';
import en from './en.json';

const LanguageSymbol = Symbol('language');

export const useLanguage = () => {
  // Leer el idioma desde localStorage o usar 'es' por defecto
  const storedLanguage = localStorage.getItem('language') || 'es';
  const language = ref(storedLanguage);
  const translations = ref(storedLanguage === 'es' ? es : en);

  const changeLanguage = (lang) => {
    language.value = lang;
    translations.value = lang === 'en' ? en : es;
    localStorage.setItem('language', lang); // Guardar el idioma en localStorage
    document.documentElement.setAttribute('lang', lang);
  };

  document.documentElement.setAttribute('lang', storedLanguage);
  provide(LanguageSymbol, { language, translations, changeLanguage });
};

export const useLanguageProvider = () => {
  const context = inject(LanguageSymbol);
  if (!context) {
    throw new Error('useLanguageProvider must be used within a provider');
  }
  return context;
};