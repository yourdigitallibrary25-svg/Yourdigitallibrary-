import { lightnetStyles } from "lightnet/tailwind.config.ts"

/**
 * @type {import('tailwindcss').Config}
 */
export default {
  darkMode: "class",
  presets: [
    lightnetStyles({
      primaryColor: "#14004B",
    }),
  ],
}
