import React, { useState } from 'react';
import { LayoutDashboard } from 'lucide-react';
import { TabPanel } from './components/TabPanel';
import { DashboardFilters } from './components/DashboardFilters';
import { FilterState } from './types/dashboard';

function App() {
  const [activeTab, setActiveTab] = useState('connections');
  const [filters, setFilters] = useState<FilterState>({
    dateRange: 'day',
    userType: 'all',
    region: '',
    sector: '',
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <LayoutDashboard className="h-8 w-8 text-blue-600" />
            <h1 className="ml-3 text-2xl font-bold text-gray-900">Dashboard Analytics</h1>
          </div>
          
          <div className="mt-4 flex space-x-4">
            <button
              onClick={() => setActiveTab('connections')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'connections'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Connexion et Utilisation
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'users'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Profils Utilisateurs
            </button>
            <button
              onClick={() => setActiveTab('engagement')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'engagement'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Engagement et Interactions
            </button>
            <button
              onClick={() => setActiveTab('marketing')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'marketing'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Marketing et Acquisition
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardFilters filters={filters} onFilterChange={setFilters} />
        <TabPanel tabId={activeTab} />
      </main>
    </div>
  );
}

export default App;