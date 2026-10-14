// @ts-check
import lightnetSveltiaAdmin from "@lightnet/sveltia-admin"
import { defineConfig } from "astro/config"
import lightnet from "lightnet"

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  site: "https://sk8-ministries.pages.dev",
  integrations: [
    lightnet({
      title: {
        en: "Your Digital Library",
        ne: "तपाईंको डिजिटल पुस्तकालय",
        ar: "Your Digital Library",
      },
      logo: { src: "./src/assets/OMlogo.svg" },
      disallowSearchIndexing: true,
      favicon: [
        { href: "./src/assets/OMlogo.svg", sizes: "32x32" },
        { href: "./src/assets/OMlogo.svg" },
      ],
      searchPage: {
        filterByLocale: true,
      },
      languages: [
        {
          code: "en",
          label: {
            en: "English",
            ne: "अङ्ग्रेजी",
            ar: "الإنجليزية",
          },
          isDefaultSiteLanguage: true,
        },
        {
          code: "ne",
          label: {
            en: "Nepali",
            ne: "नेपाली",
            ar: "النيبالية",
          },
          isSiteLanguage: true,
        },
        {
          code: "ar",
          label: {
            en: "Arabic",
            ne: "अरबी",
            ar: "العربية",
          },
          isSiteLanguage: true,
        },
      ],
      mainMenu: [
        {
          href: "/",
          label: {
            en: "Home",
            ne: "गृहपृष्ठ",
            ar: "الصفحة الرئيسية",
          },
        },
        {
          href: "/media",
          label: {
            en: "Search",
            ne: "खोज्नुहोस्",
            ar: "بحث",
          },
        },
      ],
      credits: false,
      footerText: {
        en: "© {{year}} Your Digital Library",
        ne: "© {{year}} तपाईंको डिजिटल पुस्तकालय",
        ar: "© {{year}} Your Digital Library",
      },
      footerLinks: [
        {
          href: "/about",
          label: {
            en: "About",
            ne: "हाम्रो बारेमा",
            ar: "من نحن",
          },
        },
        {
          href: "/media",
          label: {
            en: "Media",
            ne: "मिडिया",
            ar: "وسائط",
          },
        },
      ],
    }),
    lightnetSveltiaAdmin({
      siteRootInRepo: "/playground/sk8-ministries",
      experimental: {
        useLanguagesCollection: true,
        showContentLabelField: false,
        showCommonIdField: false,
      },
    }),
  ],
})
