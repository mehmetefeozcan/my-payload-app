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
        {
          name: 'border',
          label: 'Border',
          type: 'group',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'showBorder',
                  label: 'Show Border',
                  type: 'radio',
                  defaultValue: 'false',
                  options: [
                    {
                      label: 'False',
                      value: 'false',
                    },
                    {
                      label: 'True',
                      value: 'true',
                    },
                  ],
                },
                {
                  name: 'colorType',
                  label: 'Color Type',
                  type: 'radio',
                  required: true,
                  defaultValue: 'single',
                  options: [
                    {
                      label: 'Single',
                      value: 'single',
                    },
                    {
                      label: 'Gradient',
                      value: 'gradient',
                    },
                  ],
                  admin: {
                    condition: (data, siblingData) => {
                      if (siblingData.showBorder == 'false') {
                        return false
                      }

                      return true
                    },
                  },
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'color',
                      label: 'Border Color',
                      type: 'text',
                      required: true,
                      admin: {
                        condition: (data, siblingData) => {
                          if (siblingData.showBorder == 'false') {
                            return false
                          }

                          return true
                        },
                      },
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
                      name: 'colorSecond',
                      label: 'Border Color (Second)',
                      type: 'text',
                      admin: {
                        condition: (data, siblingData) => {
                          if (
                            siblingData.showBorder == 'false' ||
                            siblingData.colorType == 'single'
                          ) {
                            return false
                          }

                          return true
                        },
                      },
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
              ],
            },
          ],
        },
      ],
    },
  ],
}
