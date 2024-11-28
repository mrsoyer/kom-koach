import { addDays } from 'date-fns';

export const marketingData = {
  // Acquisition quotidienne
  dailyAcquisition: Array.from({ length: 30 }, (_, i) => ({
    date: addDays(new Date(), -i).toISOString(),
    value: Math.floor(Math.random() * (200 - 50)) + 50,
  })),

  // Sources d'acquisition
  acquisitionSources: [
    { name: 'Recherche organique', value: 35 },
    { name: 'Réseaux sociaux', value: 25 },
    { name: 'Campagnes payantes', value: 20 },
    { name: 'Partenaires', value: 15 },
    { name: 'Direct', value: 5 },
  ],

  // Performance des campagnes
  campaignPerformance: [
    { name: 'Google Ads', value: 85 },
    { name: 'Facebook Ads', value: 75 },
    { name: 'LinkedIn Ads', value: 65 },
    { name: 'Instagram Ads', value: 55 },
  ],

  // Coût par acquisition
  cpaByChannel: [
    { name: 'Google Ads', value: 45 },
    { name: 'Facebook Ads', value: 35 },
    { name: 'LinkedIn Ads', value: 85 },
    { name: 'Instagram Ads', value: 40 },
  ],

  // Taux de conversion
  conversionRates: Array.from({ length: 30 }, (_, i) => ({
    date: addDays(new Date(), -i).toISOString(),
    value: Math.random() * (8 - 2) + 2,
  })),
};