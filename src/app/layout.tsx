import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yaboroo Imperium Party (in formation) — Official Holding Website',
  description:
    'Official public holding website for the Yaboroo Imperium Party (in formation). Register your interest and stay informed.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
