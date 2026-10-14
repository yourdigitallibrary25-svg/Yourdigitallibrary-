import { lightnetStyles } from "lightnet/tailwind.config.ts";

/**
 * Tailwind CSS configuration for LightNet projects.
 *
 * This file customizes the visual design of your LightNet site by extending
 * Tailwind with a preset configuration provided by LightNet. The preset includes
 * default styles, component theming, and best practices to help you maintain a consistent UI.
 *
 * You can further personalize the look and feel by specifying options like your site's
 * primary color or extending the theme as needed.
 *
 * @type {import('tailwindcss').Config}
 */
export default {
  presets: [
    /**
     * Applies the official LightNet Tailwind CSS preset.
     * This ensures a consistent and accessible design system across all components.
     */
    lightnetStyles({
      /**
       * Primary color configuration.
       *
       * The primary color is applied to various UI elements, such as buttons,
       * links, and hover states. Choose a color that aligns with your brand
       * and provides good contrast against a white background for accessibility.
       *
       * TODO: Replace with your site's brand color (e.g., #1D4ED8 for blue).
       */
      primaryColor: "#111827", // Dark gray
    }),
  ],
};
