import Script from "next/script";
import {
  SEO_DESCRIPTION_RU,
  SEO_KEY_WORDS_RU,
  SITE_NAME,
} from "@/constants/seo/seo.constants";
import { THEME_COLOR } from "@/config/_variables.config";

const Head = () => {
  return (
    <>
      <head>
        <meta name="theme-color" content={THEME_COLOR} />
        <meta
          name="google-site-verification"
          content="fQ0IqJz2eTDIDxVnU7cEV8OYPUrHscc9wXzSRQaozgY"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/icon-192x192.png"
        />

        <meta name="description" content={SEO_DESCRIPTION_RU} />
        <meta property="og:title" content={SITE_NAME} />
        <meta property="og:description" content={SEO_KEY_WORDS_RU} />

        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:image"
          content="https://metallomir.kg/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.f55e7955.png&w=750&q=75"
        />
        <meta property="og:url" content="https://kazshar.kz" />
        <meta property="og:type" content="website" />
      </head>

      {/* Google Tag (gtag.js) */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-17044270906"
        strategy="afterInteractive"
      />
      <Script
        id="google-tag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17044270906');
          `,
        }}
      />

      {/* Conversion tracking (optional — only if you want it on all pages) */}
      <Script
        id="google-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {
              send_to: 'AW-17044270906/e5sCKTg3r8aELreq78',
              value: 1.0,
              currency: 'USD'
            });
          `,
        }}
      />
    </>
  );
};

export default Head;
