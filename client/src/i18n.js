import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next, reactI18nextModule } from "react-i18next";

// the translations
const resources = {
  fr: {
    translation: {
      languageCode: "fr",
      getStarted: "Commencer",
      about: "A propos",
      contact: "Contact",
      search: "Rechercher",
      profile: "Profile",
      privacy: "Confidentialité",
      terms: "Conditions",
      admin: "Admin",
      dashboard: "Dashboard",
      landingTitle: "Votre passerelle vers une assistance juridique experte.",
      landingSubtitle:
        "Nous sommes là pour vous aider à prendre soin de votre légalité avec le meilleur service, spécialement pour vous.",
      lawyerName: "Nom de l'avocat",
      place: "Place",
      mainPlaces: "Les endroits principaux",
      mainCategories: "Les catégories principales",
      ourServices: "Nos services",
      ourServicesSubtitle: "Nous fournissons les meilleurs services pour vous.",
      advancedSearch: "Recherche avancée",
      advancedSearchSubtitle: "Trouvez le meilleur avocat pour vous.",
      verifiedProfessionals: "Professionnels vérifiés",
      verifiedProfessionalsSubtitle:
        "Nous vérifions tous les avocats pour vous.",
      seamlessExperience: "Expérience transparente",
      seamlessExperienceSubtitle:
        "Nous vous fournissons la meilleure expérience.",
      topRatedLawyers: "Avocats les mieux notés",
      seeAll: "Voir tout",
      footerText:
        "Tous droits réservés. © 2023 DZ-Mouhami. Votre source de confiance pour l'expertise juridique en Algérie.",
      getStartedText: "Vous voulez exceller votre carrière en tant qu'avocat?",
      getStartedTextSubtitle:
        "Maîtrisez les compétences essentielles, dominez la salle d'audience et propulsez votre succès dans le monde juridique avec détermination et stratégie.",
    },
  },
  ar: {
    translation: {
      languageCode: "ar",
      getStarted: "ابدأ الآن",
      about: "حول",
      contact: "اتصل",
      search: "بحث",
      profile: "الملف الشخصي",
      privacy: "الخصوصية",
      terms: "الشروط",
      admin: "مشرف",
      dashboard: "لوحة القيادة",
      landingTitle: "بوابتك إلى المساعدة القانونية المتخصصة.",
      landingSubtitle:
        "نحن هنا لمساعدتك في العناية بقانونيتك مع أفضل الخدمات ، خصيصًا لك.",
      lawyerName: "اسم المحامي",
      place: "مكان",
      mainPlaces: "الأماكن الرئيسية",
      mainCategories: "الفئات الرئيسية",
      ourServices: "خدماتنا",
      ourServicesSubtitle: "نحن نقدم أفضل الخدمات لك.",
      advancedSearch: "بحث متقدم",
      advancedSearchSubtitle: "العثور على أفضل محامي لك.",
      verifiedProfessionals: "محترفون معتمدون",
      verifiedProfessionalsSubtitle: "نحن نتحقق من جميع المحامين لك.",
      seamlessExperience: "تجربة سلسة",
      seamlessExperienceSubtitle: "نحن نقدم لك أفضل تجربة.",
      topRatedLawyers: "أفضل المحامين تقييما",
      seeAll: "عرض الكل",
      footerText:
        "جميع الحقوق محفوظة. © 2023 DZ-Mouhami. مصدرك الموثوق للخبرة القانونية في الجزائر.",
      getStartedText: "هل تريد تحسين مهنتك كمحامي؟",
      getStartedTextSubtitle:
        "اكتسب المهارات الأساسية ، وتفوق في قاعة المحكمة ، وقم بتعزيز نجاحك في العالم القانوني بالإصرار والاستراتيجية.",
    },
  },
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(detector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    initReactI18next: {
      fallbackLng: "fr",
    },
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
