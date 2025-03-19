import { Block } from 'payload'

export const Card: Block = {
  slug: 'card',
  fields: [
    { name: 'icon', label: 'Icon', type: 'upload', relationTo: 'media', required: false },
    {
      name: 'title',
      label: 'Title',
      type: 'richText',
      required: true,
    },
    { name: 'description', label: 'Description', type: 'richText', required: false },
    {
      name: 'theme',
      label: 'Theme',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'color',
              label: 'Color',
              type: 'text',
              required: true,
              hooks: {
                beforeChange: [
                  ({ value }) => {
                    if (typeof value === 'string' && !value.startsWith('#')) {
                      return `#${value}`
                    }
                    return value
                  },
                ],
              },
            },
            {
              name: 'height',
              label: 'Height (px)',
              type: 'number',
              min: 1,
              required: true,
            },
            {
              name: 'width',
              label: 'Width (px)',
              type: 'number',
              min: 1,
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
