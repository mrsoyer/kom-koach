import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface Props {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
}

export const MetricCard: React.FC<Props> = ({ title, value, change, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
        {icon && <div className="text-blue-500">{icon}</div>}
      </div>
      {change !== undefined && (
        <div className="mt-2 flex items-center">
          {change >= 0 ? (
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
          )}
          <span className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {Math.abs(change)}%
          </span>
        </div>
      )}
    </div>
  );
};