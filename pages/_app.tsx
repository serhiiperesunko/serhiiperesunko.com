import type { AppProps } from 'next/app'
import Script from 'next/script'
import "normalize.css"
import "./app.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  return <>
   {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-HLN5SPK43Y"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-HLN5SPK43Y');
        `}
      </Script>
      <Component {...pageProps} />
  </>
}
