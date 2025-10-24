// sanity/schemaTypes/project.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent', // Assumes blockContent schema defined
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'leads',
      title: 'Project Lead(s)',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Name(s) of the main lead(s).',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'subLeads',
      title: 'Sub-Lead(s)',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Optional: Name(s) of sub-team lead(s).',
    }),
    defineField({
      name: 'subTeams',
      title: 'Sub-Teams',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Optional: List any sub-teams (e.g., "Software", "Hardware", "Design").',
    }),
    defineField({
      name: 'photos',
      title: 'Project Photos',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      description: 'Optional: Upload relevant photos of the project.',
    }),
    defineField({
      name: 'skillsRequired',
      title: 'Skills Required / Tech Stack',
      type: 'array',
      of: [{type: 'string'}],
      description:
        'Optional: List desired skills or technologies used (e.g., "Python", "React", "PCB Design").',
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'recruitingStatus',
      title: 'Recruiting Status',
      type: 'string',
      options: {
        list: [
          {title: 'Actively Recruiting', value: 'active'},
          {title: 'Not Currently Recruiting', value: 'inactive'},
          {title: 'Recruiting Specific Roles', value: 'specific'},
        ],
        layout: 'radio',
      },
      initialValue: 'inactive',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'collaborator',
      title: 'Collaborating Organization(s)',
      type: 'string',
      description: 'Optional: Name any other clubs or orgs involved.',
    }),
    defineField({
      name: 'meetingSchedule',
      title: 'Meeting Schedule',
      type: 'text',
      description:
        'Describe the regular meeting times/locations. E.g., "Mondays 7-9 PM in HEC 101, Wednesdays 6-8 PM on Discord"',
    }),
    defineField({
      name: 'githubLink',
      title: 'GitHub Repository Link',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'photos.0', // Show the first photo as media
    },
  },
})
