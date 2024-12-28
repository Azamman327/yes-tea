'use client';

import './globals.css';
import { Provider } from "@/components/ui/provider"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=375" />
        <title>not car, yes tea</title>
      </head>
      <body><Provider>{children}</Provider></body>
    </html>
  );
}
