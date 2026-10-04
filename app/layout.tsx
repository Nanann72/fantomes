import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const titre = "Fantômes : débusque les abonnements que tu paies sans t'en servir";
const description =
  "Dépose ton relevé bancaire, on repère les prélèvements oubliés, classés par montant annuel, avec la lettre de résiliation prête à envoyer.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://fantomes.vercel.app"
  ),
  title: titre,
  description,
  openGraph: {
    title: titre,
    description,
    type: "website",
    locale: "fr_FR",
    siteName: "Fantômes",
  },
  twitter: {
    card: "summary_large_image",
    title: titre,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f2e8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${instrument.variable}`}>
      <body>{children}</body>
    </html>
  );
}
