/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment } from 'react'
import { Page } from '@/payload-types'

import ImageWithTextBlockComponent from '@/blocks/imageWithText/Component'
import SectionBlockComponent from '@/blocks/section/Component'

const blockComponents = {
  imageWithText: ImageWithTextBlockComponent,
  section: SectionBlockComponent,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout']
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = (blockComponents as any)[blockType]

            if (Block) {
              return (
                <div key={index}>
                  <Block id={index} {...block} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
