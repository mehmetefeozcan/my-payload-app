import { JSXConvertersFunction, RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
import React from 'react'

import { TypographyJSXConverters } from 'payload-lexical-typography/converters'

const jsxConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...TypographyJSXConverters,
})

export default function CaptionBlockComponent({ icon, title, description, spacing }) {
  return (
    <div>
      {icon ? (
        <div className="flex flex-col items-center w-full" style={{ gap: spacing + 'px' }}>
          {icon ? (
            <div className="size-10 relative">
              <Image src={icon.url} alt={icon.alt} fill className={`object-fill `} />
            </div>
          ) : (
            <div></div>
          )}

          <RichText data={title} converters={jsxConverters} />
          <RichText data={description} converters={jsxConverters} />
        </div>
      ) : (
        <div className="flex flex-col" style={{ gap: spacing + 'px' }}>
          <RichText data={title} converters={jsxConverters} />
          <RichText data={description} converters={jsxConverters} />
        </div>
      )}
    </div>
  )
}
