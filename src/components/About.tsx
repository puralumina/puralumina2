import React from 'react';
import { Users, Globe, Shield, Award } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Users className="text-primary-orange" size={32} />,
      title: "Expertise Humaine",
      description: "Équipe formée aux standards européens avec une approche personnalisée"
    },
    {
      icon: <Globe className="text-primary-orange" size={32} />,
      title: "Portée Internationale",
      description: "Basés au Cameroun, nous servons l'Europe et l'Afrique efficacement"
    },
    {
      icon: <Shield className="text-primary-orange" size={32} />,
      title: "Sécurité & Conformité",
      description: "Respect strict du RGPD et des normes de sécurité internationales"
    },
    {
      icon: <Award className="text-primary-orange" size={32} />,
      title: "Qualité Certifiée",
      description: "Processus optimisés et satisfaction client garantie"
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-max">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-primary-orange font-semibold text-lg mb-2 block">
            À Propos de Pura Lumina
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-6">
            Votre Partenaire de Confiance
          </h2>
          <p className="text-xl text-secondary-gray max-w-3xl mx-auto leading-relaxed">
            Basés au Cameroun, nous fournissons des solutions d'appels rentables et de haute qualité 
            pour les entreprises en Europe et en Afrique. Notre expertise humaine, formée et dédiée 
            à la satisfaction client, fait de nous le choix idéal pour externaliser vos communications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-secondary-light card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary-black mb-3">
                {item.title}
              </h3>
              <p className="text-secondary-gray leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Company Story */}
        <div className="bg-gradient-to-r from-primary-black to-secondary-gray rounded-2xl p-8 md:p-12 text-white animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                Notre Mission
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Nous croyons fermement que l'excellence dans le service client passe par l'expertise humaine. 
                C'est pourquoi nous avons bâti Pura Lumina sur des valeurs de professionnalisme, 
                de fiabilité et d'innovation.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Notre équipe multiculturelle et francophone comprend les nuances des marchés européens 
                et africains, permettant une communication authentique et efficace avec vos clients.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-primary-orange mb-2">5+</div>
                  <div className="text-gray-300">Années d'expérience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-primary-orange mb-2">50+</div>
                  <div className="text-gray-300">Clients satisfaits</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-primary-orange mb-2">100K+</div>
                  <div className="text-gray-300">Appels gérés</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-primary-orange mb-2">24/7</div>
                  <div className="text-gray-300">Support disponible</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;