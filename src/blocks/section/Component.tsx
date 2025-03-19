/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import CaptionBlockComponent from '../subblocks/caption/Component'
import RowBlockComponent from '../subblocks/row/Component'
import SlideBlockComponent from '../slide/Component'

const blockComponents = {
  caption: CaptionBlockComponent,
  row: RowBlockComponent,
  slide: SlideBlockComponent,
}

export default function SectionBlockComponent({ backgroundColor, items, size }) {
  if (!items || !Array.isArray(items) || items.length === 0) {
    return null
  }

  return (
    <div
      className="w-full min-h-full flex flex-col  py-10  px-56"
      style={{ width: size.width + 'vw', height: size.height + 'vh', backgroundColor }}
    >
      {items.map((block, index) => {
        const { blockType } = block

        if (blockType && blockType in blockComponents) {
          const Block = (blockComponents as any)[blockType]

          if (Block) {
            return (
              <div key={index} className="mb-4">
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
