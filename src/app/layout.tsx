import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import AppShell from '@/components/AppShell';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: "Nili's Nail & Beauty Lounge | Luxury Salon",
  description: 'Redefining beauty through a lens of luxury and grace. Your sanctuary for personalized beauty care.',
  icons: {
    icon: "/Nili's logo.pdf.png",
    shortcut: "/Nili's logo.pdf.png",
    apple: "/Nili's logo.pdf.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
