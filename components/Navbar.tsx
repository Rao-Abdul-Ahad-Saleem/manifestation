"use client";

import Link from "next/link";
import { useState } from "react";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-[#262324]">
      {/* Top Info Section */}
      <div className="border-b border-slate-200/70 dark:border-[#3d3a3b] bg-slate-50 dark:bg-[#2d2a2b]">
        <div className="container mx-auto px-5 lg:px-10 py-3">
          <div className="flex flex-wrap gap-6 justify-center lg:justify-end text-xs lg:text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Email:</span>
              <Link href="mailto:hello@estimationpro.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                hello@estimationpro.com
              </Link>
            </div>
            <div className="hidden sm:flex items-center gap-2 border-l border-slate-300 dark:border-[#3d3a3b] pl-6">
              <span className="font-semibold">Phone:</span>
              <Link href="tel:+12145551234" className="hover:text-blue-600 dark:hover:text-blue-400">
                +1 (214) 555-1234
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-2 border-l border-slate-300 dark:border-[#3d3a3b] pl-6 text-blue-600 dark:text-blue-400 font-semibold">
              🎉 Limited Time Offer - 20% Off!
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar Section */}
      <div className="border-b border-slate-200/70 dark:border-[#3d3a3b]">
        <div className="container mx-auto px-5 lg:px-10 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                EstimationPro
              </div>
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center gap-2 lg:gap-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm lg:text-base font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Hamburger Button - Mobile */}
            <button
              className="md:hidden h-6 w-6 flex flex-col justify-center space-y-1.5 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`h-0.5 w-6 bg-slate-900 dark:bg-slate-100 transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`h-0.5 w-6 bg-slate-900 dark:bg-slate-100 transition-all ${isMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`h-0.5 w-6 bg-slate-900 dark:bg-slate-100 transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-60" : "max-h-0"}`}>
            <div className="flex flex-col pt-4 space-y-3 border-t border-slate-200/70 dark:border-[#3d3a3b]">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
