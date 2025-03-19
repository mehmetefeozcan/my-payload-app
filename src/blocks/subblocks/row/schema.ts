import { Block } from 'payload'
import { Card } from '../card/schema'

export const Row: Block = {
  slug: 'row',
  fields: [
    {
      name: 'width',
      label: 'Width',
      type: 'number',
      min: 1,
      max: 100,
      required: true,
    },
    {
      name: 'items',
      label: 'Items',
      type: 'blocks',
      blocks: [Card],
    },
  ],
}
