import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Teja Swaroop - Full Stack Developer & AI Specialist',
  description: 'Premium portfolio showcasing cutting-edge web development, AI solutions, and innovative digital experiences. Available for freelance projects and collaborations.',
  keywords: ['Full Stack Developer', 'AI Specialist', 'React', 'Next.js', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Teja Swaroop' }],
  openGraph: {
    title: 'Teja Swaroop - Full Stack Developer & AI Specialist',
    description: 'Premium portfolio showcasing cutting-edge web development, AI solutions, and innovative digital experiences.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Teja Swaroop Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teja Swaroop - Full Stack Developer & AI Specialist',
    description: 'Premium portfolio showcasing cutting-edge web development, AI solutions, and innovative digital experiences.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}