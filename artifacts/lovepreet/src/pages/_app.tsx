import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Lenis from 'lenis';
import { InquiryProvider } from '@/components/InquiryContext';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { InquiryDrawer } from '@/components/InquiryDrawer';
import { StickyMobileCTA } from '@/components/home/StickyMobileCTA';
import '@/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <InquiryProvider>
        <Nav />
        <Component {...pageProps} />
        <Footer />
        <InquiryDrawer />
        <StickyMobileCTA />
      </InquiryProvider>
    </>
  );
}
