/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import CardBlockComponent from '../card/Component'
import CaptionBlockComponent from '../caption/Component'
import RowBlockComponent from '../row/Component'
import ImageItemBlockComponent from '../image/Component'
import IconItemBlockComponent from '../icon/Component'

const blockComponents = {
  card: CardBlockComponent,
  caption: CaptionBlockComponent,
  row: RowBlockComponent,
  imageItem: ImageItemBlockComponent,
  iconItem: IconItemBlockComponent,
}

export default function ColumnBlockComponent({ items }) {
  if (!items || !Array.isArray(items) || items.length === 0) {
    return null
  }

  return (
    <div className="flex flex-col justify-start ">
      {items.map((block, index) => {
        const { blockType } = block

        if (blockType && blockType in blockComponents) {
          const Block = (blockComponents as any)[blockType]

          if (Block) {
            return (
              <div key={index} className="">
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
