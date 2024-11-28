import { addDays } from 'date-fns';

// Génération de données temporelles
export const generateTimeSeriesData = (days: number, min: number, max: number) => {
  return Array.from({ length: days }, (_, i) => ({
    date: addDays(new Date(), -i).toISOString(),
    value: Math.floor(Math.random() * (max - min)) + min,
  }));
};

// Données pour l'onglet Utilisateurs
export const usersData = {
  connections: generateTimeSeriesData(30, 500, 1500),
  userTypes: [
    { name: 'Employés', value: 60 },
    { name: 'Employeurs', value: 40 },
  ],
  ageDistribution: [
    { age: '18-24', homme: 150, femme: 130 },
    { age: '25-34', homme: 250, femme: 220 },
    { age: '35-44', homme: 180, femme: 170 },
    { age: '45-54', homme: 120, femme: 110 },
    { age: '55+', homme: 80, femme: 70 },
  ],
  sectors: [
    { name: 'Restauration', value: 35 },
    { name: 'Hôtellerie', value: 25 },
    { name: 'Commerce', value: 20 },
    { name: 'Événementiel', value: 15 },
    { name: 'Autres', value: 5 },
  ],
};

// Données pour l'onglet Recrutement
export const recruitmentData = {
  applications: generateTimeSeriesData(30, 100, 300),
  jobTypes: [
    { name: 'CDI', value: 40 },
    { name: 'CDD', value: 30 },
    { name: 'Extra', value: 20 },
    { name: 'Stage', value: 10 },
  ],
  responseTime: [
    { name: '< 24h', value: 45 },
    { name: '24-48h', value: 30 },
    { name: '48-72h', value: 15 },
    { name: '> 72h', value: 10 },
  ],
  hiringStatus: [
    { name: 'En attente', value: 120 },
    { name: 'Entretien', value: 80 },
    { name: 'Offre', value: 40 },
    { name: 'Embauché', value: 30 },
  ],
};

// Données pour l'onglet Business
export const businessData = {
  revenue: generateTimeSeriesData(30, 5000, 15000),
  subscriptionTypes: [
    { name: 'Basic', value: 50 },
    { name: 'Pro', value: 30 },
    { name: 'Enterprise', value: 20 },
  ],
  customerLifetime: [
    { name: '< 3 mois', value: 30 },
    { name: '3-6 mois', value: 25 },
    { name: '6-12 mois', value: 20 },
    { name: '> 12 mois', value: 25 },
  ],
  revenueByService: [
    { name: 'Abonnements', value: 45 },
    { name: 'Recrutement', value: 30 },
    { name: 'Formation', value: 15 },
    { name: 'Autres', value: 10 },
  ],
};

// Données pour l'onglet Marketing
export const marketingData = {
  acquisition: generateTimeSeriesData(30, 50, 200),
  channels: [
    { name: 'Organique', value: 40 },
    { name: 'Paid Search', value: 25 },
    { name: 'Social', value: 20 },
    { name: 'Référencement', value: 15 },
  ],
  campaignPerformance: [
    { name: 'Campagne A', value: 85 },
    { name: 'Campagne B', value: 75 },
    { name: 'Campagne C', value: 65 },
    { name: 'Campagne D', value: 55 },
  ],
  conversionRate: generateTimeSeriesData(30, 2, 8),
};