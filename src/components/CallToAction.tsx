import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../utils/constants';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-primary-black via-secondary-gray to-primary-black text-white section-padding">
      <div className="container-max">
        <div className="text-center animate-slide-up">
          
          {/* Main CTA Content */}
          <div className="max-w-4xl mx-auto mb-12">
            <span className="text-primary-orange font-semibold text-lg mb-4 block">
              Prêt à Commencer ?
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Boostez Votre Canal de{' '}
              <span className="text-primary-orange">Communication</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Rejoignez plus de 50 entreprises qui ont déjà transformé leur service client 
              avec nos solutions expertes. Démarrez votre transformation dès aujourd'hui.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link 
              to="/contact" 
              className="group bg-primary-orange hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3 animate-pulse-glow"
            >
              <MessageCircle size={24} />
              <span>Planifier un Appel Découverte</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            
            <a 
              href={`tel:${COMPANY_INFO.phone}`}
              className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center space-x-3"
            >
              <Phone size={24} />
              <span>Appelez Maintenant</span>
            </a>
          </div>

          {/* Quick Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-300">Démo gratuite disponible</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-300">Sans engagement initial</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-300">Setup en 48h seulement</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">
              Contactez Notre Équipe Directement
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <Phone className="text-primary-orange mx-auto mb-3" size={24} />
                <div className="font-semibold mb-1">Téléphone</div>
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-primary-orange hover:text-orange-400 transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="text-center">
                <MessageCircle className="text-primary-orange mx-auto mb-3" size={24} />
                <div className="font-semibold mb-1">Email</div>
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-primary-orange hover:text-orange-400 transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
            
            <div className="mt-6 text-center text-gray-300">
              <div className="font-medium">{COMPANY_INFO.hours}</div>
              <div className="text-sm">Réponse garantie sous 2h pendant les heures ouvrables</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;