import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pol\u00EDtica de Privacidade | WOMAN \u2013 Instituto de Sa\u00FAde Integrativa",
  description: "Pol\u00EDtica de Privacidade e Cookies do WOMAN \u2013 Instituto de Sa\u00FAde Integrativa.",
};

export default function PoliticaPrivacidade() {
  return (
    <main className="pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1
          className="font-cormorant text-4xl md:text-5xl font-bold mb-8"
          style={{ color: "var(--color-dark)" }}
        >
          {"Pol\u00EDtica de Privacidade"}
        </h1>

        <div
          className="space-y-6 text-base leading-relaxed"
          style={{ color: "var(--color-muted)" }}
        >
          <p>
            <strong style={{ color: "var(--color-dark)" }}>
              {"\u00DAltima atualiza\u00E7\u00E3o: abril de 2026"}
            </strong>
          </p>

          <p>
            {"O WOMAN \u2013 Instituto de Sa\u00FAde Integrativa, da Dra. Michele Carvalho Colchete, respeita a privacidade dos seus utilizadores e est\u00E1 comprometido com a prote\u00E7\u00E3o dos seus dados pessoais, em conformidade com o Regulamento Geral de Prote\u00E7\u00E3o de Dados (RGPD) \u2013 Regulamento (UE) 2016/679."}
          </p>

          <h2
            className="font-cormorant text-2xl font-semibold pt-4"
            style={{ color: "var(--color-dark)" }}
          >
            {"1. Respons\u00E1vel pelo Tratamento"}
          </h2>
          <p>
            {"O respons\u00E1vel pelo tratamento dos dados pessoais recolhidos atrav\u00E9s deste website \u00E9 o WOMAN \u2013 Instituto de Sa\u00FAde Integrativa."}
          </p>

          <h2
            className="font-cormorant text-2xl font-semibold pt-4"
            style={{ color: "var(--color-dark)" }}
          >
            {"2. Dados Pessoais Recolhidos"}
          </h2>
          <p>{"Podemos recolher os seguintes dados pessoais:"}</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>{"Nome completo"}</li>
            <li>{"Endere\u00E7o de email"}</li>
            <li>{"N\u00FAmero de telefone"}</li>
            <li>{"Informa\u00E7\u00F5es fornecidas nos formul\u00E1rios de agendamento"}</li>
            <li>{"Dados de navega\u00E7\u00E3o (cookies)"}</li>
          </ul>

          <h2
            className="font-cormorant text-2xl font-semibold pt-4"
            style={{ color: "var(--color-dark)" }}
          >
            {"3. Finalidade do Tratamento"}
          </h2>
          <p>{"Os dados pessoais s\u00E3o tratados para as seguintes finalidades:"}</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>{"Responder a pedidos de contacto e agendamento"}</li>
            <li>{"Gest\u00E3o da rela\u00E7\u00E3o com pacientes"}</li>
            <li>{"Melhoria da experi\u00EAncia de navega\u00E7\u00E3o no website"}</li>
            <li>{"An\u00E1lise estat\u00EDstica de utiliza\u00E7\u00E3o do website"}</li>
          </ul>

          <h2
            className="font-cormorant text-2xl font-semibold pt-4"
            style={{ color: "var(--color-dark)" }}
          >
            {"4. Pol\u00EDtica de Cookies"}
          </h2>
          <p>
            {"Este website utiliza cookies \u2013 pequenos ficheiros de texto armazenados no seu dispositivo \u2013 para garantir o funcionamento correto do site e melhorar a sua experi\u00EAncia."}
          </p>
          <p>{"Tipos de cookies utilizados:"}</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>{"Cookies essenciais:"}</strong>
              {" necess\u00E1rios para o funcionamento b\u00E1sico do website."}
            </li>
            <li>
              <strong>{"Cookies de prefer\u00EAncias:"}</strong>
              {" permitem guardar as suas escolhas (como o consentimento de cookies)."}
            </li>
            <li>
              <strong>{"Cookies anal\u00EDticos:"}</strong>
              {" ajudam-nos a compreender como os visitantes utilizam o website."}
            </li>
          </ul>
          <p>
            {"Pode gerir ou desativar cookies nas configura\u00E7\u00F5es do seu navegador. A desativa\u00E7\u00E3o de cookies essenciais pode afetar a funcionalidade do website."}
          </p>

          <h2
            className="font-cormorant text-2xl font-semibold pt-4"
            style={{ color: "var(--color-dark)" }}
          >
            {"5. Conserva\u00E7\u00E3o dos Dados"}
          </h2>
          <p>
            {"Os dados pessoais s\u00E3o conservados apenas durante o per\u00EDodo necess\u00E1rio para as finalidades para as quais foram recolhidos, ou conforme exigido por lei."}
          </p>

          <h2
            className="font-cormorant text-2xl font-semibold pt-4"
            style={{ color: "var(--color-dark)" }}
          >
            {"6. Direitos do Titular dos Dados"}
          </h2>
          <p>{"Nos termos do RGPD, tem direito a:"}</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>{"Aceder aos seus dados pessoais"}</li>
            <li>{"Retificar dados incorretos ou incompletos"}</li>
            <li>{"Solicitar a elimina\u00E7\u00E3o dos seus dados"}</li>
            <li>{"Opor-se ao tratamento dos seus dados"}</li>
            <li>{"Solicitar a portabilidade dos dados"}</li>
            <li>{"Retirar o consentimento a qualquer momento"}</li>
          </ul>
          <p>
            {"Para exercer qualquer destes direitos, entre em contacto atrav\u00E9s do email ou telefone disponibilizados na p\u00E1gina de contactos."}
          </p>

          <h2
            className="font-cormorant text-2xl font-semibold pt-4"
            style={{ color: "var(--color-dark)" }}
          >
            {"7. Seguran\u00E7a"}
          </h2>
          <p>
            {"Adotamos medidas t\u00E9cnicas e organizativas adequadas para proteger os seus dados pessoais contra acesso n\u00E3o autorizado, perda, destrui\u00E7\u00E3o ou altera\u00E7\u00E3o."}
          </p>

          <h2
            className="font-cormorant text-2xl font-semibold pt-4"
            style={{ color: "var(--color-dark)" }}
          >
            {"8. Altera\u00E7\u00F5es \u00E0 Pol\u00EDtica"}
          </h2>
          <p>
            {"Reservamo-nos o direito de atualizar esta pol\u00EDtica a qualquer momento. Quaisquer altera\u00E7\u00F5es ser\u00E3o publicadas nesta p\u00E1gina com a data da \u00FAltima atualiza\u00E7\u00E3o."}
          </p>
        </div>
      </div>
    </main>
  );
}
