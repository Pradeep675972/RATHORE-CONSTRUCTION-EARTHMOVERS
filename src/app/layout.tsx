import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <head>
        <meta
          name="google-site-verification"
          content="fyAsl2B4CtIgTqsxVSlQ7yIkJDwRTYaup_ayczFx_uA"
        />
      </head>
      <body className="min-h-full bg-[#070707] text-white">{children}</body>
    </html>
  );
}
