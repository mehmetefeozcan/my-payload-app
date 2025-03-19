import React from 'react'
import CaptionBlockComponent from '../subblocks/caption/Component'

const blockComponents = {
  caption: CaptionBlockComponent,
}

export default function SectionBlockComponent({ backgroundColor, items, size }) {
  if (!items || !Array.isArray(items) || items.length === 0) {
    return null
  }

  return (
    <div
      className="w-full min-h-full flex flex-col  py-10" // min-h ve py eklenerek bg görünür yapıldı
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

        // İç içe section desteği
        if (blockType === 'section') {
          return (
            <SectionBlockComponent
              key={index}
              backgroundColor={block.backgroundColor || 'transparent'}
              items={block.items}
            />
          )
        }

        return null
      })}
    </div>
  )
}
