
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Process A', time: 120 },
  { name: 'Process B', time: 85 },
  { name: 'Process C', time: 210 },
  { name: 'Process D', time: 145 },
  { name: 'Process E', time: 95 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass rounded-lg p-2 text-sm shadow-md">
        <p className="font-medium">{`${label}`}</p>
        <p className="text-primary">{`Time: ${payload[0].value} ms`}</p>
      </div>
    );
  }

  return null;
};

const TimeMetrics = () => {
  return (
    <Card>
      <CardHeader className="pb-0">
        <CardTitle className="text-base font-medium">Processing Time</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
              <YAxis 
                unit=" ms" 
                tick={{ fontSize: 12 }} 
                tickLine={false} 
                axisLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="time" 
                fill="hsl(var(--primary))" 
                radius={[4, 4, 0, 0]} 
                barSize={30}
                maxBarSize={50}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TimeMetrics;
