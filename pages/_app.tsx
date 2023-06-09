import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local';
import Head from 'next/head';
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const begum = localFont({
  src: [
    {
      path: '../public/fonts/BegumSans/BegumSans-Regular.woff2',
      weight: '400',
    },
  ],
});
const grotesk = localFont({
    src: [
        {
            path: '../public/fonts/HK_Grotesk/HKGrotesk-Regular.woff2',
            weight: '400',
        },
    ],
});
export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
    const router = useRouter()
    useEffect(() => {
        import('react-facebook-pixel')
            .then((x) => x.default)
            .then((ReactPixel) => {
                ReactPixel.init('1291372741815383') // facebookPixelId
                ReactPixel.pageView()

                router.events.on('routeChangeComplete', () => {
                    ReactPixel.pageView()
                })
            })
    }, [router.events])
    return (
      <>
          <Head>
              <title>A BODY FOREVER | 90 DAY ELEVATED PROGRAMME</title>
              <link rel="shortcut icon" href="/cropped-favicon-2-32x32.png" />
              <meta name="facebook-domain-verification" content="m82mr5nth1zt0ge4u7ppcocl3fyn0i" />
              <meta property="og:image" content="https://www.abodyforeverprogramme.com/_next/image?url=%2FABF_Font-Page-Image-02.png&w=3840&q=75" />
              <meta property="og:url" content="https://www.abodyforeverprogramme.com/" />
              <meta property="og:title" content="A BODY FOREVER | 90 DAY ELEVATED PROGRAMME" />
              <meta property="og:description" content="Are you a busy woman looking to feel happy, healthy, and more confident in both your body and mind? Look no further than A Body Forever - the online wellness platform designed for you! Our simple and effective program can be done anywhere, anytime without completely disrupting your life." />
              <meta property="og:image:alt" content="A Body Forever Logo" />



          </Head>
        <style jsx global>{`
        :root {
          /* ... */
          --begum-font: ${begum.style.fontFamily};
          --grotesk-font: ${grotesk.style.fontFamily};
        }
      `}</style>
      <main className={begum.className}>
        <Component {...pageProps} />
      </main>
      </>
  );
}
