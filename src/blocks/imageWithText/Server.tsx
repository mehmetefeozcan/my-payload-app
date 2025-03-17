import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
import React from 'react'

export default function ImageWithBlockServer({
  image,
  size,
  title,
  icon,
  description,
  buttonTitle,
  buttonUrl,
  buttonColor,
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
          <Image src={icon.url} alt={icon.alt} fill className={`object-fill`} />
        </div>
        <RichText data={title} />
        <RichText data={description} className="mt-5" />
        <button
          className={`border py-2 px-4 rounded-md mt-6`}
          style={{ borderColor: buttonColor, color: buttonColor }}
        >
          <a href={buttonUrl} target="_blank">
            {buttonTitle}
          </a>
        </button>
      </div>
    </div>
  )
}
