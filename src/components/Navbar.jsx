import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Colecciones', href: '#colecciones' },
  { label: 'Sobre Mí', href: '#sobre-mi' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#inicio" className="navbar__brand" onClick={(e) => handleLinkClick(e, '#inicio')}>
          <img src="/logo.png" alt="Perle Noire" className="navbar__logo" />
          <span className="navbar__name">Perle Noire</span>
        </a>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`}>
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="navbar__mobile-link"
              onClick={(e) => handleLinkClick(e, link.href)}
              initial={{ opacity: 0, y: 20 }}
              animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
}
