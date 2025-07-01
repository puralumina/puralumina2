import React from 'react';
import { Check, X, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRICING_PLANS } from '../utils/constants';

const PricingPage: React.FC = () => {
  const additionalFeatures = [
    {
      category: "Communication",
      features: [
        { name: "Appels entrants", starter: true, business: true, enterprise: true },
        { name: "Appels sortants", starter: true, business: true, enterprise: true },
        { name: "Chat en direct", starter: false, business: true, enterprise: true },
        { name: "Support email", starter: true, business: true, enterprise: true },
        { name: "Vidéoconférence", starter: false, business: false, enterprise: true },
        { name: "WhatsApp Business", starter: false, business: true, enterprise: true }
      ]
    },
    {
      category: "Intégrations",
      features: [
        { name: "CRM basique", starter: true, business: true, enterprise: true },
        { name: "CRM avancé", starter: false, business: true, enterprise: true },
        { name: "API personnalisée", starter: false, business: false, enterprise: true },
        { name: "Intégrations sur mesure", starter: false, business: false, enterprise: true },
        { name: "Webhooks", starter: false, business: true, enterprise: true }
      ]
    },
    {
      category: "Support & Formation",
      features: [
        { name: "Formation initiale", starter: true, business: true, enterprise: true },
        { name: "Support technique", starter: "Email", business: "Prioritaire", enterprise: "Dédié 24/7" },
        { name: "Account manager", starter: false, business: true, enterprise: true },
        { name: "Formation continue", starter: false, business: true, enterprise: true },
        { name: "Consultation stratégique", starter: false, business: false, enterprise: true }
      ]
    }
  ];

  const faqs = [
    {
      question: "Peut-on changer de plan en cours de contrat ?",
      answer: "Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. Les changements prennent effet le cycle suivant."
    },
    {
      question: "Y a-t-il des frais de setup ?",
      answer: "Aucun frais de setup pour les plans Starter et Business. Le plan Enterprise inclut un setup personnalisé gratuit."
    },
    {
      question: "Quelle est la durée d'engagement minimum ?",
      answer: "Nos contrats sont flexibles avec un engagement minimum de 3 mois pour commencer."
    },
    {
      question: "Les tarifs incluent-ils la formation des équipes ?",
      answer: "Oui, tous nos plans incluent la formation initiale de vos équipes et l'onboarding complet."
    }
  ];

  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="text-green-500 mx-auto" size={20} />
      ) : (
        <X className="text-gray-400 mx-auto" size={20} />
      );
    }
    return <span className="text-sm text-center">{value}</span>;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-black to-secondary-gray text-white section-padding pt-20">
        <div className="container-max">
          <div className="text-center animate-slide-up">
            <span className="text-primary-orange font-semibold text-lg mb-4 block">
              Nos Tarifs
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Choisissez Votre
              <span className="text-primary-orange"> Plan Idéal</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Des tarifs transparents et adaptés à vos besoins. 
              Démarrez avec notre plan Starter ou optez pour une solution sur mesure.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {PRICING_PLANS.map((plan, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl shadow-lg card-hover animate-slide-up ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-primary-orange to-orange-600 text-white' 
                    : 'bg-white border border-gray-200'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-black text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star size={16} />
                      <span>Plus Populaire</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    plan.popular ? 'text-white' : 'text-primary-black'
                  }`}>
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${
                      plan.popular ? 'text-white' : 'text-primary-black'
                    }`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg ${
                      plan.popular ? 'text-white/80' : 'text-secondary-gray'
                    }`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`${
                    plan.popular ? 'text-white/90' : 'text-secondary-gray'
                  }`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check 
                        className={`flex-shrink-0 mt-0.5 ${
                          plan.popular ? 'text-white' : 'text-green-500'
                        }`} 
                        size={20} 
                      />
                      <span className={`${
                        plan.popular ? 'text-white' : 'text-secondary-gray'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? 'bg-white text-primary-orange hover:bg-gray-100'
                      : 'bg-primary-orange text-white hover:bg-orange-600'
                  }`}
                >
                  <span>
                    {plan.name === 'Enterprise' ? 'Nous Contacter' : 'Commencer Maintenant'}
                  </span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="bg-secondary-light section-padding">
        <div className="container-max">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary-black mb-6">
              Comparaison Détaillée
            </h2>
            <p className="text-xl text-secondary-gray max-w-3xl mx-auto">
              Découvrez en détail ce qui est inclus dans chaque plan 
              pour faire le meilleur choix pour votre entreprise.
            </p>
          </div>

          {additionalFeatures.map((section, sectionIndex) => (
            <div 
              key={sectionIndex} 
              className="mb-12 animate-slide-up"
              style={{ animationDelay: `${sectionIndex * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold text-primary-black mb-6">
                {section.category}
              </h3>
              
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="grid grid-cols-4 bg-secondary-gray text-white">
                  <div className="p-4 font-semibold">Fonctionnalité</div>
                  <div className="p-4 font-semibold text-center">Starter</div>
                  <div className="p-4 font-semibold text-center">Business</div>
                  <div className="p-4 font-semibold text-center">Enterprise</div>
                </div>
                
                {section.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex}
                    className={`grid grid-cols-4 ${
                      featureIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <div className="p-4 font-medium text-primary-black">
                      {feature.name}
                    </div>
                    <div className="p-4 text-center">
                      {renderFeatureValue(feature.starter)}
                    </div>
                    <div className="p-4 text-center">
                      {renderFeatureValue(feature.business)}
                    </div>
                    <div className="p-4 text-center">
                      {renderFeatureValue(feature.enterprise)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary-black mb-6">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-secondary-gray max-w-3xl mx-auto">
              Trouvez les réponses aux questions les plus courantes sur nos tarifs et services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-secondary-light p-6 rounded-xl animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-primary-black mb-3">
                  {faq.question}
                </h3>
                <p className="text-secondary-gray leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-black to-secondary-gray text-white section-padding">
        <div className="container-max">
          <div className="text-center animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">
              Prêt à Commencer ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Choisissez votre plan et transformez votre service client dès aujourd'hui. 
              Notre équipe vous accompagne dans votre réussite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Demander une Démo</span>
                <ArrowRight size={20} />
              </Link>
              <Link 
                to="/services" 
                className="btn-secondary"
              >
                En Savoir Plus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;