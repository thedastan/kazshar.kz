import Head from "next/head";
import Script from "next/script";
import {
	SEO_DESCRIPTION,
	SEO_KEY_WORDS,
	SITE_NAME,
} from "@/constants/seo/seo.constants";
import { THEME_COLOR } from "@/config/_variables.config";

const CustomHead = () => {
	return (
		<>
			<Head>
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

				<meta name="description" content={SEO_DESCRIPTION} />
				<meta property="og:title" content={SITE_NAME} />
				<meta property="og:description" content={SEO_KEY_WORDS} />

				<meta
					name="apple-mobile-web-app-status-bar-style"
					content="black-translucent"
				/>
				<meta name="robots" content="index, follow" />
				<meta
					property="og:image"
					content="https://metallomir.kg/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.f55e7955.png&w=750&q=75"
				/>
				<meta property="og:url" content="https://kashar.kz" />
				<meta property="og:type" content="website" />
			</Head>

			{/* Google Analytics */}
			<Script
				async
				src="https://www.googletagmanager.com/gtag/js?id=AW-16905269424"
				strategy="afterInteractive"
			/>
			<Script
				id="google-analytics"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16905269424');
          `,
				}}
			/>
		</>
	);
};

export default CustomHead;
