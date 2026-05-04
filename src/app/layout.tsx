import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Privacy Policy - Quran Daily",
  description: "Privacy Policy for Quran Daily App. We are committed to protecting your personal information and your right to privacy.",
  keywords: ["Quran Daily", "Privacy Policy", "Quran App", "Islamic App"],
  authors: [{ name: "Quran Daily" }],
  icons: {
    icon: "/quran-logo.png",
  },
  openGraph: {
    title: "Privacy Policy - Quran Daily",
    description: "Privacy Policy for Quran Daily App.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Quran Daily",
    description: "Privacy Policy for Quran Daily App.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
