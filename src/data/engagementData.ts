import { addDays } from 'date-fns';

export const engagementData = {
  // Candidatures quotidiennes
  dailyApplications: Array.from({ length: 30 }, (_, i) => ({
    date: addDays(new Date(), -i).toISOString(),
    value: Math.floor(Math.random() * (250 - 100)) + 100,
  })),

  // Candidatures par utilisateur
  applicationsPerUser: [
    { name: '0-1', value: 45 },
    { name: '2-3', value: 30 },
    { name: '4-5', value: 15 },
    { name: '6+', value: 10 },
  ],

  // Délai de réponse aux candidatures
  responseTime: Array.from({ length: 30 }, (_, i) => ({
    date: addDays(new Date(), -i).toISOString(),
    value: Math.floor(Math.random() * (72 - 24)) + 24, // en heures
  })),

  // Discussions par type de contrat
  discussionsByContract: [
    { name: 'CDI', value: 40 },
    { name: 'CDD', value: 35 },
    { name: 'Extra', value: 25 },
  ],

  // Taux de conversion
  conversionRates: [
    { name: 'Candidature → Discussion', value: 25 },
    { name: 'Discussion → Entretien', value: 15 },
    { name: 'Entretien → Embauche', value: 8 },
  ],

  // Discussions quotidiennes
  discussionsPerDay: Array.from({ length: 30 }, (_, i) => ({
    date: addDays(new Date(), -i).toISOString(),
    value: Math.floor(Math.random() * (150 - 50)) + 50,
  })),
};