import React from 'react';
import { Phone, MessageCircle, Headphones, Clock } from 'lucide-react';
import { SERVICES } from '../utils/constants';

const Services: React.FC = () => {
  return (
    <section className="bg-secondary-light section-padding">
      <div className="container-max">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-primary-orange font-semibold text-lg mb-2 block">
            Nos Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-6">
            Solutions Complètes de Communication
          </h2>
          <p className="text-xl text-secondary-gray max-w-3xl mx-auto">
            Découvrez notre gamme complète de services conçus pour optimiser 
            vos interactions clients et booster votre croissance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Centre d'Appels Services */}
          <div className="animate-slide-up">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-primary-orange rounded-lg flex items-center justify-center">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-primary-black">
                Services de Centre d'Appels
              </h3>
            </div>
            
            <div className="space-y-4">
              {SERVICES.callCenter.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm card-hover"
                >
                  <h4 className="text-lg font-semibold text-primary-black mb-2">
                    {service.title}
                  </h4>
                  <p className="text-secondary-gray">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Support Client Services */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-primary-orange rounded-lg flex items-center justify-center">
                <Headphones className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-primary-black">
                Services de Support Client
              </h3>
            </div>
            
            <div className="space-y-4">
              {SERVICES.customerSupport.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm card-hover"
                >
                  <h4 className="text-lg font-semibold text-primary-black mb-2">
                    {service.title}
                  </h4>
                  <p className="text-secondary-gray">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-20 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary-black mb-4">
              Notre Processus en 4 Étapes
            </h3>
            <p className="text-secondary-gray text-lg">
              Un processus simple et efficace pour démarrer rapidement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analyse",
                description: "Évaluation de vos besoins et définition des objectifs"
              },
              {
                step: "02", 
                title: "Configuration",
                description: "Mise en place des outils et formation des équipes"
              },
              {
                step: "03",
                title: "Lancement",
                description: "Démarrage progressif avec suivi rapproché"
              },
              {
                step: "04",
                title: "Optimisation",
                description: "Amélioration continue basée sur les performances"
              }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h4 className="text-xl font-semibold text-primary-black mb-2">
                  {item.title}
                </h4>
                <p className="text-secondary-gray">
                  {item.description}
                </p>
                
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;