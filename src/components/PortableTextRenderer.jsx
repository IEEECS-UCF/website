import { PortableText } from "@portabletext/react";
import type {
  PortableTextReactComponents,
  PortableTextMarkComponentProps,
  PortableTextBlockComponent,
} from "@portabletext/react";
import React from "react";

type PortableTextBlock = { _type: string } & Record<string, any>;

interface PortableTextRendererProps {
  value: PortableTextBlock[];
}

const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: any }) =>
      value?.asset ? (
        <img
          src={value.asset.url}
          alt={value.alt || ""}
          style={{ maxWidth: "100%", borderRadius: "0.5rem", margin: "1rem 0" }}
        />
      ) : null,
  },
  marks: {
    link: ({ children, value }: PortableTextMarkComponentProps<any>) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#0077C8", textDecoration: "underline" }}
      >
        {children}
      </a>
    ),
  },
  block: {
    h1: (({ children }) => (
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", margin: "1rem 0" }}>
        {children}
      </h1>
    )) as PortableTextBlockComponent,
    h2: (({ children }) => (
      <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "1rem 0" }}>
        {children}
      </h2>
    )) as PortableTextBlockComponent,
    h3: (({ children }) => (
      <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", margin: "1rem 0" }}>
        {children}
      </h3>
    )) as PortableTextBlockComponent,
    normal: (({ children }) => (
      <p style={{ margin: "0.5rem 0" }}>{children}</p>
    )) as PortableTextBlockComponent,
  },
};

const PortableTextRenderer: React.FC<PortableTextRendererProps> = ({
  value,
}) => {
  if (!value || !Array.isArray(value)) {
    return null;
  }

  return <PortableText value={value} components={components} />;
};

export default PortableTextRenderer;
