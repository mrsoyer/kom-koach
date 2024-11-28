import React from 'react';
import { FileText, Users, MessageSquare, Timer } from 'lucide-react';
import { MetricCard } from './MetricCard';
import { TimeSeriesChart } from './charts/TimeSeriesChart';
import { BarChart } from './charts/BarChart';
import { PieChart } from './charts/PieChart';
import { engagementData } from '../data/engagementData';

export const EngagementPanel: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Métriques clés */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Candidatures aujourd'hui"
          value="150"
          change={3.5}
          icon={<FileText className="w-6 h-6" />}
        />
        <MetricCard
          title="Moy. candidatures/utilisateur"
          value="1.5"
          change={0.8}
          icon={<Users className="w-6 h-6" />}
        />
        <MetricCard
          title="Taux de réponse employeurs"
          value="65%"
          change={2.1}
          icon={<MessageSquare className="w-6 h-6" />}
        />
        <MetricCard
          title="Délai moyen de réponse"
          value="2j"
          change={-0.5}
          icon={<Timer className="w-6 h-6" />}
        />
      </div>

      {/* Première rangée de graphiques */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TimeSeriesChart
          data={engagementData.dailyApplications}
          title="Candidatures par jour"
          color="#3B82F6"
        />
        <BarChart
          data={engagementData.applicationsPerUser}
          title="Candidatures par utilisateur/jour"
          color="#8B5CF6"
        />
      </div>

      {/* Deuxième rangée de graphiques */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TimeSeriesChart
          data={engagementData.responseTime}
          title="Délai de réponse aux candidatures"
          color="#10B981"
        />
        <PieChart
          data={engagementData.discussionsByContract}
          title="Discussions par type de contrat"
        />
      </div>

      {/* Troisième rangée de graphiques */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarChart
          data={engagementData.conversionRates}
          title="Taux de conversion"
          color="#F59E0B"
        />
        <TimeSeriesChart
          data={engagementData.discussionsPerDay}
          title="Discussions quotidiennes"
          color="#EC4899"
        />
      </div>
    </div>
  );
};