import { Block } from 'payload'

export const IconItem: Block = {
  slug: 'iconItem',
  fields: [
    { name: 'icon', label: 'Icon', type: 'upload', relationTo: 'media', required: true },
    {
      name: 'size',
      label: 'Size',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
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
    { name: 'text', label: 'Text', type: 'text', required: false },
  ],
}
