import { Block } from 'payload'
import { SlideCard } from '../subblocks/slideCard/schema'

export const Slide: Block = {
  slug: 'slide',
  fields: [
    {
      name: 'items',
      label: 'Items',
      type: 'blocks',
      blocks: [SlideCard],
    },
  ],
}
