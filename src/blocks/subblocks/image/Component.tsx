import Image from 'next/image'
import React from 'react'

export default function ImageItemBlockComponent({ image, size }) {
  return (
    <div
      className="relative border-md"
      style={{ width: size.width + 'px', height: size.height + 'px' }}
    >
      {image ? (
        <Image src={image.url} alt={image.alt} fill className={`object-fill `} />
      ) : (
        <div></div>
      )}
    </div>
  )
}
