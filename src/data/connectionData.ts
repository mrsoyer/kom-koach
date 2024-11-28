import { addDays, addMonths } from 'date-fns';

export const connectionData = {
  // Connexions journalières
  dailyConnections: Array.from({ length: 7 }, (_, i) => ({
    date: addDays(new Date(), -i).toISOString(),
    value: Math.floor(Math.random() * (1800 - 1200)) + 1200,
  })),

  // Distribution par type d'utilisateur
  userTypeDistribution: [
    { name: 'Employés', value: 70 },
    { name: 'Employeurs', value: 30 },
  ],

  // Nouveaux vs existants
  newVsExisting: [
    { name: 'Nouveaux', value: 400 },
    { name: 'Existants', value: 1200 },
  ],

  // Durée moyenne des sessions
  averageSessionDuration: Array.from({ length: 30 }, (_, i) => ({
    date: addDays(new Date(), -i).toISOString(),
    value: Math.floor(Math.random() * (8 - 3)) + 3, // en minutes
  })),

  // Fréquence d'utilisation employeurs
  employerFrequency: [
    { name: 'Quotidien', value: 30 },
    { name: 'Hebdomadaire', value: 45 },
    { name: 'Mensuel', value: 20 },
    { name: 'Occasionnel', value: 5 },
  ],

  // Comptes supprimés par mois
  deletedAccounts: Array.from({ length: 6 }, (_, i) => ({
    date: addMonths(new Date(), -i).toISOString(),
    value: Math.floor(Math.random() * (80 - 40)) + 40,
  })),

  // Comptes inactifs
  inactiveAccounts: [
    { name: '> 6 mois', value: 500 },
    { name: '3-6 mois', value: 300 },
    { name: '1-3 mois', value: 200 },
  ],
};