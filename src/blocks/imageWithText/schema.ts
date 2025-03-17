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
      type: 'row',
      fields: [
        { name: 'buttonTitle', label: 'Button Title', type: 'text', required: true },
        { name: 'buttonUrl', label: 'Button Url', type: 'text', required: true },
        { name: 'buttonColor', label: 'Button Color', type: 'text', required: true },
      ],
    },
  ],
}
