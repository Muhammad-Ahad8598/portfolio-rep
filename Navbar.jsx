"use client"
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full bg-yellow-500 shadow-md">
            <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
                {/* Logo */}
                <div className="text-white font-black text-2xl">Ahad's Portfolio</div>

                {/* Hamburger Menu Button */}
                <button
                    className="lg:hidden text-white text-3xl focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✖" : "☰"}
                </button>

                {/* Mobile Menu */}
                <ul
                    className={`absolute top-16 left-0 w-full bg-yellow-500 lg:hidden flex flex-col items-center space-y-4 py-6 text-lg font-semibold transition-all duration-300 shadow-md ${
                        isOpen ? "block" : "hidden"
                    }`}
                >
                    <li className="w-full text-center py-2 hover:bg-yellow-600 transition">
                        <Link href="/home" onClick={() => setIsOpen(false)}>Home</Link>
                    </li>
                    <li className="w-full text-center py-2 hover:bg-yellow-600 transition">
                        <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                    </li>
                    <li className="w-full text-center py-2 hover:bg-yellow-600 transition">
                        <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                    </li>
                </ul>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center gap-10 text-lg font-semibold">
                    <li className="text-white hover:text-black transition">
                        <Link href="/home">Home</Link>
                    </li>
                    <li className="text-white hover:text-black transition">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="text-white hover:text-black transition">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
