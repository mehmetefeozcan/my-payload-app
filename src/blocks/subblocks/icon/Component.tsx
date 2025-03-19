import Image from 'next/image'
import React from 'react'

export default function IconItemBlockComponent({ icon, size, text }) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <div
        className="relative border-md"
        style={{ width: size.width + 'px', height: size.height + 'px' }}
      >
        {icon ? (
          <Image src={icon.url} alt={icon.alt} fill className={`object-fill `} />
        ) : (
          <div></div>
        )}
      </div>
      {text ? <div className=" text-2xl text-primaryBlue">{text}</div> : <div></div>}
    </div>
  )
}
