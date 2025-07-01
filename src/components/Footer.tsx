import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../utils/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-black text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/logo.png" 
                alt={`${COMPANY_INFO.name} Logo`}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Votre partenaire de confiance pour des services de centre d'appels francophones 
              de haute qualité en Europe et en Afrique.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary-orange">Navigation</h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Accueil' },
                { to: '/services', label: 'Services' },
                { to: '/pricing', label: 'Tarifs' },
                { to: '/about', label: 'À Propos' },
                { to: '/contact', label: 'Contact' }
              ].map((item) => (
                <li key={item.to}>
                  <Link 
                    to={item.to}
                    className="text-gray-300 hover:text-primary-orange transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary-orange">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Centre d'Appels</li>
              <li>Support Client</li>
              <li>Chat en Direct</li>
              <li>Support Technique</li>
              <li>Prise de RDV</li>
              <li>Recouvrement</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary-orange">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="text-primary-orange mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300">{COMPANY_INFO.phone}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="text-primary-orange mt-1 flex-shrink-0" size={18} />
                <div>
                  <a 
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-gray-300 hover:text-primary-orange transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-primary-orange mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300">{COMPANY_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="text-primary-orange mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300">{COMPANY_INFO.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {COMPANY_INFO.name}. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-primary-orange transition-colors">
                Confidentialité
              </Link>
              <Link to="/terms" className="hover:text-primary-orange transition-colors">
                Conditions
              </Link>
              <Link to="/rgpd" className="hover:text-primary-orange transition-colors">
                RGPD
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;