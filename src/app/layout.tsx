import { ReactNode } from 'react'
import './globals.css'
import { Lobster, Roboto_Flex as Roboto } from 'next/font/google'
import { Aside } from '@/components/Aside'
import { Footer } from '@/components/Footer'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const lobster = Lobster({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-lobster',
})

export const metadata = {
  title: 'DarlanZeroDev',
  description:
    "Hello, sweet readers! That's my identity website as a Fullstack developer.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} ${lobster.variable} max-h-screen  min-h-max bg-richblack-500 font-sans text-amber-50`}
      >
        <header className="w-screen py-4">
          <div className="gap-6 rounded-sm bg-my-gradient text-center">
            <h1 className="font-alt text-5xl text-black first-letter:text-zinc-800">
              Welcome
            </h1>
          </div>
          <Aside />
        </header>

        <main className="min-h-screen">
          <div className="relative flex flex-grow flex-col items-center justify-between p-2 font-sans">
            {children}
          </div>
        </main>

        <div className="sticky bottom-0 w-full">
          <Footer />
        </div>
      </body>
    </html>
  )
}
