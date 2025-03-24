import { JSXConvertersFunction, RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
import React from 'react'

import { TypographyJSXConverters } from 'payload-lexical-typography/converters'

const jsxConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...TypographyJSXConverters,
})

export default function CardBlockComponent({ icon, title, description, theme }) {
  console.log(theme.border)

  return (
    <div
      className="w-full h-fit rounded-md p-[1px]"
      style={{
        width: theme.width + 'px',
        height: theme.height + 'px',
        background:
          theme.border.showBorder == 'true'
            ? theme.border.colorType == 'single'
              ? `linear-gradient(to right, ${theme.border.color}, ${theme.border.color})`
              : `linear-gradient(45deg, ${theme.border.colorSecond == '' || theme.border.colorSecond == '#' ? 'transparent' : theme.border.colorSecond}, ${theme.border.color})`
            : '',
      }}
    >
      <div
        className="flex flex-col items-center justify-center w-full h-full rounded-md"
        style={{
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
    </div>
    /*  <div
      className=" flex flex-col items-center justify-center w-full h-fit rounded-md "
      style={{
        width: theme.width + 'px',
        height: theme.height + 'px',
        backgroundColor: theme.color,
        background: 'inear-gradient(45deg, red, blue) border-box',
      }}
    >
     
    </div> */
  )
}
