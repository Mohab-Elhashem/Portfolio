import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// custom hook to use in all sites for translate
export const useLanguage = () => {
    const { i18n } = useTranslation();

    useEffect(() => {
        const currentLang = i18n.language;
        const dir = currentLang.startsWith('ar') ? 'rtl' : 'ltr';

        document.documentElement.dir = dir;
        document.documentElement.lang = currentLang;
    }, [i18n.language]);

    const toggleLanguage = () => {
        const nextLang = i18n.language.startsWith('ar') ? 'en' : 'ar';
        i18n.changeLanguage(nextLang);
    };

    return {
        currentLang: i18n.language,
        isRtl: i18n.language.startsWith('ar'),
        toggleLanguage,
    };
};