// 1. `astro:content`からユーティリティをインポート
import { z, defineCollection } from "astro:content";
// 2. コレクションを定義
const articleCollection = defineCollection({
  /* ... */
  type: "content",
  schema: ({ image }) =>
    z.object({
      isDraft: z.boolean(),
      title: z.string(),
      description: z.string(),
      tags: z.array(
        z.enum([
          "next-js",
          "css",
          "sass",
          "microsoft-clarity",
          "google-analytics",
          "astro",
          "vercel",
          "netlify",
          "jamstack",
          "partytown",
          "fontsource",
          "giscus",
          "google-adsense",
        ])
      ),
      publishedAt: z.date(),
      revisedAt: z.date().optional(),
      thumbnail: image(),
    }),
});

export const collections = {
  article: articleCollection,
};
