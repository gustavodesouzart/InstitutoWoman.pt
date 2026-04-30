import { contacto, especialidades, formacoes, servicos } from "./data";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.institutowoman.pt";

export const SITE_NAME = "WOMAN — Instituto de Saúde Integrativa";

const BUSINESS_ID = `${SITE_URL}/#instituto`;
const PERSON_ID = `${SITE_URL}/#dra-michele`;

const SOCIAL_PROFILES = [
  "https://www.instagram.com/institutowomanleiria/",
];

export function medicalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": BUSINESS_ID,
    name: SITE_NAME,
    alternateName: "Instituto WOMAN",
    description:
      "Fisioterapia Pélvica e Saúde Integrativa para a Mulher em Leiria. Gravidez, pós-parto, menopausa, dor pélvica e disfunções sexuais.",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    image: `${SITE_URL}/images/doutora-coluna.png`,
    telephone: contacto.telefone,
    email: contacto.email,
    priceRange: "€€",
    medicalSpecialty: ["Physiotherapy", "PelvicHealth"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Arrabalde da Ponte, 163",
      postalCode: "2415-372",
      addressLocality: "Leiria",
      addressRegion: "Leiria",
      addressCountry: "PT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.7436,
      longitude: -8.8071,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    areaServed: {
      "@type": "City",
      name: "Leiria",
    },
    founder: { "@id": PERSON_ID },
    sameAs: SOCIAL_PROFILES,
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Dra. Michele Carvalho Colchete",
    jobTitle: "Fisioterapeuta Especialista em Saúde Pélvica Feminina",
    description:
      "Especialista em Fisioterapia Pélvica com mais de 12 anos de experiência. Acompanha mulheres em gravidez, pós-parto, menopausa e tratamento de dor pélvica.",
    url: `${SITE_URL}/sobre`,
    image: `${SITE_URL}/images/doutora-coluna.png`,
    knowsAbout: especialidades,
    hasCredential: formacoes.slice(0, 10).map((f) => ({
      "@type": "EducationalOccupationalCredential",
      name: f,
    })),
    worksFor: { "@id": BUSINESS_ID },
    sameAs: SOCIAL_PROFILES,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "pt-PT",
    publisher: { "@id": BUSINESS_ID },
  };
}

export function servicesItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Serviços do Instituto WOMAN",
    itemListElement: servicos.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "MedicalProcedure",
        name: s.titulo,
        description: s.descricaoLonga,
        url: `${SITE_URL}/servicos#${s.id}`,
        provider: { "@id": BUSINESS_ID },
      },
    })),
  };
}

export function jsonLdScript(schema: object) {
  return {
    __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
  };
}
