import { useQuery } from '@tanstack/react-query';
import { dashboardApi } from '../services/api';
import { subDays, format } from 'date-fns';

export const useEngagementData = (dateRange: number = 30) => {
  const endDate = format(new Date(), 'yyyy-MM-dd');
  const startDate = format(subDays(new Date(), dateRange), 'yyyy-MM-dd');

  const dailyApplications = useQuery({
    queryKey: ['applications', 'daily', startDate, endDate],
    queryFn: () => dashboardApi.getDailyApplications(startDate, endDate),
  });

  const applicationsPerAd = useQuery({
    queryKey: ['applications', 'per-ad'],
    queryFn: dashboardApi.getApplicationsPerAd,
  });

  const responseTime = useQuery({
    queryKey: ['applications', 'response-time'],
    queryFn: dashboardApi.getResponseTime,
  });

  return {
    dailyApplications,
    applicationsPerAd,
    responseTime,
    isLoading: dailyApplications.isLoading || applicationsPerAd.isLoading || responseTime.isLoading,
    isError: dailyApplications.isError || applicationsPerAd.isError || responseTime.isError,
  };
};