import { Block } from 'payload'
import { Caption } from '../subblocks/caption/schema'
import { Card } from '../subblocks/card/schema'
import { Row } from '../subblocks/row/schema'
import { Slide } from '../slide/schema'
import { ImageItem } from '../subblocks/image/schema'
import { Column } from '../subblocks/column/schema'

export const Section: Block = {
  slug: 'section',
  fields: [
    {
      name: 'backgroundColor',
      label: 'Background Color',
      type: 'text',
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
      name: 'size',
      label: 'Size',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'height',
              label: 'Height (%)',
              type: 'number',
              min: 1,
              required: true,
            },
            {
              name: 'width',
              label: 'Width (%)',
              type: 'number',
              min: 1,
              max: 100,
              required: true,
            },
          ],
        },
      ],
    },
    { name: 'spacing', label: 'Spacing (px)', type: 'number', defaultValue: 16, min: 0 },
    {
      name: 'items',
      label: 'Items',
      type: 'blocks',
      blocks: [Caption, Card, Row, Column, Slide, ImageItem],
    },
  ],
}
