import { useState } from 'react'

export default function Header({ isMenuOpen, setIsMenuOpen }) {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Vision', href: '#vision' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Team', href: '#team' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="font-bold text-xl">V</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                VoosTech
              </h1>
              <p className="text-xs text-gray-400">Digital Innovation 2.0</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 hover:scale-105"
              >
                {item.name}
              </a>
            ))}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-semibold mt-4 transition-colors duration-300">
                Start Project
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}