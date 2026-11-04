import { defineCollection, z } from "astro:content"
import { LIGHTNET_COLLECTIONS } from "lightnet/content"

/**
 * Astro Content Collections Configuration for LightNet with Custom Extension.
 */
export const collections = {
  ...LIGHTNET_COLLECTIONS,
  media: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      slug: z.string(),
      mediaType: z.enum(["Audio", "Book", "Video"]),
      contentLanguage: z.string(),

      // 👇 Your custom parameter for other languages
      otherLanguages: z.array(z.string()).optional(),

      image: z.string(),
      content: z.array(z.any()),
      dateCreated: z.date().optional(),
      authors: z.array(z.string()).optional(),
      categories: z.array(z.string()).optional(),
      description: z.string().optional(),
    }),
  }),
}
