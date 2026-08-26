import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});
const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Strony internetowe dla firm | ant0niy07",
  description:
    "Nowoczesne strony firmowe i sklepy internetowe dla biznesu w Warszawie i całej Polsce.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "ant0niy07 — strony, które pracują na Twój biznes",
    description:
      "Szybkie, responsywne strony i sklepy internetowe — od projektu po publikację.",
    url: "/",
    siteName: site.name,
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ant0niy07 Web Studio",
      },
    ],
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jakarta.variable} ${mono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
