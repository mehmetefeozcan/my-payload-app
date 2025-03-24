import { Block } from 'payload'

export const Caption: Block = {
  slug: 'caption',
  fields: [
    { name: 'icon', label: 'Icon', type: 'upload', relationTo: 'media', required: false },
    {
      name: 'title',
      label: 'Title',
      type: 'richText',
      required: true,
    },
    { name: 'description', label: 'Description', type: 'richText', required: true },
    { name: 'spacing', label: 'Spacing (px)', type: 'number', defaultValue: 10, min: 0 },
  ],
}
