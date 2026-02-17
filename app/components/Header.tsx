"use client"

import React from 'react'
import Logo from './Logo'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/50 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-12">
          {['Features', 'About', 'Reviews'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-8">
          <button className="hidden sm:block text-sm font-bold uppercase tracking-widest text-white hover:text-primary transition-colors">
            Sign In
          </button>
          <button className="bg-white text-black text-sm font-black uppercase px-8 py-3 rounded-none shadow-brutalist hover-shadow-brutalist transition-all">
            Get the Book
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header