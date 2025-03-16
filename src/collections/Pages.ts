import { CollectionConfig } from 'payload'
import { blocks } from '@/blocks'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'blocks',
      blocks,
    },
  ],
}
