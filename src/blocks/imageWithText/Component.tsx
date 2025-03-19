import { JSXConvertersFunction, RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
import React from 'react'

import { TypographyJSXConverters } from 'payload-lexical-typography/converters'

const jsxConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...TypographyJSXConverters,
})

export default function ImageWithTextBlockComponent({
  image,
  size,
  title,
  icon,
  description,
  button,
}) {
  return (
    <div className="relative" style={{ width: size.width + 'vw', height: size.height + 'vh' }}>
      {image ? (
        <Image src={image.url} alt={image.alt} fill className={`object-fill `} />
      ) : (
        <div></div>
      )}
      <div className="absolute flex flex-col items-center justify-center w-full h-full">
        <div className="size-10 relative">
          {icon ? (
            <Image src={icon.url} alt={icon.alt} fill className={`object-fill`} />
          ) : (
            <div></div>
          )}
        </div>
        <RichText data={title} converters={jsxConverters} />
        <RichText data={description} className="mt-5" converters={jsxConverters} />
        <button
          className={`border py-2 px-4 rounded-md mt-6 flex flex-row justify-between gap-2 items-center`}
          style={{ borderColor: button.color, color: button.color }}
        >
          <a href={button.url} target="_blank" className="text-lg  ">
            {button.title}
          </a>
          {button.icon ? (
            <Image src={button.icon.url} alt={button.icon.alt} width={20} height={20} />
          ) : (
            <div></div>
          )}
        </button>
      </div>
    </div>
  )
}
