import { defineCollection, reference, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
		githubLink: z.string(),
		credit: z
		.string()
		.optional(),
		liveLink: z
		.string()
		.optional(),
		relatedPosts: z.array(reference('blog')).optional(),
	}),
});

export const collections = { blog };
