/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import CardBlockComponent from '../card/Component'

const blockComponents = {
  card: CardBlockComponent,
}

export default function RowBlockComponent({ items, width }) {
  if (!items || !Array.isArray(items) || items.length === 0) {
    return null
  }

  return (
    <div className="w-full flex justify-center items-center">
      <div style={{ width: width + 'vw' }} className="flex flex-row gap-5  justify-center">
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
    </div>
  )
}
