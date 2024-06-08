import React from 'react'
import { Metadata } from 'next';
import "@/assets/globals.css"
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
    title: "Hi mom",
    description: "Hi mom",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <Navbar></Navbar>
                <main>{children}</main>
            </body>
        </html >
    )
}

export default Layout
