import React from "react";
import type { Metadata } from 'next'
import { ThemeProvider, QueryProvider } from '@/providers'
import './globals.css'

export const metadata: Metadata = {
    title: 'Appointy',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru" suppressHydrationWarning>
        <body>
        <ThemeProvider>
            <QueryProvider>
                {children}
            </QueryProvider>
        </ThemeProvider>
        </body>
        </html>
    )
}
