/* eslint-disable prettier/prettier */

import '../styles/globals.css'
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";


export const metadata: Metadata = {
  title: {
    default: 'Dua & Ruqyah',
    template: `%s - ${'Dua & Ruqyah'}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    // { media: "(prefers-color-scheme: light)", color: "#E8F0F5" },
    // { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
 
          <Providers >
            <div className="bg-[#E8F0F5] h-screen">
              <main className="">
                {children}
              </main>
            </div>
          </Providers>

      </body>
    </html>
  );
}
