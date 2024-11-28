import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ProfileStatusChartProps {
  data: Array<{
    name: string;
    completed: number;
    incomplete: number;
  }>;
  title: string;
}

export const ProfileStatusChart: React.FC<ProfileStatusChartProps> = ({ data, title }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="completed" stackId="a" fill="#10B981" name="Complétés" />
            <Bar dataKey="incomplete" stackId="a" fill="#EF4444" name="Incomplets" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};