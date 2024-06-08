"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import About from './About'

const Navbar = () => {
    const path = usePathname()
    const active_props = "bg-black"
    return (
        <nav className="bg-blue-700 border-b border-blue-500">
            <div className="px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-20 items-center justify-between">
                    <div
                        className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                    >
                        <a className="flex flex-shrink-0 items-center" href="/">

                            <span className="hidden md:block text-white text-2xl font-bold ml-2"
                            >Vlad.dev</span
                            >
                        </a>
                    </div>
                    <div className="flex flex-1 items-center justify-end">
                        <div className="hidden md:ml-6 md:block">
                            <div className="flex space-x-0">
                                <Link href="/" className={`text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 ${path === "/" ? active_props : ""}`} > Home</Link>
                                <Link href="#about-section" className={`text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 ${path === "/about" ? active_props : ""}`} > About</Link>
                                <Link href="/projects" className={`text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 ${path === "/projects" ? active_props : ""}`} > Projects</Link>
                                <Link href="/contact" className={`text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 ${path === "/contact" ? active_props : ""}`} > Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar
