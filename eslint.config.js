import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import json from "@eslint/json";
import markdownPlugin from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";
import astro from "eslint-plugin-astro";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  tseslint.configs.recommended,
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.md"],
    plugins: {
      markdownPlugin,
    },
    extends: ["markdownPlugin/recommended"],
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
  },
  {
    files: ["**/*.astro"],
    plugins: {
      astro,
    },
    extends: ["astro/all"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
]);
