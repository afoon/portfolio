import { defineCollection, z, reference } from "astro:content";

import { glob, file } from "astro/loaders";

// 3. Define your collection(s)
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    skills: z.array(z.string()),
    updatedDate: z.coerce.date().optional(),
    link: z.string().url().optional(),
    relatedPosts: z.array(reference('projects')).optional()
  }),
});

export const collections = { projects };
