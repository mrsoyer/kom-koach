import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface TimeSeriesProps {
  data: Array<{ date: string; value: number }>;
  title: string;
  color?: string;
}

export const TimeSeriesChart: React.FC<TimeSeriesProps> = ({ data, title, color = '#3B82F6' }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="date" 
              tickFormatter={(date) => format(new Date(date), 'dd MMM', { locale: fr })}
            />
            <YAxis />
            <Tooltip 
              labelFormatter={(date) => format(new Date(date), 'dd MMMM yyyy', { locale: fr })}
            />
            <Legend />
            <Line type="monotone" dataKey="value" stroke={color} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};