import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CoinCache - Coins & Currency',
  description: 'The ultimate coins & currency management platform. Track, value, and trade your collection.',
  keywords: 'coins, currency, numismatics, rare coins, bullion, PCGS, NGC',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
