import React from 'react';
import { Users, MapPin, Target, Award, Globe, Clock } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Users className="text-primary-orange" size={32} />,
      title: "Expertise Humaine",
      description: "Notre force réside dans nos équipes qualifiées et notre approche humaine de la relation client."
    },
    {
      icon: <Target className="text-primary-orange" size={32} />,
      title: "Résultats Orientés",
      description: "Chaque action est mesurée et optimisée pour garantir les meilleurs résultats pour nos clients."
    },
    {
      icon: <Award className="text-primary-orange" size={32} />,
      title: "Excellence de Service",
      description: "Nous visons l'excellence dans chaque interaction avec vos clients et les nôtres."
    },
    {
      icon: <Globe className="text-primary-orange" size={32} />,
      title: "Vision Internationale",
      description: "Basés en Afrique, nous servons le monde avec une perspective globale unique."
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Fondation",
      description: "Création de Pura Lumina avec une vision claire : offrir des services de centre d'appels francophones de qualité supérieure."
    },
    {
      year: "2020",
      title: "Premiers Clients",
      description: "Signature des premiers contrats avec des entreprises européennes cherchant des solutions économiques et qualitatives."
    },
    {
      year: "2021",
      title: "Expansion",
      description: "Élargissement de nos services et certification RGPD pour servir efficacement le marché européen."
    },
    {
      year: "2022",
      title: "Innovation",
      description: "Intégration de nouvelles technologies et lancement des services de support multicanal."
    },
    {
      year: "2023",
      title: "Reconnaissance",
      description: "Obtention de certifications qualité et reconnaissance comme partenaire de confiance de plus de 50 entreprises."
    },
    {
      year: "2024",
      title: "Avenir",
      description: "Développement de solutions IA-assistées et expansion vers de nouveaux marchés africains et européens."
    }
  ];

  const team = [
    {
      name: "Jean-Marie Fotso",
      role: "Directeur Général",
      description: "Expert en communication client avec 15 ans d'expérience internationale."
    },
    {
      name: "Sophie Mbarga",
      role: "Directrice Opérationnelle",
      description: "Spécialisée dans l'optimisation des processus et la formation d'équipes."
    },
    {
      name: "Pierre Nkomo",
      role: "Directeur Technique",
      description: "Ingénieur télécom avec expertise en systèmes de communication avancés."
    },
    {
      name: "Marie Essomba",
      role: "Responsable Qualité",
      description: "Garante de nos standards de qualité et de la satisfaction client."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-black to-secondary-gray text-white section-padding">
        <div className="container-max">
          <div className="text-center animate-slide-up">
            <span className="text-primary-orange font-semibold text-lg mb-4 block">
              À Propos de Nous
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              L'Histoire de
              <span className="text-primary-orange"> Pura Lumina</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Depuis notre création, nous nous sommes engagés à fournir des services de centre d'appels 
              francophones d'exception, alliant expertise technique et touche humaine authentique.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-primary-black mb-6">
                Notre Mission
              </h2>
              <p className="text-lg text-secondary-gray leading-relaxed mb-6">
                Démocratiser l'accès à des services de communication client de haute qualité 
                en offrant des solutions francophones expertes, abordables et technologiquement avancées 
                aux entreprises européennes et africaines.
              </p>
              <p className="text-lg text-secondary-gray leading-relaxed">
                Nous croyons que chaque interaction client est une opportunité de créer de la valeur 
                et de renforcer la confiance. C'est pourquoi nous mettons l'humain au cœur de nos processus 
                tout en utilisant les technologies les plus modernes.
              </p>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-secondary-light p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-primary-black mb-6">
                  Notre Vision
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-orange rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-secondary-gray">
                      Devenir le partenaire de référence pour les services de communication client 
                      dans l'espace francophone.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-orange rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-secondary-gray">
                      Créer des ponts durables entre l'Afrique et l'Europe à travers l'excellence de service.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-orange rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-secondary-gray">
                      Contribuer au développement économique en créant des opportunités d'emploi qualifié.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary-light section-padding">
        <div className="container-max">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary-black mb-6">
              Nos Valeurs
            </h2>
            <p className="text-xl text-secondary-gray max-w-3xl mx-auto">
              Ces valeurs guident chacune de nos actions et définissent notre identité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-orange/10 rounded-xl flex items-center justify-center">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-black mb-3">
                      {value.title}
                    </h3>
                    <p className="text-secondary-gray leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary-black mb-6">
              Notre Parcours
            </h2>
            <p className="text-xl text-secondary-gray max-w-3xl mx-auto">
              Découvrez les étapes clés qui ont façonné Pura Lumina 
              et construit notre expertise.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-orange/20"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  } animate-slide-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <div className="bg-secondary-light p-6 rounded-xl card-hover">
                      <div className="text-primary-orange font-bold text-lg mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-primary-black mb-3">
                        {item.title}
                      </h3>
                      <p className="text-secondary-gray leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-4 h-4 bg-primary-orange rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-secondary-light section-padding">
        <div className="container-max">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary-black mb-6">
              Notre Équipe Dirigeante
            </h2>
            <p className="text-xl text-secondary-gray max-w-3xl mx-auto">
              Rencontrez les experts qui dirigent Pura Lumina vers l'excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm card-hover text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-primary-orange rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-primary-black mb-2">
                  {member.name}
                </h3>
                <div className="text-primary-orange font-medium mb-3">
                  {member.role}
                </div>
                <p className="text-secondary-gray text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="text-primary-orange" size={32} />
                <h2 className="text-3xl font-bold text-primary-black">
                  Notre Localisation
                </h2>
              </div>
              <p className="text-lg text-secondary-gray leading-relaxed mb-6">
                Stratégiquement basés à Yaoundé, au Cameroun, nous bénéficions d'un emplacement 
                idéal qui nous permet de servir efficacement les marchés européens et africains 
                avec des coûts optimisés et une qualité de service exceptionnelle.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="text-primary-orange" size={20} />
                  <span className="text-secondary-gray">
                    Fuseau horaire GMT+1 - Parfait pour l'Europe
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="text-primary-orange" size={20} />
                  <span className="text-secondary-gray">
                    Hub francophone stratégique en Afrique Centrale
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-primary-orange" size={20} />
                  <span className="text-secondary-gray">
                    Accès à un vivier de talents multilingues qualifiés
                  </span>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <div className="bg-secondary-light p-8 rounded-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127022.3383395733!2d11.518054!3d3.8480164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf1bbba84e49%3A0x5e2e55e8d88e0d2e!2sYaound%C3%A9%2C%20Cameroun!5e0!3m2!1sfr!2sfr!4v1647890123456!5m2!1sfr!2sfr"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;