// @ts-check
import lightnetSveltiaAdmin from "@lightnet/sveltia-admin"
import { defineConfig } from "astro/config"
import lightnet from "lightnet"

export default defineConfig({
  /**
   * The base URL of your website. This is used for generating absolute URLs,
   * identifying external links, and ensuring consistent routing behavior.
   *
   * TODO: Replace with your actual site domain (e.g., https://your-site.example)
   */
  site: "https://your-site.example",

  integrations: [
    /**
     * Configuration for the LightNet integration.
     * This defines core settings such as title, logo, languages, and menu.
     */
    lightnet({
      /**
       * Title of the website. It appears in the browser tab and the header bar.
       */
      title: {
        en: "Your Digital Library",
        ne: "तपाईँको डिजिटल पुस्तकालय",
      },

      /**
       * Path to the logo displayed in the site header.
       * Place your logo file in the ./src/assets directory.
       * Supported formats: .svg, .png, .jpg, .webp — optimized automatically for performance.
       *
       * TODO: Update with your site's logo file path, or remove this field if no logo is needed.
       */
      logo: { src: "./src/assets/OMlogo.svg" },

      /**
       * Defines the supported languages for the site, covering both
       * site (UI) and content languages.
       */
      languages: [
        {
          code: "en", // BCP 47 code for English
          label: {
            en: "English",
            ne: "अङ्ग्रेजी",
          }, // Display name in the language selector
          isDefaultSiteLanguage: true, // Sets English as the default site language
        },
        {
          code: "ne", // BCP 47 code for Nepali
          label: {
            en: "Nepali",
            ne: "नेपाली",
          }, // Display name in the language selector
          isSiteLanguage: true, // Enables Nepali as an available site language
        },
      ],

      /**
       * Favicon settings for browser tabs, bookmarks, and shortcuts.
       */
      favicon: [
        { href: "favicon.svg" }, // SVG format (scales well on modern browsers)
      ],

      /**
       * Main navigation menu configuration.
       */
      mainMenu: [
        {
          href: "/",
          label: {
            en: "Home",
            ne: "गृहपृष्ठ",
          },
        },
        {
          href: "/media",
          label: {
            en: "Search",
            ne: "खोज्नुहोस्",
          },
        },
        {
          href: "/about",
          label: {
            en: "About",
            ne: "हाम्रो बारेमा",
          },
        },
        {
          href: "https://lightnet.community",
          label: {
            en: "LightNet",
            ne: "LightNet",
          },
          requiresLocale: false,
        },
      ],

      /**
       * Configuration for the search page.
       */
      searchPage: {
        filterByLocale: true,
      },

      credits: true,
      footerText: {
        en: "© {{year}} Your Digital Library",
        ne: "© {{year}} तपाईँको डिजिटल पुस्तकालय",
      },
      footerLinks: [
        {
          href: "/about",
          label: {
            en: "About",
            ne: "हाम्रो बारेमा",
          },
        },
      ],
    }),

    lightnetSveltiaAdmin({}),
  ],
})
