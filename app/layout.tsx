import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ExergicLabs — AI Products & Enterprise AI Transformation",
  description: "We audit your AI workflows, build custom AI products, and help enterprise leaders become AI native.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-[#080808] text-white`}>
        {children}
      </body>
    </html>
  );
}
