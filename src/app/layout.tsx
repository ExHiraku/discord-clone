import '../styles/globals.css';

import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

import { ClerkProvider } from '@clerk/nextjs';
import { ModalProvider } from '@/components/providers/modal-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';

import { cn } from '@/lib/utils';
import { SocketProvider } from '@/components/providers/socket-provider';
import { QueryProvider } from '@/components/providers/query-provider';

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Excord',
  description: 'Discord Clone developed by ExHiraku',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(font.className, "bg-white dark:bg-[#313338]")}>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem={false}
            storageKey='excord-theme'
          >
            <SocketProvider>
              <ModalProvider />
              <QueryProvider>
                {children}
              </QueryProvider>
            </SocketProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
