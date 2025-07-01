import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../utils/constants';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  const services = [
    'Centre d\'appels sortants',
    'Réception téléphonique',
    'Support client',
    'Chat en direct',
    'Support technique',
    'Prise de rendez-vous',
    'Recouvrement de créances',
    'Autre'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-black to-secondary-gray text-white section-padding">
        <div className="container-max">
          <div className="text-center animate-slide-up">
            <span className="text-primary-orange font-semibold text-lg mb-4 block">
              Contactez-Nous
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Démarrons Votre
              <span className="text-primary-orange"> Projet Ensemble</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Notre équipe d'experts est prête à discuter de vos besoins et à vous proposer 
              la solution parfaite pour transformer votre service client.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="bg-secondary-light p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-primary-black mb-6">
                  Demander une Démo Gratuite
                </h2>
                <p className="text-secondary-gray mb-8">
                  Remplissez ce formulaire et notre équipe vous contactera dans les 2 heures 
                  pour programmer votre démonstration personnalisée.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
                    <h3 className="text-2xl font-bold text-primary-black mb-2">
                      Message Envoyé !
                    </h3>
                    <p className="text-secondary-gray">
                      Nous vous contacterons très bientôt.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-primary-black mb-2">
                          Nom Complet *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-primary-orange transition-colors"
                          placeholder="Votre nom complet"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary-black mb-2">
                          Email Professionnel *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-primary-orange transition-colors"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-primary-black mb-2">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-primary-orange transition-colors"
                          placeholder="+33 X XX XX XX XX"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-primary-black mb-2">
                          Entreprise *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-primary-orange transition-colors"
                          placeholder="Nom de votre entreprise"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-primary-black mb-2">
                        Service Souhaité
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-primary-orange transition-colors"
                      >
                        <option value="">Sélectionnez un service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-primary-black mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-primary-orange transition-colors resize-none"
                        placeholder="Décrivez votre projet et vos besoins..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary-orange hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Envoyer ma Demande</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-primary-black mb-6">
                    Informations de Contact
                  </h2>
                  <p className="text-secondary-gray text-lg leading-relaxed">
                    Nous sommes disponibles pour répondre à toutes vos questions et 
                    vous accompagner dans votre projet de transformation digitale.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-secondary-light rounded-xl">
                    <div className="w-12 h-12 bg-primary-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-black mb-2">Téléphone</h3>
                      <a 
                        href={`tel:${COMPANY_INFO.phone}`}
                        className="text-primary-orange hover:text-orange-600 transition-colors text-lg"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                      <p className="text-secondary-gray text-sm mt-1">
                        Disponible 24/7 pour les urgences
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-secondary-light rounded-xl">
                    <div className="w-12 h-12 bg-primary-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-black mb-2">Email</h3>
                      <a 
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-primary-orange hover:text-orange-600 transition-colors text-lg"
                      >
                        {COMPANY_INFO.email}
                      </a>
                      <p className="text-secondary-gray text-sm mt-1">
                        Réponse sous 2h en moyenne
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-secondary-light rounded-xl">
                    <div className="w-12 h-12 bg-primary-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-black mb-2">Adresse</h3>
                      <p className="text-secondary-gray">
                        {COMPANY_INFO.address}
                      </p>
                      <p className="text-secondary-gray text-sm mt-1">
                        Hub francophone stratégique
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-secondary-light rounded-xl">
                    <div className="w-12 h-12 bg-primary-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-black mb-2">Horaires</h3>
                      <p className="text-secondary-gray">
                        {COMPANY_INFO.hours}
                      </p>
                      <p className="text-secondary-gray text-sm mt-1">
                        Fuseau GMT+1 - Parfait pour l'Europe
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Response Promise */}
                <div className="bg-gradient-to-r from-primary-orange to-orange-600 text-white p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">🚀 Réponse Rapide Garantie</h3>
                  <p className="text-sm opacity-90">
                    Nous nous engageons à vous contacter dans les 2 heures suivant 
                    la réception de votre demande pendant les heures ouvrables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-secondary-light section-padding">
        <div className="container-max">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary-black mb-6">
              Notre Localisation
            </h2>
            <p className="text-xl text-secondary-gray max-w-3xl mx-auto">
              Basés au cœur de l'Afrique francophone, nous servons le monde entier 
              avec une perspective unique et des coûts optimisés.
            </p>
          </div>

          <div className="animate-fade-in">
            <div className="bg-white p-4 rounded-2xl shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127022.3383395733!2d11.518054!3d3.8480164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf1bbba84e49%3A0x5e2e55e8d88e0d2e!2sYaound%C3%A9%2C%20Cameroun!5e0!3m2!1sfr!2sfr!4v1647890123456!5m2!1sfr!2sfr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;