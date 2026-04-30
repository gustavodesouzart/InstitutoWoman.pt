import type { Metadata } from "next";
import ContactosClient from "./ContactosClient";

export const metadata: Metadata = {
  title: "Contactos e Localização — Leiria",
  description:
    "Rua Arrabalde da Ponte 163, 2415-372 Leiria. Telefone, email, horário e mapa do Instituto WOMAN — Saúde Integrativa da Mulher.",
  alternates: { canonical: "/contactos" },
  openGraph: {
    title: "Contactos e Localização — Instituto WOMAN",
    description:
      "Rua Arrabalde da Ponte 163, 2415-372 Leiria. Segunda a sexta 09:00-19:00, sábado 09:00-13:00.",
    url: "/contactos",
    type: "website",
  },
};

export default function ContactosPage() {
  return <ContactosClient />;
}
