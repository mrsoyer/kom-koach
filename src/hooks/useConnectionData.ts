import { useQuery } from '@tanstack/react-query';
import { dashboardApi } from '../services/api';
import { subDays, format } from 'date-fns';

export const useConnectionData = (dateRange: number = 30) => {
  const endDate = format(new Date(), 'yyyy-MM-dd');
  const startDate = format(subDays(new Date(), dateRange), 'yyyy-MM-dd');

  const dailyConnections = useQuery({
    queryKey: ['connections', 'daily', startDate, endDate],
    queryFn: () => dashboardApi.getDailyConnections(startDate, endDate),
  });

  const userTypeDistribution = useQuery({
    queryKey: ['users', 'distribution'],
    queryFn: dashboardApi.getUserTypeDistribution,
  });

  return {
    dailyConnections,
    userTypeDistribution,
    isLoading: dailyConnections.isLoading || userTypeDistribution.isLoading,
    isError: dailyConnections.isError || userTypeDistribution.isError,
  };
};