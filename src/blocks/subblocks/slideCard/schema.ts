import { Block } from 'payload'

export const SlideCard: Block = {
  slug: 'slideCard',
  fields: [
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'title',
      label: 'Title',
      type: 'richText',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
      required: true,
    },
    {
      name: 'button',
      label: 'Button',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'text', label: 'Text', type: 'text', required: true },
            { name: 'url', label: 'Url', type: 'text', required: true },
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
          ],
        },
        {
          name: 'icon',
          label: 'Icon',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
      ],
    },
  ],
}
