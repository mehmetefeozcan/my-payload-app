import { JSXConvertersFunction, RichText } from '@payloadcms/richtext-lexical/react'
import { TypographyJSXConverters } from 'payload-lexical-typography/converters'
import Image from 'next/image'
import React from 'react'

const jsxConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...TypographyJSXConverters,
})

export default function SlideCardBlockComponent({ image, title, description }) {
  return (
    <div className="bg-white p-16 flex flex-row items-center justify-center rounded-md gap-52 w-full">
      {image ? (
        <div className="relative mb-6 size-60">
          <Image src={image.url} alt={image.alt} fill className={`object-fill `} />
        </div>
      ) : (
        <div></div>
      )}
      <div className="flex flex-col items-start justify-items-start">
        <RichText data={title} converters={jsxConverters} className="mb-4" />
        <RichText data={description} converters={jsxConverters} />
      </div>
    </div>
  )
}
