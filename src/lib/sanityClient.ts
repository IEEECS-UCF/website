// src/lib/sanityClient.ts
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: "2023-05-03",
  // perspective: 'published' // Use 'published' for server-side fetching
  // token: import.meta.env.SANITY_API_READ_TOKEN, // Use if you added a token
});
