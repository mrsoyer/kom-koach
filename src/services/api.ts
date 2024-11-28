import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const dashboardApi = {
  // Connexions et utilisation
  getDailyConnections: async (startDate: string, endDate: string) => {
    const { data } = await api.get('/connections/daily', { params: { startDate, endDate } });
    return data;
  },

  getUserTypeDistribution: async () => {
    const { data } = await api.get('/users/distribution');
    return data;
  },

  getAgeDistribution: async () => {
    const { data } = await api.get('/users/age-distribution');
    return data;
  },

  getLocationDistribution: async () => {
    const { data } = await api.get('/users/location-distribution');
    return data;
  },

  getProfileStatus: async () => {
    const { data } = await api.get('/users/profile-status');
    return data;
  },

  // Engagement et interactions
  getDailyApplications: async (startDate: string, endDate: string) => {
    const { data } = await api.get('/applications/daily', { params: { startDate, endDate } });
    return data;
  },

  getApplicationsPerAd: async () => {
    const { data } = await api.get('/applications/per-ad');
    return data;
  },

  getResponseTime: async () => {
    const { data } = await api.get('/applications/response-time');
    return data;
  },
};