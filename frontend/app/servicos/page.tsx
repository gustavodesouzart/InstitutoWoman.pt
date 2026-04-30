import type { Metadata } from "next";
import ServicosClient from "./ServicosClient";
import { jsonLdScript, servicesItemListSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Serviços — Fisioterapia Pélvica e Saúde Integrativa",
  description:
    "Tratamentos especializados em fisioterapia pélvica: gravidez, pós-parto, menopausa, dor pélvica, incontinência, disfunção sexual e saúde integrativa em Leiria.",
  alternates: { canonical: "/servicos" },
  openGraph: {
    title: "Serviços — Fisioterapia Pélvica e Saúde Integrativa",
    description:
      "15 áreas de intervenção: fisioterapia pélvica, nutrição, coaching, sexologia, medicina integrativa.",
    url: "/servicos",
    type: "website",
  },
};

export default function ServicosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(servicesItemListSchema())}
      />
      <ServicosClient />
    </>
  );
}
