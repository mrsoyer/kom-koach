import React from 'react';
import { Users, Clock, Activity, AlertTriangle } from 'lucide-react';
import { MetricCard } from './MetricCard';
import { TimeSeriesChart } from './charts/TimeSeriesChart';
import { PieChart } from './charts/PieChart';
import { BarChart } from './charts/BarChart';
import { connectionData } from '../data/connectionData';

export const ConnectionUsagePanel: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Métriques clés */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Connexions aujourd'hui"
          value="1,500"
          change={2.5}
          icon={<Users className="w-6 h-6" />}
        />
        <MetricCard
          title="Durée moyenne session"
          value="5m 30s"
          icon={<Clock className="w-6 h-6" />}
        />
        <MetricCard
          title="Sessions par utilisateur"
          value="3"
          change={1.2}
          icon={<Activity className="w-6 h-6" />}
        />
        <MetricCard
          title="Comptes inactifs"
          value="500"
          change={-2.1}
          icon={<AlertTriangle className="w-6 h-6" />}
        />
      </div>

      {/* Première rangée de graphiques */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TimeSeriesChart
          data={connectionData.dailyConnections}
          title="Connexions journalières"
          color="#3B82F6"
        />
        <PieChart
          data={connectionData.userTypeDistribution}
          title="Répartition Employés/Employeurs"
        />
      </div>

      {/* Deuxième rangée de graphiques */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarChart
          data={connectionData.newVsExisting}
          title="Nouveaux vs Utilisateurs Existants"
          color="#8B5CF6"
        />
        <TimeSeriesChart
          data={connectionData.averageSessionDuration}
          title="Durée moyenne des sessions"
          color="#10B981"
        />
      </div>

      {/* Troisième rangée de graphiques */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarChart
          data={connectionData.employerFrequency}
          title="Fréquence d'utilisation employeurs"
          color="#F59E0B"
        />
        <TimeSeriesChart
          data={connectionData.deletedAccounts}
          title="Comptes supprimés par mois"
          color="#EF4444"
        />
      </div>
    </div>
  );
};