import './globals.css'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

// when site is built, do it dynamically. applies to whole site wrapped in this layout.
// nextjs will not try to statically build anything.
export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Estrux Helpdesk',
  description: 'NextJs application tutorial based on NetNinja - https://github.com/iamshaunjp/nextjs-masterclass',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {children}
      </body>
    </html>
  )
}
