// src/lib/sanityClient.ts
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "j1xlwjt0",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});
