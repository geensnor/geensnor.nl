// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { copyFileSync } from "fs";
import pagefind from "astro-pagefind";
import path from "path";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ["@geensnor/tokens", "@fontsource-variable/work-sans"],
    },
  },
  base: "",
  site: "https://www.geensnor.nl",
  markdown: {
    shikiConfig: {
      theme: "material-theme-lighter",
    },
  },
  integrations: [
    pagefind(),
    mdx(),
    sitemap(),

    {
      name: "copy-favicon",
      hooks: {
        "astro:build:start": () => {
          // Even De Snor op z'n plek zetten zodat hij als favicon gebruikt kan worden
          const sourcePath = path.resolve(
            "node_modules/@geensnor/astro-componenten/assets/de-snor.svg",
          );
          const destPath = path.resolve("public/favicon.svg");
          copyFileSync(sourcePath, destPath);
        },
      },
    },
  ],
});
