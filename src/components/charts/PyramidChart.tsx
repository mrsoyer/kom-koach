import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface PyramidChartProps {
  data: Array<{ age: string; homme: number; femme: number }>;
  title: string;
}

export const PyramidChart: React.FC<PyramidChartProps> = ({ data, title }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="age" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="homme" fill="#3B82F6" />
            <Bar dataKey="femme" fill="#EC4899" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};