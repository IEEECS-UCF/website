// src/components/PortableTextRenderer.tsx (NOTE: Not a React Component anymore!)
import { toHTML } from "@portabletext/to-html";
import type { PortableTextBlock } from "@portabletext/types";
import { urlFor } from "~/lib/sanityImageUrl"; // Import your existing image utility

type PortableTextBlockArray = PortableTextBlock[] | undefined;

const htmlComponents = {
  types: {
    // Custom Image Block Renderer
    image: ({ value }: { value: any }) =>
      value?.asset
        ? // NOTE: We return a string of HTML here
          `<img src="${urlFor(value.asset).url()}" alt="${value.alt || ""}"
            style="max-width: 100%; border-radius: 0.5rem; margin: 1rem 0;" />`
        : "",
  },
  marks: {
    // Custom Link Mark Renderer
    link: ({ children, value }: any) => `
      <a href="${value?.href}" target="_blank" rel="noopener noreferrer"
         style="color: #0077C8; text-decoration: underline;">
          ${children}
      </a>
    `,
  },
  block: {
    h1: ({ children }: any) =>
      `<h1 style="font-size: 2rem; font-weight: bold; margin: 1rem 0;">${children}</h1>`,
    h2: ({ children }: any) =>
      `<h2 style="font-size: 1.5rem; font-weight: bold; margin: 1rem 0;">${children}</h2>`,
    h3: ({ children }: any) =>
      `<h3 style="font-size: 1.25rem; font-weight: bold; margin: 1rem 0;">${children}</h3>`,
    normal: ({ children }: any) =>
      `<p style="margin: 0.5rem 0;">${children}</p>`,
  },
};

export function renderPortableText(value: PortableTextBlockArray): string {
  if (!value || !Array.isArray(value)) {
    return "";
  }
  return toHTML(value, { components: htmlComponents });
}
