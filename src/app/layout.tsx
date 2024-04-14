import type { Metadata } from "next";
import { withChildren } from "@/types";
import { Inter } from "next/font/google";
import '@/styles/globals.css'
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nikhil Patel",
  description: "Personal website",
};

export default function RootLayout(props: withChildren) {
  const { children } = props
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
