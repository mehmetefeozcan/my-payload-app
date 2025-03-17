import { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'nav',
      label: 'Navigation',
      type: 'array',
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
        },
        {
          name: 'link',
          label: 'Link',
          type: 'text',
        },
      ],
    },
    {
      name: 'actions',
      label: 'Actions',
      type: 'array',
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
        },
        {
          name: 'link',
          label: 'Link',
          type: 'text',
        },
        {
          name: 'color',
          label: 'Color',
          type: 'text',
        },
        {
          name: 'type',
          label: 'Type',
          type: 'radio',
          options: [
            {
              label: 'Basic',
              value: 'basic',
            },
            {
              label: 'Outlined',
              value: 'outlined',
            },
          ],
        },
      ],
    },
    {
      name: 'backgroundColor',
      label: 'Background Color',
      type: 'text',
    },
  ],
}
