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
  metadataBase: new URL("https://rathore-construction-earthmovers.vercel.app"),
  title: {
    default: "Rathore Construction & Earthmovers | Heavy Equipment Rental",
    template: "%s | Rathore Construction & Earthmovers",
  },
  description:
    "Rathore Construction & Earthmovers offers heavy equipment rental, excavation, earthmoving, pipeline work and infrastructure support in Madhya Pradesh and nearby states.",
  keywords: [
    "construction company",
    "heavy equipment rental",
    "earthmoving company",
    "excavator rental",
    "JCB rental",
    "backhoe loader rental",
    "pipeline laying",
    "road construction equipment",
    "Madhya Pradesh construction",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "fyAsl2B4CtIgTqsxVSlQ7yIkJDwRTYaup_ayczFx_uA",
  },
  openGraph: {
    title: "Rathore Construction & Earthmovers | Heavy Equipment Rental",
    description:
      "Reliable heavy equipment rental and earthmoving services for infrastructure, mining and industrial projects.",
    type: "website",
    url: "https://rathore-construction-earthmovers.vercel.app",
    siteName: "Rathore Construction & Earthmovers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rathore Construction & Earthmovers | Heavy Equipment Rental",
    description:
      "Reliable heavy equipment rental and earthmoving services for infrastructure, mining and industrial projects.",
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
      <head>
        <meta
          name="google-site-verification"
          content="fyAsl2B4CtIgTqsxVSlQ7yIkJDwRTYaup_ayczFx_uA"
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-950 text-white">{children}</body>
    </html>
  );
}
