import React from "react";
import { QueryProvider } from '@/providers/query-provider'
import './globals.css'

export default function RootLayout({
                                       children,
                                   } : {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
        <body>
        <QueryProvider>
            {children}
        </QueryProvider>
        </body>
        </html>
    )
}
