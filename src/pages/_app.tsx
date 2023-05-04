import { AnimalProvider } from '@/providers/AnimalProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimalProvider>
      <Component {...pageProps} />
    </AnimalProvider>
  );
}
