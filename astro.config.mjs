// @ts-check
import { defineConfig } from "astro/config";
import rehypePrettyCode from "rehype-pretty-code";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

const rehypePrettyCodeOptions = {
  theme: "slack-dark",
  keepBackground: false,
};

// https://astro.build/config
export default defineConfig({
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
  },

  integrations: [mdx(), react()],
});