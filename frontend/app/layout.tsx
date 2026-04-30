import type { Metadata } from "next";
import "./globals.css";
import SiteLayout from "@/components/SiteLayout";
import { SITE_URL, medicalBusinessSchema, jsonLdScript } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "WOMAN — Instituto de Saúde Integrativa | Fisioterapia Pélvica em Leiria",
    template: "%s | WOMAN — Instituto de Saúde Integrativa",
  },
  description:
    "Fisioterapia Pélvica especializada para a mulher em cada fase da vida. Gravidez, pós-parto, menopausa, dor pélvica e disfunções sexuais. Dra. Michele Carvalho Colchete — Leiria.",
  applicationName: "Instituto WOMAN",
  keywords: [
    "fisioterapia pélvica",
    "saúde da mulher",
    "Leiria",
    "Dra. Michele Carvalho Colchete",
    "incontinência urinária",
    "endometriose",
    "pós-parto",
    "menopausa",
    "dor pélvica",
    "saúde integrativa",
  ],
  authors: [{ name: "Dra. Michele Carvalho Colchete" }],
  creator: "WOMAN — Instituto de Saúde Integrativa",
  publisher: "WOMAN — Instituto de Saúde Integrativa",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: SITE_URL,
    siteName: "WOMAN — Instituto de Saúde Integrativa",
    title:
      "WOMAN — Instituto de Saúde Integrativa | Fisioterapia Pélvica em Leiria",
    description:
      "Fisioterapia Pélvica especializada para a mulher em cada fase da vida. Dra. Michele Carvalho Colchete — Leiria.",
    images: [
      {
        url: "/images/doutora-coluna.png",
        width: 1200,
        height: 630,
        alt: "Dra. Michele Carvalho Colchete — Instituto WOMAN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WOMAN — Instituto de Saúde Integrativa",
    description:
      "Fisioterapia Pélvica e Saúde Integrativa para a Mulher em Leiria.",
    images: ["/images/doutora-coluna.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "health",
  // verification: { google: "<colocar valor após verificar propriedade no Search Console>" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <body>
        <SiteLayout>{children}</SiteLayout>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(medicalBusinessSchema())}
        />
      </body>
    </html>
  );
}
