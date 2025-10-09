import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const CategorySchema = z.enum([
  "Internet",
  "Privacy",
  "Geensnor",
  "Politiek",
  "Bitcoins",
  "Vertier",
  "Handig",
  "Wielrennerij",
  "Muziek",
  "Tips",
  "Spullen",
  "Kunst",
  "Whisky",
  "Zeilen",
  "Klushoekje",
  "Privacy",
  "Security",
]);

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.date(),
    categories: z.array(CategorySchema).min(1),
  }),
});

export const collections = { blog };
