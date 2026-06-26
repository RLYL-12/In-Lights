import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const tajawal = Tajawal({
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  subsets: ["arabic"],
  variable: "--font-tajawal",
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
        className={`${tajawal.variable} font-arabic antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
