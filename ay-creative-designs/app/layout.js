import { Familjen_Grotesk, Hanken_Grotesk } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site } from '@/lib/data';
import './globals.css';

const display = Familjen_Grotesk({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const body = Hanken_Grotesk({ subsets: ['latin'], variable: '--font-body', display: 'swap' });

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Graphic design studio`, template: `%s | ${site.name}` },
  description: 'Brand identity, packaging, print and digital graphics for clients in the US, UK and worldwide.',
  openGraph: { title: site.name, description: site.tagline, url: site.url, siteName: site.name, type: 'website' },
};
export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#F7F7F5' };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
