import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

/* Arabic display font — Thmanyah Serif Display (headings) */
const thmanyahDisplay = localFont({
  src: "../fonts/thmanyahserifdisplay-Regular.woff2",
  variable: "--font-display",
  display: "swap",
});

/* Arabic body / text font — Thmanyah Sans */
const thmanyahSans = localFont({
  src: "../fonts/thmanyahsans-Regular.woff2",
  variable: "--font-arabic",
  display: "swap",
});

/* Amiri serif for elegant Arabic accents */
const amiri = localFont({
  src: "../fonts/Amiri-Regular.ttf",
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "إن لايتس | In Lights — شركة الإضاءة المتكاملة",
  description:
    "إن لايتس (In Lights) — شركة الإضاءة المتكاملة. نقدم حلول إضاءة مبتكرة وأنيقة بأحدث تقنيات LED وتصاميم عصرية تناسب المنازل والمشاريع التجارية.",
  keywords: [
    "إن لايتس",
    "In Lights",
    "إضاءة",
    "LED",
    "إنارة",
    "شركة إضاءة",
    "تصميم إضاءة",
    "حلول إضاءة",
  ],
  authors: [{ name: "In Lights" }],
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "إن لايتس | In Lights",
    description: "شركة الإضاءة المتكاملة — حلول إضاءة مبتكرة بأحدث التقنيات",
    siteName: "In Lights",
    type: "website",
    locale: "ar_SA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${thmanyahDisplay.variable} ${thmanyahSans.variable} ${amiri.variable} font-arabic antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
