import type { Metadata } from "next";
import ParaSiClient from "./ParaSiClient";

export const metadata: Metadata = {
  title: "Para Si — Em Cada Fase da Vida",
  description:
    "Cuidado especializado em adolescência, gravidez, pós-parto, menopausa e dor pélvica. Acompanhamento personalizado da Mulher em Leiria.",
  alternates: { canonical: "/para-si" },
  openGraph: {
    title: "Para Si — Em Cada Fase da Vida",
    description:
      "Adolescência, gravidez, pós-parto, menopausa e dor pélvica. Acompanhamento da Mulher em Leiria.",
    url: "/para-si",
    type: "website",
  },
};

export default function ParaSiPage() {
  return <ParaSiClient />;
}
