import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
      <Head />

      {/* script for google analytics, but not active right now, using other analytics options


        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KNXHZ6M97N"></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-KNXHZ6M97N'); 
             `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-56LJF29P');
              `,
          }}
        />

        */ }
      <body>

        {/* try when site is up

        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-56LJF29P"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />

        */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
