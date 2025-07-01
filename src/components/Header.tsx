import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../utils/constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { to: '/', label: 'Accueil' },
    { to: '/services', label: 'Services' },
    { to: '/pricing', label: 'Tarifs' },
    { to: '/about', label: 'À Propos' },
    { to: '/contact', label: 'Contact' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full z-50 bg-primary-black shadow-lg">
      <div className="container-max">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/src/images/logo.png" 
              alt={`${COMPANY_INFO.name} Logo`}
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
            <span className="text-2xl font-bold text-white">
              {COMPANY_INFO.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`font-medium transition-colors duration-200 hover:text-primary-orange ${
                  location.pathname === item.to
                    ? 'text-primary-orange border-b-2 border-primary-orange pb-1'
                    : 'text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center space-x-2 text-gray-300 hover:text-primary-orange transition-colors"
            >
              <Phone size={18} />
              <span className="font-medium">{COMPANY_INFO.phone}</span>
            </a>
            <Link to="/contact" className="btn-primary">
              Demander une Démo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-primary-orange transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-primary-black border-t border-gray-700 animate-fade-in">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`block px-4 py-3 font-medium transition-colors duration-200 hover:bg-gray-800 hover:text-primary-orange ${
                    location.pathname === item.to
                      ? 'text-primary-orange bg-gray-800'
                      : 'text-gray-300'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 py-3 border-t border-gray-700 space-y-3">
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center space-x-2 text-gray-300 hover:text-primary-orange transition-colors"
                >
                  <Phone size={18} />
                  <span className="font-medium">{COMPANY_INFO.phone}</span>
                </a>
                <Link 
                  to="/contact" 
                  className="btn-primary w-full text-center block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Demander une Démo
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;