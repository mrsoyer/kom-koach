import React from 'react';
import { Users, UserCheck, Award, Star } from 'lucide-react';
import { MetricCard } from './MetricCard';
import { PyramidChart } from './charts/PyramidChart';
import { GenderChart } from './charts/GenderChart';
import { LocationChart } from './charts/LocationChart';
import { BarChart } from './charts/BarChart';
import { ProfileStatusChart } from './charts/ProfileStatusChart';
import { TimeSeriesChart } from './charts/TimeSeriesChart';
import { userProfileData } from '../data/userProfileData';

export const DashboardContent: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Métriques clés */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Âge médian"
          value="32 ans"
          icon={<Users className="w-6 h-6" />}
        />
        <MetricCard
          title="Profils vérifiés"
          value="2,500"
          change={5.2}
          icon={<UserCheck className="w-6 h-6" />}
        />
        <MetricCard
          title="Profils qualifiés"
          value="1,200"
          change={3.8}
          icon={<Award className="w-6 h-6" />}
        />
        <MetricCard
          title="Profils recommandés"
          value="800"
          change={2.4}
          icon={<Star className="w-6 h-6" />}
        />
      </div>

      {/* Graphiques */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PyramidChart
          data={userProfileData.ageDistribution}
          title="Pyramide des âges"
        />
        <GenderChart
          data={userProfileData.genderData}
          title="Répartition par genre"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LocationChart
          data={userProfileData.locationData}
          title="Répartition géographique"
        />
        <BarChart
          data={userProfileData.professionalCategories}
          title="Catégories socio-professionnelles"
          color="#8B5CF6"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProfileStatusChart
          data={userProfileData.profileStatus}
          title="État des profils"
        />
        <TimeSeriesChart
          data={userProfileData.registrationTrend}
          title="Inscriptions quotidiennes"
          color="#10B981"
        />
      </div>
    </div>
  );
};