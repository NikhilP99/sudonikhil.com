import { WithChildren } from "@/types";
import { Metadata } from "next";
import { Poppins, Roboto_Mono } from "next/font/google";
import '@/styles/globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  weight: ['400', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Nikhil Patel",
  description: "Personal website",
};

export default function RootLayout(props: WithChildren) {
  const { children } = props
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>   
      <body className={`${poppins.variable} ${robotoMono.variable} font-sans`}>
        
      </body>
    </html>
  );
}
