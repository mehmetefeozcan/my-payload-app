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
    <div
      className="w-full flex flex-row justify-around  items-center h-24"
      style={{ backgroundColor: header.backgroundColor ? `#${header.backgroundColor}` : '#fff' }}
    >
      <div className="relative w-28 h-7">
        {header.logo ? (
          <Image
            src={(header.logo as any).url}
            alt={(header.logo as any).alt}
            fill
            className="object-contain"
          />
        ) : (
          <div></div>
        )}
      </div>

      <div className="flex flex-row gap-6">
        {header.nav?.map((item, index) => {
          return (
            <Link key={index} href={item.link || '#'} className="text-customText">
              {item.label}
            </Link>
          )
        })}
      </div>
      <div>
        {header.actions?.map((item, index) => {
          return (
            <button
              key={index}
              style={{
                backgroundColor: item.type == 'basic' ? item.color?.toString() : 'transparent',
                padding: '4px 16px',
                color: item.type == 'basic' ? 'white' : item.color?.toString(),
                borderRadius: '6px',
                border: '1px solid' + item.color?.toString(),
              }}
            >
              <a href={item.link || '#'} target="_blank">
                {item.label}
              </a>
            </button>
          )
        })}
      </div>
    </div>
  )
}
