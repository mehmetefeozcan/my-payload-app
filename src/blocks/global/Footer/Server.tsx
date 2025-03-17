/* eslint-disable @typescript-eslint/no-explicit-any */
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import Image from 'next/image'
import Link from 'next/link'

export default async function FooterServer() {
  const payload = await getPayload({ config })
  const footer = await payload.findGlobal({
    slug: 'footer',
  })

  return (
    <div className="w-full flex flex-row justify-between px-10  items-center bg-stone-200 bottom-0">
      <div className="relative w-64 h-20 ">
        {footer.logo ? (
          <Image
            src={(footer.logo as any).url}
            alt={(footer.logo as any).alt}
            fill
            className="object-fit"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span></span>
          </div>
        )}
      </div>
      <div>{footer.copyrightNotice}</div>
      <div>
        {footer.nav?.map((item, index) => {
          return (
            <Link key={index} href={item.link!}>
              {item.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
