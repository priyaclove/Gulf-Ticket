"use client";
import { useState } from "react";
import { Earth, CircleDollarSign } from 'lucide-react';

const navItems = [
    { label: "Buy Now", dropdown: true },
    { label: "How To Play", dropdown: false },
    { label: "Draws", dropdown: true },
    { label: "Promotions", dropdown: false },
];

export default function Navbar() {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <header className="bg-[#ffa533] px-6 md:px-10 py-4 shadow-sm  text-[#A25C00]">
            <div className=" mx-auto flex items-center justify-between py-4">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src="/foot-logo.png" alt="Logo" className="h-16" />
                </div>

                {/* Nav Links */}
                <nav className="hidden md:flex gap-6 relative">
                    {navItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative"
                            onMouseEnter={() => item.dropdown && setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <a
                                href="#"
                                className="text-base font-medium hover:text-orange-500 transition"
                            >
                                {item.label}
                            </a>
                            {hovered === index && item.dropdown && (
                                <div className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md px-4 py-2 z-10 w-48">
                                    <p className="py-1">Option 1</p>
                                    <p className="py-1">Option 2</p>
                                    <p className="py-1">Option 3</p>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Language, Currency, and Auth */}
                <div className="flex items-center gap-4">
                    <div className="relative group">
                        <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 text-black text-sm cursor-pointer">
                            <Earth className="text-[#DE9300]" />
                            EN <span className="ml-1">▼</span>
                        </div>


                        <div className="absolute top-full left-0 mt-2 w-32 bg-white text-black shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
                            {["EN", "AR", "FR", "DE", "ES", "ZH", "RU", "HI"].map((lang) => (
                                <div
                                    key={lang}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                >
                                    {lang}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 text-black text-sm cursor-pointer">
                            <CircleDollarSign className="text-[#DE9300]" />
                            AED <span className="ml-1">▼</span>
                        </div>

                        {/* Dropdown */}
                        <div className="absolute top-full left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
                            {["AED", "USD", "INR", "EUR", "GBP", "CAD", "AUD", "JPY"].map((cur) => (
                                <div
                                    key={cur}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                >
                                    {cur}
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="border border-[#DE9300] text-[#A25C00] rounded-full px-6 py-4 text-xl font-semibold hover:bg-[#DE9300] hover:text-white transition">
                        Login
                    </button>
                    <button className="bg-[#DE9300] text-white rounded-full px-8 py-4 text-xl font-semibold ">
                        Create Account
                    </button>
                </div>
            </div>
        </header>
    );
}
