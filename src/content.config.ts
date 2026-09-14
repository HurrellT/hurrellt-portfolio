import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    img: z.string(),
    description: z.string(),
    link: z.string().url(),
    sourcecode: z.string().url(),
    linkAvailable: z.boolean(),
    sourcecodeAvailable: z.boolean(),
  }),
});

const personalProjects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/personalProjects" }),
  schema: z.object({
    title: z.string(),
    img: z.string(),
    description: z.string(),
    link: z.string().url(),
    sourcecode: z.string().url(),
    linkAvailable: z.boolean(),
    sourcecodeAvailable: z.boolean(),
  }),
});

const jobs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/jobs" }),
  schema: z.object({
    name: z.string(),
  }),
});

export const collections = { projects, jobs, personalProjects };
