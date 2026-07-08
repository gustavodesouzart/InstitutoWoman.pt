// Google Consent Mode v2 helpers.
// The GA4 measurement ID feeds Google Ads (via linked conversions). It is not a
// secret, so we hardcode a sensible fallback and allow an env override — same
// convention as SITE_URL in lib/seo.ts.
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID ?? "G-PTYQYHF78Z";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

// The four Consent Mode v2 signals, toggled together by the cookie banner.
const CONSENT_KEYS = [
  "ad_storage",
  "ad_user_data",
  "ad_personalization",
  "analytics_storage",
] as const;

function consentState(value: "granted" | "denied") {
  return Object.fromEntries(CONSENT_KEYS.map((key) => [key, value]));
}

/**
 * Push a Consent Mode update to Google after the user chooses in the RGPD
 * banner. `granted` = Aceitar, `false` = Rejeitar (explicitly denied).
 */
export function updateConsent(granted: boolean) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("consent", "update", consentState(granted ? "granted" : "denied"));
}
