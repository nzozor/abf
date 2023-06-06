import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local';
import Head from 'next/head';

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
  return (
      <>
          <Head>
              <title>A BODY FOREVER | 90 DAY ELEVATED PROGRAMME</title>

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
