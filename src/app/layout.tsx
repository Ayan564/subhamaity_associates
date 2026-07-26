import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Subhamaity Associates | Expert Tax & Financial Solutions",
  description:
    "Top-rated tax consultant and financial service provider. We offer GST registration, income tax filing, company registration, and comprehensive tax solutions near you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth scroll-pt-20 md:scroll-pt-24"
      data-scroll-behavior="smooth"
    >
      <body
        className={`${jakarta.variable} font-sans antialiased bg-slate-50 text-slate-900`}
      >
        <Navbar />
        {children}
        <WhatsAppFAB />
      </body>
    </html>
  );
}
