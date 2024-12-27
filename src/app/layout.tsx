'use client';

import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=375" />
        <title>not car, yes tea</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
