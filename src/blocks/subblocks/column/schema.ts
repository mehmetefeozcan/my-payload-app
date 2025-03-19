import { Block } from 'payload'
import { Card } from '../card/schema'
import { Caption } from '../caption/schema'
import { ImageItem } from '../image/schema'
import { IconItem } from '../icon/schema'

export const Column: Block = {
  slug: 'column',
  fields: [
    {
      name: 'items',
      label: 'Items',
      type: 'blocks',
      blocks: [Card, Caption, ImageItem, IconItem],
    },
  ],
}
