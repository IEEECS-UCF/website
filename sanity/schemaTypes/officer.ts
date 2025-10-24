// sanity/schemaTypes/officer.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'officer',
  title: 'Officer',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Academic Year',
      type: 'string',
      description: 'E.g., "3rd Year", "Senior", "Graduate Student"',
    }),
    defineField({
      name: 'major',
      title: 'Major',
      type: 'string',
      description: 'E.g., "Computer Science", "Computer Engineering"',
    }),
    defineField({
      name: 'headshot',
      title: 'Headshot',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Quote or Bio Snippet',
      type: 'text',
      description: 'Optional: A short quote or brief bio.',
    }),
    defineField({
      name: 'links',
      title: 'Personal Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Link Title',
              type: 'string',
              description: 'E.g., "LinkedIn", "Portfolio", "GitHub"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              url: 'url',
            },
            prepare({title, url}) {
              return {
                title: title || 'No title',
                subtitle: url || 'No URL',
              }
            },
          },
        },
      ],
      description: 'Add links like LinkedIn, personal portfolio, GitHub, etc.',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'headshot',
    },
  },
})
