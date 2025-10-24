// sanity/schemaTypes/blockContent.ts
import {defineType, defineArrayMember} from 'sanity'

/**
 * This is the schema definition for the rich text fields used for
 * descriptions, bios, etc. You can customize this further to include things like
 * code blocks, images, tables, etc.
 *
 * Read more: https://www.sanity.io/docs/block-content
 */
export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      // Styles let you define block styles like H1, H2, Normal, Quote, etc.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'Quote', value: 'blockquote'},
      ],
      // Lists let you define bulleted and numbered lists
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      // Marks let you define inline text styles like bold, italic, etc.
      marks: {
        // Decorators render text inline
        decorators: [
          {title: 'Bold', value: 'strong'},
          {title: 'Italic', value: 'em'},
          {title: 'Underline', value: 'underline'}, // Added underline
          {title: 'Code', value: 'code'}, // Added code style
        ],
        // Annotations are links or references that span across text sections
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    // You can add other types to permit inserting into your rich text fields.
    // For example, images:
    // defineArrayMember({
    //   type: 'image',
    //   options: {hotspot: true},
    // }),
  ],
})
