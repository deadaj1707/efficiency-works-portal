
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data
const data = [
  { name: 'Jan', efficiency: 65 },
  { name: 'Feb', efficiency: 59 },
  { name: 'Mar', efficiency: 80 },
  { name: 'Apr', efficiency: 81 },
  { name: 'May', efficiency: 56 },
  { name: 'Jun', efficiency: 55 },
  { name: 'Jul', efficiency: 72 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass rounded-lg p-2 text-sm shadow-md">
        <p className="font-medium">{`${label}`}</p>
        <p className="text-primary">{`Efficiency: ${payload[0].value}%`}</p>
      </div>
    );
  }

  return null;
};

const EfficiencyChart = () => {
  return (
    <Card className="col-span-2">
      <CardHeader className="pb-0">
        <CardTitle className="text-base font-medium">Efficiency Trends</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
              <YAxis 
                unit="%" 
                domain={[0, 100]} 
                tick={{ fontSize: 12 }} 
                tickLine={false} 
                axisLine={false}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="efficiency"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ r: 4, strokeWidth: 2 }}
                activeDot={{ r: 6, strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default EfficiencyChart;
