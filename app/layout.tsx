import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
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
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://fantomes-umber.vercel.app"
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
      <body>
        {children}
        <footer className="mt-20 border-t border-filet">
          <div className="mx-auto max-w-xl px-5 py-10 text-sm">
            <p className="font-titre text-xl font-bold">Fantômes</p>
            <nav
              aria-label="Informations légales"
              className="mt-4 flex flex-col"
            >
              <Link href="/mentions-legales" className="py-3 underline">
                Mentions légales
              </Link>
              <Link href="/cgv" className="py-3 underline">
                Conditions générales de vente
              </Link>
              <Link href="/confidentialite" className="py-3 underline">
                Politique de confidentialité
              </Link>
            </nav>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
