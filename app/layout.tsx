import type { Metadata } from "next";
import { Geist, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xentru.pro"),
  title: "Xentru — Automatizaciones con AI y captación de leads en LatAm",
  description:
    "Xentru implementa agentes de AI y automatizaciones para captar, calificar y hacer seguimiento a tus leads con Meta Ads, TikTok Ads, Google Ads, WhatsApp, Instagram, landing pages y tiendas Shopify. En Colombia para toda LatAm.",
  keywords: [
    "automatizaciones AI",
    "agentes de AI",
    "captación de leads",
    "Meta Ads",
    "WhatsApp Business",
    "landing pages",
    "Shopify",
    "LatAm",
    "Colombia",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geist.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
