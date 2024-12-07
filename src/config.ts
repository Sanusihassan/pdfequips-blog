import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Use a custom transformation for your specific date format
		pubDate: z.string().transform(str => new Date(str)),
		updatedDate: z.string().transform(str => new Date(str)).optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog };