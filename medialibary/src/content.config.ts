import { LIGHTNET_COLLECTIONS } from "lightnet/content"

/**
 * Astro Content Collections Configuration for LightNet.
 *
 * This file defines the content collections used in your LightNet project,
 * leveraging the built-in `LIGHTNET_COLLECTIONS` preset provided by LightNet.
 *
 * Content collections in Astro provide a schema-based way to structure and manage
 * different types of content — such as pages, posts, media, or configuration entries.
 * By using the LightNet preset, your project gains access to preconfigured collections
 * optimized for LightNet's features (e.g., localization and content validation).
 *
 * ✅ Recommended: Use the preset for quick setup and best practices.
 * 🔧 Optional: If you need custom content types or want to modify validation schemas,
 *              you can override or extend the default configuration by defining your
 *              own `collections` object following Astro's `defineCollection` API.
 *
 * Docs:
 * - Astro Content Collections: https://docs.astro.build/en/guides/content-collections/
 * - LightNet Schema Extensions: https://docs.lightnet.community/content/fundamentals/
 */
export const collections = LIGHTNET_COLLECTIONS;
