import React from 'react'
import './styles.css'
import HeaderServer from '@/blocks/global/Header/Server'
/* import FooterServer from '@/blocks/global/Footer/Server' */

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <HeaderServer />
        <main>{children}</main>
        {/* <FooterServer /> */}
      </body>
    </html>
  )
}
