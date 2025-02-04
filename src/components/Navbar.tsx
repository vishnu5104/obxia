"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import type React from "react"; // Added import for React

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-gray-300 hover:text-white transition-colors"
  >
    {children}
  </Link>
);

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-white text-xl font-bold">
                Web3 AI Agent
              </span>
            </Link>
            <div className="hidden md:block ml-10 flex items-baseline space-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/features">Features</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <Button
              asChild
              variant="outline"
              className="text-zinc-600 border-white hover:bg-white hover:text-gray-900"
            >
              <Link href="/login">Login</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/features">Features</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <Button
              asChild
              variant="outline"
              className="w-full text-white border-white hover:bg-white hover:text-gray-900"
            >
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
