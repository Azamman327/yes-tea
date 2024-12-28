'use client';

import './globals.css';
import { Provider } from "@/components/ui/provider";
import { ChakraProvider } from '@chakra-ui/react';
import { defaultSystem } from "@chakra-ui/react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=375" />
        <title>not car, yes tea</title>
      </head>
      <body><ChakraProvider value={defaultSystem}>{children}</ChakraProvider></body>
    </html>
  );
}
