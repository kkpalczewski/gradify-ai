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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
