import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().default('氫水科學'),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    author: z.string().default('H2 Water Lab'),
    draft: z.boolean().default(false),
    lang: z.enum(['zh', 'en']).default('zh'),
    evidenceLevel: z.enum(['strong', 'preliminary', 'insufficient', 'ineffective']).optional(),
    readingTime: z.number().optional(),
  }),
});

export const collections = { posts };
