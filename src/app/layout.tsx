import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Returns Triage Desk — Streamline E-commerce Returns',
  description: 'The Returns Triage Desk transforms chaotic return requests into a structured, prioritized queue, enabling e-commerce operations managers to efficiently process returns and generate immediate ROI reports.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed top-0 left-0 right-0 z-50 bg-zinc-900 text-zinc-100 text-xs px-4 py-2 flex justify-between items-center">
          <span>⚡ Demo Mode — Returns Triage Desk · Built with NEXUS OS</span>
          <Link href="/dashboard" className="text-white hover:text-zinc-300 transition-colors">
            Open Dashboard →
          </Link>
        </div>
        <div className="pt-9 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}