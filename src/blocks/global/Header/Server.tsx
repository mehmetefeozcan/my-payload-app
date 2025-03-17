/* eslint-disable @typescript-eslint/no-explicit-any */
import { getPayload } from 'payload'
import Image from 'next/image'
import React from 'react'

import config from '@/payload.config'
import Link from 'next/link'

export default async function HeaderServer() {
  const payload = await getPayload({ config })
  const header = await payload.findGlobal({
    slug: 'header',
  })

  return (
    <div className="w-full flex flex-row justify-between px-10  items-center bg-stone-200">
      <div className="relative w-64 h-20">
        {header.logo ? (
          <Image
            src={(header.logo as any).url}
            alt={(header.logo as any).alt}
            fill
            className="object-fit"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span></span>
          </div>
        )}
      </div>

      <div>
        {header.nav?.map((item, index) => {
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
