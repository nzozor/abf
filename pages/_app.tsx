import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local';

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
