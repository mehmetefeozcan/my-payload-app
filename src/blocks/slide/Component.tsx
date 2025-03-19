/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import SlideCardBlockComponent from '../subblocks/slideCard/Component'
import Carousel from './carousel'

const blockComponents = {
  slideCard: SlideCardBlockComponent,
}

export default function SlideBlockComponent({ items }) {
  if (!items || !Array.isArray(items) || items.length === 0) {
    return null
  }

  return (
    <div className="w-full flex justify-center items-center">
      <Carousel>
        {items.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = (blockComponents as any)[blockType]

            if (Block) {
              return (
                <div key={index} className="w-full flex justify-center mb-16">
                  <Block id={index} {...block} />
                </div>
              )
            }
          }

          return null
        })}
      </Carousel>
    </div>
  )
}
