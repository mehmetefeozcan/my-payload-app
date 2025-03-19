import { JSXConvertersFunction, RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
import React from 'react'

import { TypographyJSXConverters } from 'payload-lexical-typography/converters'

const jsxConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...TypographyJSXConverters,
})

export default function CardBlockComponent({ icon, title, description, theme }) {
  return (
    <div
      className=" flex flex-col items-center justify-center w-full h-fit rounded-md"
      style={{
        width: theme.width + 'px',
        height: theme.height + 'px',
        backgroundColor: theme.color,
      }}
    >
      {icon ? (
        <div className="size-10 relative mb-6">
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
