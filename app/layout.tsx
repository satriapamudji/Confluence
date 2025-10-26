import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://confluence-hg.netlify.app'),
  title: 'Confluence @ Hougang | Elevated Living, Naturally Integrated',
  description: 'Where smart innovation meets natural serenity in Hougang\'s most connected community. A nature-infused sanctuary where everything is effortlessly within reach.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Confluence @ Hougang | Elevated Living, Naturally Integrated',
    description: 'Smart innovation meets natural serenity at Hougang\'s heart. Live surrounded by lush greenery while staying seamlessly connected to everything that matters.',
    url: 'https://confluence-hg.netlify.app',
    siteName: 'Confluence @ Hougang',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Confluence @ Hougang - Elevated Living, Naturally Integrated',
      },
    ],
    locale: 'en_SG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Confluence @ Hougang | Elevated Living, Naturally Integrated',
    description: 'Smart innovation meets natural serenity. Urban forest living in Hougang\'s most seamlessly connected community.',
    images: {
      url: '/og-image.png',
      alt: 'Confluence @ Hougang - Elevated Living, Naturally Integrated'
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col overflow-x-hidden pb-[var(--sab)]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}