import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Contact } from "@/components/sections/contact/contact";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";

export const metadata: Metadata = {
  title: "Data Science Boutique | Data Strategy | gradify.ai",
  description: "AI-powered grading and assessment platform",
  generator: "v0.dev",
  metadataBase: new URL("https://gradify.ai"),
  openGraph: {
    title: "Data Science Boutique | Data Strategy | gradify.ai",
    description: "AI-powered grading and assessment platform",
    url: "https://gradify.ai",
    siteName: "Gradify.ai",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gradify.ai Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Science Boutique | Data Strategy | gradify.ai",
    description: "AI-powered grading and assessment platform",
    images: ["/og-image.png"],
    creator: "@gradifyai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    other: [
      {
        rel: "preconnect",
        url: "https://player.vimeo.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "preconnect",
        url: "https://i.vimeocdn.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "preconnect",
        url: "https://f.vimeocdn.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "dns-prefetch",
        url: "https://player.vimeo.com",
      },
      {
        rel: "dns-prefetch",
        url: "https://i.vimeocdn.com",
      },
      {
        rel: "dns-prefetch",
        url: "https://f.vimeocdn.com",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Vimeo domains */}
        <link
          rel="preconnect"
          href="https://player.vimeo.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://i.vimeocdn.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://f.vimeocdn.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://player.vimeo.com" />
        <link rel="dns-prefetch" href="https://i.vimeocdn.com" />
        <link rel="dns-prefetch" href="https://f.vimeocdn.com" />
      </head>
      <body className="bg-[#1a1a1a]">
        <GoogleAnalytics />
        <Header />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
