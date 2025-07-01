export const COMPANY_INFO = {
  name: "Pura Lumina",
  tagline: "Services de Centre d'Appels Francophones avec une Expertise Humaine de Qualité",
  description: "Fiable, sécurisé et professionnel — le partenaire idéal pour vos clients en Europe et en Afrique.",
  phone: "+237 6XX XXX XXX",
  email: "contact@puralumina.com",
  address: "Yaoundé, Cameroun",
  hours: "24/7 - Disponibilité mondiale"
};

export const SERVICES = {
  callCenter: [
    {
      title: "Externalisation de Centre d'Appels",
      description: "Solutions complètes d'externalisation avec agents francophones qualifiés"
    },
    {
      title: "Appels sortants de vente",
      description: "Campagnes de prospection et vente avec techniques éprouvées"
    },
    {
      title: "Réception téléphonique",
      description: "Accueil professionnel et gestion des appels entrants"
    },
    {
      title: "Prise de rendez-vous",
      description: "Optimisation de votre planning avec qualification des prospects"
    },
    {
      title: "Rappels pour dons & événements",
      description: "Campagnes de relance pour associations et événements"
    },
    {
      title: "Appels de recouvrement de créances",
      description: "Recouvrement amiable respectueux et efficace"
    }
  ],
  customerSupport: [
    {
      title: "Support par chat en direct",
      description: "Assistance instantanée via chat intégré à votre site"
    },
    {
      title: "Externalisation du helpdesk",
      description: "Support technique complet pour vos utilisateurs"
    },
    {
      title: "Support technique",
      description: "Résolution d'incidents et assistance spécialisée"
    },
    {
      title: "Support par email",
      description: "Gestion professionnelle de vos emails clients"
    }
  ]
};

export const BENEFITS = [
  {
    title: "Agents francophones qualifiés",
    description: "Équipe formée aux standards européens et africains"
  },
  {
    title: "Disponibilité 24/7 mondiale",
    description: "Service continu adapté à tous les fuseaux horaires"
  },
  {
    title: "Conformité RGPD",
    description: "Respect strict des réglementations européennes"
  },
  {
    title: "Processus optimisés",
    description: "Méthodes éprouvées pour une efficacité maximale"
  },
  {
    title: "Tarification adaptée",
    description: "Coûts compétitifs pour les marchés européen et africain"
  },
  {
    title: "Intégrations CRM",
    description: "Compatible avec tous les systèmes majeurs"
  }
];

export const TESTIMONIALS = [
  {
    name: "Marie Dubois",
    company: "TechSolutions Europe",
    text: "Pura Lumina a transformé notre service client. Leurs agents sont professionnels et notre satisfaction client a augmenté de 40%.",
    rating: 5
  },
  {
    name: "Jean-Pierre Martin",
    company: "Assurance Premium",
    text: "La qualité de service est exceptionnelle. Nos clients apprécient le professionnalisme et la réactivité des équipes.",
    rating: 5
  },
  {
    name: "Sophie Laurent",
    company: "E-commerce Plus",
    text: "Excellent partenariat ! Le support technique 24/7 nous permet de servir nos clients internationaux efficacement.",
    rating: 5
  }
];

export const PRICING_PLANS = [
  {
    name: "Starter",
    price: "€299",
    period: "/mois",
    description: "Parfait pour les petites entreprises",
    features: [
      "Jusqu'à 500 appels/mois",
      "Support par email",
      "2 agents dédiés",
      "Reporting mensuel",
      "Intégration CRM basique"
    ],
    popular: false
  },
  {
    name: "Business",
    price: "€699",
    period: "/mois",
    description: "Idéal pour les entreprises en croissance",
    features: [
      "Jusqu'à 1500 appels/mois",
      "Support prioritaire",
      "5 agents dédiés",
      "Reporting hebdomadaire",
      "Intégrations CRM avancées",
      "Chat en direct",
      "Support téléphonique"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Sur mesure",
    period: "",
    description: "Solutions personnalisées pour grandes entreprises",
    features: [
      "Volume d'appels illimité",
      "Support dédié 24/7",
      "Équipe dédiée",
      "Reporting en temps réel",
      "Intégrations sur mesure",
      "Tous les canaux de support",
      "SLA personnalisé",
      "Conformité avancée"
    ],
    popular: false
  }
];