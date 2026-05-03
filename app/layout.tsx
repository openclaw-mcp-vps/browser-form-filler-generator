import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FormFiller AI — Generate Smart Form Automation Scripts',
  description: 'Upload a form screenshot and get ready-to-use Playwright or Puppeteer automation scripts instantly. Built for QA engineers and automation testers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ab0b6486-8a0b-48ab-b1ce-810d102ca68b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
