import React from 'react';
import { FilterState } from '../types/dashboard';
import { Filter } from 'lucide-react';

interface Props {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

export const DashboardFilters: React.FC<Props> = ({ filters, onFilterChange }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-500" />
          <span className="text-sm font-medium">Filtres:</span>
        </div>
        
        <select
          className="px-3 py-2 border rounded-md text-sm"
          value={filters.dateRange}
          onChange={(e) => onFilterChange({ ...filters, dateRange: e.target.value as any })}
        >
          <option value="day">Jour</option>
          <option value="week">Semaine</option>
          <option value="month">Mois</option>
          <option value="year">Année</option>
        </select>

        <select
          className="px-3 py-2 border rounded-md text-sm"
          value={filters.userType}
          onChange={(e) => onFilterChange({ ...filters, userType: e.target.value as any })}
        >
          <option value="all">Tous les utilisateurs</option>
          <option value="employee">Employés</option>
          <option value="employer">Employeurs</option>
        </select>

        <select
          className="px-3 py-2 border rounded-md text-sm"
          value={filters.region}
          onChange={(e) => onFilterChange({ ...filters, region: e.target.value })}
        >
          <option value="">Toutes les régions</option>
          <option value="idf">Île-de-France</option>
          <option value="paca">PACA</option>
          <option value="aura">Auvergne-Rhône-Alpes</option>
        </select>

        <select
          className="px-3 py-2 border rounded-md text-sm"
          value={filters.sector}
          onChange={(e) => onFilterChange({ ...filters, sector: e.target.value })}
        >
          <option value="">Tous les secteurs</option>
          <option value="restauration">Restauration</option>
          <option value="hotellerie">Hôtellerie</option>
          <option value="retail">Commerce</option>
        </select>
      </div>
    </div>
  );
};