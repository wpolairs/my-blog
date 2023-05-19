import React from "react"

import Providers from "./Providers"
import { Metadata } from "next"
import "../styles/globals.css"

export const metadata: Metadata = {
  title: "My Page Title",
  description: "WangJian blog",
  // icons: "../../public/favicon.ico",
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body id="root">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
