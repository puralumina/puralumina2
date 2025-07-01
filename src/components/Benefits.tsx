import React from 'react';
import { Check, Shield, Clock, Users, TrendingUp, Settings } from 'lucide-react';
import { BENEFITS } from '../utils/constants';

const Benefits: React.FC = () => {
  const icons = [Users, Clock, Shield, TrendingUp, TrendingUp, Settings];

  return (
    <section className="bg-white section-padding">
      <div className="container-max">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-primary-orange font-semibold text-lg mb-2 block">
            Nos Avantages
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-6">
            Pourquoi Choisir Pura Lumina ?
          </h2>
          <p className="text-xl text-secondary-gray max-w-3xl mx-auto">
            Découvrez les avantages qui font de nous le partenaire idéal 
            pour vos besoins en communication client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => {
            const IconComponent = icons[index];
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white to-secondary-light border border-gray-200 card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center group-hover:bg-primary-orange group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="text-primary-orange group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary-black mb-3 group-hover:text-primary-orange transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-secondary-gray leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Benefits Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-black to-secondary-gray rounded-2xl p-8 md:p-12 text-white animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                Des Résultats Mesurables
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Notre approche centrée sur les résultats vous garantit un retour sur investissement optimal. 
                Nous mesurons notre succès par votre satisfaction et celle de vos clients.
              </p>
              
              <div className="space-y-4">
                {[
                  "Augmentation moyenne du taux de satisfaction de 40%",
                  "Réduction des coûts opérationnels jusqu'à 60%",
                  "Amélioration du temps de réponse de 75%",
                  "Support multilingue francophone expert"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-white" size={16} />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary-orange mb-2">+40%</div>
                <div className="text-gray-300">Satisfaction Client</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary-orange mb-2">-60%</div>
                <div className="text-gray-300">Coûts Réduits</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary-orange mb-2">75%</div>
                <div className="text-gray-300">Temps Réponse</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary-orange mb-2">24/7</div>
                <div className="text-gray-300">Disponibilité</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;