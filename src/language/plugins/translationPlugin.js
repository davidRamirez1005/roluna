import { useLanguageProvider  } from '../useLanguage';

export default {
    install(app) {
      app.mixin({
        computed: {
          translations() {
            const { translations } = useLanguageProvider();
            return translations;
          },
        },
        methods: {
          changeLanguage(lang) {
            const { changeLanguage } = useLanguageProvider();
            changeLanguage(lang);
          },
        },
      });
    },
  };