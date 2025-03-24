import { Block } from 'payload'
import { Card } from '../card/schema'
import { Caption } from '../caption/schema'
import { ImageItem } from '../image/schema'
import { IconItem } from '../icon/schema'

export const Column: Block = {
  slug: 'column',
  fields: [
    {
      name: 'spacing',
      label: 'Spacing',
      type: 'radio',
      defaultValue: 'justify-normal',
      options: [
        {
          label: 'normal',
          value: 'justify-normal',
        },
        {
          label: 'center',
          value: 'justify-center',
        },
        {
          label: 'between',
          value: 'justify-between',
        },
        {
          label: 'evenly',
          value: 'justify-evenly',
        },
        {
          label: 'around',
          value: 'justify-around',
        },
      ],
    },
    {
      name: 'items',
      label: 'Items',
      type: 'blocks',
      blocks: [Card, Caption, ImageItem, IconItem],
    },
  ],
}
