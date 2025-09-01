import type { Metadata,Viewport } from "next";
import {Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Awoyale Dolapo",
  description: "a portfolio for awoyale dolapo",
   
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="background-bubble" />
        {children}
      </body>
    </html>
  );
}
