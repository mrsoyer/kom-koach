import { useQuery } from '@tanstack/react-query';
import { dashboardApi } from '../services/api';

export const useUserProfileData = () => {
  const ageDistribution = useQuery({
    queryKey: ['users', 'age-distribution'],
    queryFn: dashboardApi.getAgeDistribution,
  });

  const locationDistribution = useQuery({
    queryKey: ['users', 'location-distribution'],
    queryFn: dashboardApi.getLocationDistribution,
  });

  const profileStatus = useQuery({
    queryKey: ['users', 'profile-status'],
    queryFn: dashboardApi.getProfileStatus,
  });

  return {
    ageDistribution,
    locationDistribution,
    profileStatus,
    isLoading: ageDistribution.isLoading || locationDistribution.isLoading || profileStatus.isLoading,
    isError: ageDistribution.isError || locationDistribution.isError || profileStatus.isError,
  };
};