"use client";

import Script from "next/script";
import { GA_MEASUREMENT_ID } from "@/lib/consent";

/**
 * Google Analytics 4 (gtag.js) with Consent Mode v2.
 *
 * Tracking starts DENIED by default (RGPD). The CookieConsent banner calls
 * updateConsent() when the user clicks Aceitar/Rejeitar. Returning visitors who
 * already accepted have their consent restored on load, before `config` runs.
 */
export default function Analytics() {
  return (
    <>
      <Script id="ga-consent-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            wait_for_update: 500
          });
          try {
            if (localStorage.getItem('cookie-consent') === 'accepted') {
              gtag('consent', 'update', {
                ad_storage: 'granted',
                ad_user_data: 'granted',
                ad_personalization: 'granted',
                analytics_storage: 'granted'
              });
            }
          } catch (e) {}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <Script
        id="ga-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
    </>
  );
}
