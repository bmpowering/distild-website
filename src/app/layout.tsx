import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Distild | Enterprise AI Transformation",
  description: "AI Complexity, Distilled into Enterprise Yield. Moving enterprise platforms from AI hype to realized commercial value.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-brand-indigo/20 selection:text-brand-indigo">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
