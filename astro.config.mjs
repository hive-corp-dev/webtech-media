// @ts-check
import { defineConfig } from "astro/config";
import rehypePrettyCode from "rehype-pretty-code";
import remarkLinkCard from "remark-link-card";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

const rehypePrettyCodeOptions = {
  theme: "slack-dark",
  keepBackground: false,
};

// https://astro.build/config
export default defineConfig({
  site: "https://webtech-media.jp/",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "./src/styles/_mixin.scss" as mixin;
          @use "./src/styles/_var.scss" as var;
          `,
        },
      },
    },
  },
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
    remarkPlugins: [
      [
        remarkLinkCard,
        {
          cache: true,
          shortenUrl: false,
        },
      ],
    ],
  },

  integrations: [mdx(), react(), sitemap()],
});
