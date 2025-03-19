import React from 'react'
import './styles.css'
import HeaderServer from '@/blocks/global/Header/Server'
/* import FooterServer from '@/blocks/global/Footer/Server' */

import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <HeaderServer />
        <main>{children}</main>
        {/* <FooterServer /> */}
      </body>
    </html>
  )
}
