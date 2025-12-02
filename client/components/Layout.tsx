import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Committee", href: "/committee" },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-white dark:bg-slate-950 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="SWALAH logo" className="w-20  h-23 object-fill" />
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-foreground">SWALAH</h1>
                <p className="text-xs text-muted-foreground">THE STUDENTS WING FOR ARTS AND LITERARY ACTIVITIES OF HIDAYA</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex gap-4">
              <Link
                to="/contact"
                className="px-5 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 space-y-2 pt-4 border-t border-border">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-4 py-2 rounded hover:bg-muted text-sm font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block px-4 py-2 rounded bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-slate-50 dark:bg-slate-900 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.svg" alt="SWALAH mark" className="w-8 h-8 object-contain rounded-lg" />
                <h3 className="font-bold text-foreground">SWALAH</h3>
              </div>
              <p className="text-sm text-muted-foreground">THE STUDENTS WING FOR ARTS AND LITERARY ACTIVITIES OF HIDAYA</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="hover:text-primary transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/committee" className="hover:text-primary transition-colors">
                    Committee
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:hello@swalah.edu"
                    className="text-primary hover:underline"
                  >
                    hello@swalah.edu
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a href="tel:+911234567890" className="text-primary hover:underline">
                    +91 (123) 456-7890
                  </a>
                </li>
                <li>Room 101, Student Center</li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  f
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  t
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  i
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 SWALAH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
