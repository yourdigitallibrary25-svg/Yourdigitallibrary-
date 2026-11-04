import { z } from "astro/zod"
import type { SchemaContext } from "astro:content"
import { reference } from "astro:content"

import { translationMapSchema } from "../../i18n/translation-map-schema"
import { imageSchema } from "../astro-image"

/**
 * Media Item Schema Base (without refine to prevent Zod v4 extension errors)
 */
export const mediaItemSchemaBase = z.object({
  commonId: z.string().optional(),
  title: z.string(),
  type: reference("media-types"),
  description: z.string().optional(),
  authors: z.array(z.string()).nullish(),
  dateCreated: z.iso.date(),
  categories: z.array(reference("categories")).nullish(),
  language: z.string().nonempty(),
  otherLanguages: z.array(z.string()).optional(),
  image: imageSchema,
  content: z
    .array(
      z.object({
        type: z.enum(["upload", "link"]),
        url: z.string(),
        label: translationMapSchema.optional(),
      }),
    )
    .min(1),
})

/**
 * Media Item Schema with refinement applied
 */
export const mediaItemSchema = mediaItemSchemaBase.superRefine((data, ctx) => {
  if (data.otherLanguages && data.otherLanguages.includes(data.language)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Other languages cannot include the primary content language.",
      path: ["otherLanguages"],
    })
  }
})

/**
 * MediaItemSchema above defines the shape of a media item.
 * We need this function to accept the astro content's image function that
 * is available inside defineCollection.
 */
export const createMediaItemSchema = ({ image }: SchemaContext) =>
  mediaItemSchemaBase
    .extend({
      image: image(),
    })
    .superRefine((data, ctx) => {
      if (data.otherLanguages && data.otherLanguages.includes(data.language)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Other languages cannot include the primary content language.",
          path: ["otherLanguages"],
        })
      }
    })

export const mediaItemEntrySchema = z.object({
  id: z.string(),
  collection: z.literal("media"),
  data: mediaItemSchema,
})

export type MediaItemEntry = z.infer<typeof mediaItemEntrySchema>
