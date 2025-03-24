/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import CardBlockComponent from '../card/Component'
import CaptionBlockComponent from '../caption/Component'
import ImageItemBlockComponent from '../image/Component'
import IconItemBlockComponent from '../icon/Component'
import ColumnBlockComponent from '../column/Component'

const blockComponents = {
  card: CardBlockComponent,
  caption: CaptionBlockComponent,
  column: ColumnBlockComponent,
  imageItem: ImageItemBlockComponent,
  iconItem: IconItemBlockComponent,
}

export default function RowBlockComponent({ items, spacing }) {
  if (!items || !Array.isArray(items) || items.length === 0) {
    return null
  }

  return (
    <div className={`flex flex-row ${spacing}  w-full h-full items-center`}>
      {items.map((block, index) => {
        const { blockType } = block

        if (blockType && blockType in blockComponents) {
          const Block = (blockComponents as any)[blockType]

          if (Block) {
            return (
              <div key={index} className="h-full">
                <Block id={index} {...block} />
              </div>
            )
          }
        }

        return null
      })}
    </div>
  )
}
