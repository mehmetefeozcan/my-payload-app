import { Block } from 'payload'

export const ImageWithText: Block = {
  slug: 'imageWithText',
  fields: [
    { name: 'image', label: 'Image', type: 'upload', relationTo: 'media', required: true },
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
              label: 'Height',
              type: 'number',
              min: 1,
              max: 100,
              required: true,
            },
            {
              name: 'width',
              label: 'Width',
              type: 'number',
              min: 1,
              max: 100,
              required: true,
            },
          ],
        },
      ],
    },
    { name: 'icon', label: 'Icon', type: 'upload', relationTo: 'media', required: false },
    {
      name: 'title',
      label: 'Title',
      type: 'richText',
      required: true,
    },
    { name: 'description', label: 'Description', type: 'richText', required: true },
    {
      name: 'button',
      label: 'Button',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'title', label: 'Button Title', type: 'text', required: true },
            { name: 'url', label: 'Button Url', type: 'text', required: true },
            {
              name: 'color',
              label: 'Button Color',
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
          ],
        },
        {
          name: 'icon',
          label: 'Button Icon',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
      ],
    },
  ],
}
