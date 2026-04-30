import type { Metadata } from "next";
import AgendamentoClient from "./AgendamentoClient";

export const metadata: Metadata = {
  title: "Marcar Consulta — Instituto WOMAN",
  description:
    "Reserve a sua consulta de Fisioterapia Pélvica em Leiria. Marcação online com a Dra. Michele Carvalho Colchete em poucos minutos.",
  alternates: { canonical: "/agendamento" },
  openGraph: {
    title: "Marcar Consulta — Instituto WOMAN",
    description:
      "Reserve a sua consulta de Fisioterapia Pélvica em Leiria. Marcação online em minutos.",
    url: "/agendamento",
    type: "website",
  },
};

export default function AgendamentoPage() {
  return <AgendamentoClient />;
}
