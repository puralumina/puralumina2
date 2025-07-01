import React from 'react';
import { Phone, Headphones, MessageCircle, Clock, Shield, TrendingUp } from 'lucide-react';
import { SERVICES } from '../utils/constants';

const ServicesPage: React.FC = () => {
  const serviceDetails = {
    callCenter: {
      icon: <Phone className="text-primary-orange" size={32} />,
      title: "Services de Centre d'Appels",
      description: "Solutions complètes d'appels entrants et sortants avec expertise francophone",
      features: [
        "Formation spécialisée de nos agents",
        "Scripts personnalisés selon votre secteur",
        "Suivi en temps réel des performances",
        "Intégration CRM complète",
        "Reporting détaillé quotidien"
      ]
    },
    customerSupport: {
      icon: <Headphones className="text-primary-orange" size={32} />,
      title: "Services de Support Client",
      description: "Support technique et relation client multicanal disponible 24/7",
      features: [
        "Support multicanal (téléphone, email, chat)",
        "Base de connaissances centralisée",
        "Escalade automatique des incidents",
        "SLA personnalisés selon vos besoins",
        "Support technique spécialisé"
      ]
    }
  };

  const industries = [
    {
      name: "Assurances",
      description: "Gestion des sinistres, souscriptions et réclamations",
      features: ["Qualification des dossiers", "Suivi client personnalisé", "Conformité réglementaire"]
    },
    {
      name: "E-commerce",
      description: "Support client complet pour boutiques en ligne",
      features: ["Suivi des commandes", "Gestion des retours", "Support technique produits"]
    },
    {
      name: "ONG",
      description: "Campagnes de sensibilisation et collecte de fonds",
      features: ["Prospection de donateurs", "Suivi des adhésions", "Événements caritatifs"]
    },
    {
      name: "Télécommunications",
      description: "Support technique et commercial pour opérateurs",
      features: ["Dépannage technique", "Vente d'abonnements", "Gestion des réclamations"]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-black to-secondary-gray text-white section-padding">
        <div className="container-max">
          <div className="text-center animate-slide-up">
            <span className="text-primary-orange font-semibold text-lg mb-4 block">
              Nos Services Détaillés
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Solutions Complètes de
              <span className="text-primary-orange"> Communication</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Découvrez en détail comment nos services peuvent transformer 
              votre relation client et booster votre croissance.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="space-y-20">
            {/* Centre d'Appels */}
            <div className="animate-slide-up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    {serviceDetails.callCenter.icon}
                    <h2 className="text-3xl font-bold text-primary-black">
                      {serviceDetails.callCenter.title}
                    </h2>
                  </div>
                  <p className="text-lg text-secondary-gray leading-relaxed">
                    {serviceDetails.callCenter.description}
                  </p>
                  <ul className="space-y-3">
                    {serviceDetails.callCenter.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-orange rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-secondary-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SERVICES.callCenter.map((service, index) => (
                    <div key={index} className="bg-secondary-light p-6 rounded-xl card-hover">
                      <h4 className="font-semibold text-primary-black mb-2">
                        {service.title}
                      </h4>
                      <p className="text-secondary-gray text-sm">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Support Client */}
            <div className="animate-slide-up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SERVICES.customerSupport.map((service, index) => (
                    <div key={index} className="bg-secondary-light p-6 rounded-xl card-hover">
                      <h4 className="font-semibold text-primary-black mb-2">
                        {service.title}
                      </h4>
                      <p className="text-secondary-gray text-sm">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="order-1 lg:order-2 space-y-6">
                  <div className="flex items-center space-x-3">
                    {serviceDetails.customerSupport.icon}
                    <h2 className="text-3xl font-bold text-primary-black">
                      {serviceDetails.customerSupport.title}
                    </h2>
                  </div>
                  <p className="text-lg text-secondary-gray leading-relaxed">
                    {serviceDetails.customerSupport.description}
                  </p>
                  <ul className="space-y-3">
                    {serviceDetails.customerSupport.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-orange rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-secondary-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-secondary-light section-padding">
        <div className="container-max">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary-black mb-6">
              Secteurs d'Expertise
            </h2>
            <p className="text-xl text-secondary-gray max-w-3xl mx-auto">
              Notre expérience couvre plusieurs industries avec des solutions adaptées 
              aux spécificités de chaque secteur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold text-primary-black mb-4">
                  {industry.name}
                </h3>
                <p className="text-secondary-gray mb-6 leading-relaxed">
                  {industry.description}
                </p>
                <ul className="space-y-2">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-orange rounded-full flex-shrink-0"></div>
                      <span className="text-secondary-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Integration */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary-black mb-6">
              Technologies & Intégrations
            </h2>
            <p className="text-xl text-secondary-gray max-w-3xl mx-auto">
              Nous utilisons les dernières technologies pour garantir 
              une intégration fluide avec vos systèmes existants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-secondary-light rounded-2xl animate-slide-up">
              <MessageCircle className="text-primary-orange mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-primary-black mb-4">
                Systèmes de Communication
              </h3>
              <ul className="text-secondary-gray space-y-2">
                <li>VoIP avancé</li>
                <li>Chat en temps réel</li>
                <li>Vidéoconférence</li>
                <li>SMS/WhatsApp Business</li>
              </ul>
            </div>

            <div className="text-center p-8 bg-secondary-light rounded-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <Shield className="text-primary-orange mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-primary-black mb-4">
                Sécurité & Conformité
              </h3>
              <ul className="text-secondary-gray space-y-2">
                <li>Chiffrement end-to-end</li>
                <li>Conformité RGPD</li>
                <li>Audit de sécurité</li>
                <li>Sauvegarde automatique</li>
              </ul>
            </div>

            <div className="text-center p-8 bg-secondary-light rounded-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <TrendingUp className="text-primary-orange mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-primary-black mb-4">
                Analytics & Reporting
              </h3>
              <ul className="text-secondary-gray space-y-2">
                <li>Dashboards en temps réel</li>
                <li>Rapports personnalisés</li>
                <li>KPI de performance</li>
                <li>Prédictions IA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;