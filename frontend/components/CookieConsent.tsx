"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
      style={{ background: "rgba(44, 26, 14, 0.95)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <div className="flex-1 text-sm md:text-base" style={{ color: "#FAF7F4" }}>
          <p>
            {"Este website utiliza cookies para melhorar a sua experi\u00EAncia de navega\u00E7\u00E3o. Ao continuar a navegar, concorda com a nossa "}
            <a
              href="/politica-privacidade"
              className="underline transition-colors"
              style={{ color: "var(--color-gold-light)" }}
            >
              {"Pol\u00EDtica de Privacidade"}
            </a>
            {" e com o uso de cookies, conforme o RGPD (Regulamento Geral de Prote\u00E7\u00E3o de Dados)."}
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={reject}
            className="px-5 py-2.5 rounded-full text-sm font-medium transition-colors border"
            style={{
              borderColor: "var(--color-gold)",
              color: "var(--color-gold-light)",
              background: "transparent",
            }}
          >
            Rejeitar
          </button>
          <button
            onClick={accept}
            className="px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
            style={{
              background: "var(--color-gold)",
              color: "#FAF7F4",
            }}
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
