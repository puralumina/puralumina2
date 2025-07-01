import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { COMPANY_INFO } from '../utils/constants';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-black via-secondary-gray to-primary-black text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-orange rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container-max section-padding">
        <div className="min-h-[80vh] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">                
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  <span className="text-primary-orange">Services de Centre d'Appels</span>{' '}
                  <span className="text-white">Francophones avec une</span>{' '}
                  <span className="text-primary-orange">Expertise Humaine</span>{' '}
                  <span className="text-white">de Qualité</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                  {COMPANY_INFO.description}
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary-orange">24/7</div>
                  <div className="text-gray-300 text-sm">Disponibilité</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary-orange">100%</div>
                  <div className="text-gray-300 text-sm">Francophone</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary-orange">RGPD</div>
                  <div className="text-gray-300 text-sm">Conforme</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="group bg-primary-orange hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Demander une Démo Gratuite</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                
                <button className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <Play size={20} />
                  <span>Voir la Présentation</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-6 border-t border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300 text-sm">Équipes disponibles maintenant</span>
                </div>
                <div className="text-gray-300 text-sm">
                  ⭐ 4.9/5 - Satisfaction client
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative animate-fade-in">
              <div className="relative bg-gradient-to-br from-primary-orange/20 to-transparent p-8 rounded-3xl backdrop-blur-sm border border-primary-orange/30">
                
                {/* Mockup Elements */}
                <div className="space-y-6">
                  {/* Call Interface Mockup */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-white font-medium">Appel en cours</span>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 bg-primary-orange/60 rounded-full w-3/4"></div>
                      <div className="h-2 bg-white/30 rounded-full w-1/2"></div>
                      <div className="h-2 bg-white/30 rounded-full w-2/3"></div>
                    </div>
                  </div>

                  {/* Statistics Mockup */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="text-primary-orange text-2xl font-bold">156</div>
                      <div className="text-white/80 text-sm">Appels aujourd'hui</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="text-primary-orange text-2xl font-bold">98%</div>
                      <div className="text-white/80 text-sm">Satisfaction</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-orange/30 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/20 rounded-full blur-xl animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;