import type { Metadata } from "next";
import SobreClient from "./SobreClient";
import { jsonLdScript, personSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sobre a Dra. Michele Carvalho Colchete",
  description:
    "Especialista em Fisioterapia Pélvica com mais de 12 anos de experiência. Conheça o percurso, formação e abordagem integrativa da Dra. Michele Carvalho Colchete em Leiria.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: "Sobre a Dra. Michele Carvalho Colchete",
    description:
      "Especialista em Saúde Pélvica Feminina em Leiria. +12 anos de experiência em fisioterapia pélvica e saúde integrativa da mulher.",
    url: "/sobre",
    type: "profile",
    images: ["/images/doutora-coluna.png"],
  },
};

export default function SobrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(personSchema())}
      />
      <SobreClient />
    </>
  );
}
