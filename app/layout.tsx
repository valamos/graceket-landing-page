import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Graceket | Shop with grace. Give with purpose.",
  description: "Graceket curates beautiful products where every purchase donates to trusted charities. Shop with grace and see your impact transparently.",
  openGraph: {
    title: "Graceket | Shop with grace. Give with purpose.",
    description: "Graceket curates beautiful products where every purchase donates to trusted charities.",
    url: "https://graceket.example.com",
    siteName: "Graceket",
    images: [
      {
        url: "https://graceket.example.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Graceket impact and shopping",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graceket | Shop with grace. Give with purpose.",
    description: "Every Graceket purchase donates to vetted charities with full transparency.",
    images: ["https://graceket.example.com/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-hero-gradient">
        {children}
      </body>
    </html>
  );
}
