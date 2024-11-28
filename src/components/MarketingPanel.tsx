import React from 'react';
import { TrendingUp, DollarSign, Target, Users } from 'lucide-react';
import { MetricCard } from './MetricCard';
import { TimeSeriesChart } from './charts/TimeSeriesChart';
import { PieChart } from './charts/PieChart';
import { BarChart } from './charts/BarChart';
import { marketingData } from '../data/marketingData';

export const MarketingPanel: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Métriques clés */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Nouveaux utilisateurs"
          value="250"
          change={5.2}
          icon={<Users className="w-6 h-6" />}
        />
        <MetricCard
          title="Taux de conversion"
          value="4.8%"
          change={0.5}
          icon={<TrendingUp className="w-6 h-6" />}
        />
        <MetricCard
          title="Coût par acquisition"
          value="45€"
          change={-2.1}
          icon={<DollarSign className="w-6 h-6" />}
        />
        <MetricCard
          title="ROI Marketing"
          value="285%"
          change={3.8}
          icon={<Target className="w-6 h-6" />}
        />
      </div>

      {/* Première rangée de graphiques */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TimeSeriesChart
          data={marketingData.dailyAcquisition}
          title="Acquisition quotidienne"
          color="#3B82F6"
        />
        <PieChart
          data={marketingData.acquisitionSources}
          title="Sources d'acquisition"
        />
      </div>

      {/* Deuxième rangée de graphiques */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarChart
          data={marketingData.campaignPerformance}
          title="Performance des campagnes"
          color="#8B5CF6"
        />
        <BarChart
          data={marketingData.cpaByChannel}
          title="Coût par acquisition par canal"
          color="#F59E0B"
        />
      </div>

      {/* Troisième rangée de graphiques */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TimeSeriesChart
          data={marketingData.conversionRates}
          title="Taux de conversion"
          color="#10B981"
        />
      </div>
    </div>
  );
};