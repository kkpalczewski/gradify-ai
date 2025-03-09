import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Contact } from "@/components/sections/contact/contact";
export const metadata: Metadata = {
  title: "Data Science Boutique | Data Strategy | gradify.ai",
  description: "AI-powered grading and assessment platform",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#1a1a1a]">
        <Header />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
