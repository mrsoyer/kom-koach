import { addDays } from 'date-fns';

export const userProfileData = {
  ageDistribution: [
    { age: '18-24', homme: 150, femme: 130 },
    { age: '25-34', homme: 250, femme: 220 },
    { age: '35-44', homme: 180, femme: 170 },
    { age: '45-54', homme: 120, femme: 110 },
    { age: '55+', homme: 80, femme: 70 },
  ],
  genderData: [
    { name: 'Hommes', value: 60 },
    { name: 'Femmes', value: 40 },
  ],
  locationData: [
    { name: 'Paris', value: 25 },
    { name: 'Lyon', value: 15 },
    { name: 'Marseille', value: 12 },
    { name: 'Bordeaux', value: 8 },
    { name: 'Toulouse', value: 7 },
    { name: 'Autres', value: 33 },
  ],
  professionalCategories: [
    { name: 'Cadres', value: 20 },
    { name: 'Employés', value: 35 },
    { name: 'Étudiants', value: 25 },
    { name: 'Indépendants', value: 15 },
    { name: 'Autres', value: 5 },
  ],
  profileStatus: [
    { name: 'Total', completed: 3000, incomplete: 500 },
  ],
  profileQuality: [
    { name: 'Vérifiés', value: 2500 },
    { name: 'Qualifiés', value: 1200 },
    { name: 'Recommandés', value: 800 },
  ],
  registrationTrend: Array.from({ length: 30 }, (_, i) => ({
    date: addDays(new Date(), -i).toISOString(),
    value: Math.floor(Math.random() * (100 - 20)) + 20,
  })),
};