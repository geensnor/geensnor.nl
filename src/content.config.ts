import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

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
  "Security",
]);

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z
    .object({
      title: z.string(),
      author: z.enum(["Joris", "Erik", "ChatGPT"]),
      date: z.date(),
      slug: z.string().optional(),
      categories: z.array(CategorySchema).min(1),
      mastodonStatusId: z.string().optional().meta({
        description:
          "Mastodon status id om reacties onder Geensnor bericht te tonen.",
      }),
    })
    .strict(),
});

export const collections = { blog };
