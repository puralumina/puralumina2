import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../utils/constants';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-secondary-light section-padding">
      <div className="container-max">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-primary-orange font-semibold text-lg mb-2 block">
            Témoignages Clients
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-6">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-xl text-secondary-gray max-w-3xl mx-auto">
            Découvrez pourquoi nos clients font confiance à Pura Lumina 
            pour leurs besoins en communication client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="text-primary-orange opacity-20" size={48} />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={18} />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-secondary-gray text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-black">
                      {testimonial.name}
                    </h4>
                    <p className="text-secondary-gray text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 animate-fade-in">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary-black mb-4">
                Ils Nous Font Confiance
              </h3>
              <p className="text-secondary-gray">
                Secteurs d'activité de nos clients partenaires
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { sector: "Assurances", count: "15+" },
                { sector: "E-commerce", count: "20+" },
                { sector: "ONG", count: "8+" },
                { sector: "Télécom", count: "12+" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-orange mb-2">
                    {item.count}
                  </div>
                  <div className="text-secondary-gray font-medium">
                    {item.sector}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Satisfaction Metrics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
          <div className="bg-primary-black rounded-xl p-8 text-white text-center">
            <div className="text-4xl font-bold text-primary-orange mb-2">4.9/5</div>
            <div className="text-gray-300">Note Moyenne</div>
          </div>
          <div className="bg-primary-black rounded-xl p-8 text-white text-center">
            <div className="text-4xl font-bold text-primary-orange mb-2">98%</div>
            <div className="text-gray-300">Clients Satisfaits</div>
          </div>
          <div className="bg-primary-black rounded-xl p-8 text-white text-center">
            <div className="text-4xl font-bold text-primary-orange mb-2">95%</div>
            <div className="text-gray-300">Taux de Rétention</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;