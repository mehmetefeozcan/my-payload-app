import { JSXConvertersFunction, RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
import React from 'react'

import { TypographyJSXConverters } from 'payload-lexical-typography/converters'

const jsxConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...TypographyJSXConverters,
})

export default function CaptionBlockComponent({ icon, title, description }) {
  return (
    <div className="absolute flex flex-col items-center justify-center w-full h-fit">
      {icon ? (
        <div className="size-10 relative">
          <Image src={icon.url} alt={icon.alt} fill className={`object-fill `} />
        </div>
      ) : (
        <div></div>
      )}

      <RichText data={title} converters={jsxConverters} />
      <RichText data={description} className="mt-5" converters={jsxConverters} />
    </div>
  )
}
