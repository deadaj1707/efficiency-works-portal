
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Compute', value: 45 },
  { name: 'Storage', value: 20 },
  { name: 'Network', value: 15 },
  { name: 'API Calls', value: 20 }
];

const COLORS = ['hsl(221.2, 83%, 53.3%)', 'hsl(262.1, 83%, 58.4%)', 'hsl(316.6, 73.3%, 52.5%)', 'hsl(189, 94%, 43%)'];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass rounded-lg p-2 text-sm shadow-md">
        <p className="font-medium">{`${payload[0].name}`}</p>
        <p className="text-primary">{`${payload[0].value}%`}</p>
      </div>
    );
  }

  return null;
};

const CostOverview = () => {
  return (
    <Card>
      <CardHeader className="pb-0">
        <CardTitle className="text-base font-medium">Cost Distribution</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={2}
                dataKey="value"
                label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend layout="horizontal" verticalAlign="bottom" align="center" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default CostOverview;
