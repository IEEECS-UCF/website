// sanity/schemaTypes/event.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dateTime',
      title: 'Date and Time',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'audience',
      title: 'Audience',
      type: 'string',
      options: {
        list: [
          {title: 'Public', value: 'public'},
          {title: 'Dues Members Only', value: 'members'},
        ],
        layout: 'radio',
      },
      initialValue: 'public',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          {title: 'General Body Meeting (GBM)', value: 'gbm'},
          {title: 'Research Lecture', value: 'lecture'},
          {title: 'Workshop', value: 'workshop'},
          {title: 'Professional Development', value: 'prodev'},
          {title: 'Social', value: 'social'},
          {title: 'Other', value: 'other'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'speakers',
      title: 'Speaker(s)',
      type: 'text',
      description: 'Name(s) and title(s) of speakers, if applicable (especially for GBMs).',
      hidden: ({document}) => !['gbm', 'lecture'].includes(document?.eventType as string), // Added type assertion
    }),
    defineField({
      name: 'collaborator',
      title: 'Collaborating Organization(s)',
      type: 'string',
      description: 'Optional: Name any clubs or orgs you are collaborating with.',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'E.g., "HEC 101", "Discord", "Zoom Link Below"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'virtualLink',
      title: 'Virtual Meeting Link',
      type: 'url',
      description: 'Optional: Link for Zoom, Teams, Discord, etc.',
      hidden: ({document}) => {
        const locationString =
          typeof document?.location === 'string' ? document.location.toLowerCase() : ''

        return (
          !locationString.includes('discord') &&
          !locationString.includes('zoom') &&
          !locationString.includes('online')
        )
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent', // Assumes you have a blockContent schema defined
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'flyer',
      title: 'Flyer / Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload an event flyer or a relevant image.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'dateTime',
      media: 'flyer',
    },
    prepare(selection) {
      const {title, date, media} = selection
      // Ensure date is treated as a string before creating a Date object
      const dateString = typeof date === 'string' ? date : undefined
      const formattedDate = dateString
        ? new Date(dateString).toLocaleDateString('en-US', {month: 'short', day: 'numeric'})
        : 'No date'
      return {
        title: title as string, // Add type assertion
        subtitle: formattedDate,
        media: media,
      }
    },
  },
})
