import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RATHORE CONSTRUCTION & EARTHMOVERS",
  description: "Building the Future with Strength, Quality & Heavy Equipment Solutions. Premium construction and heavy equipment services for infrastructure, mining and industrial projects.",
  keywords: ["heavy equipment rental", "earthmoving", "excavator rental", "construction equipment", "industrial rental"],
  openGraph: {
    title: "RATHORE CONSTRUCTION & EARTHMOVERS",
    description: "Building the Future with Strength, Quality & Heavy Equipment Solutions. Premium construction and heavy equipment services for infrastructure, mining and industrial projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-white">{children}</body>
    </html>
  );
}
