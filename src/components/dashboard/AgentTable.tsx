
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const agents = [
  {
    id: 1,
    name: 'Agent Alpha',
    status: 'Online',
    efficiency: 92,
    workflows: 15,
    cost: '$123.45',
  },
  {
    id: 2,
    name: 'Agent Beta',
    status: 'Offline',
    efficiency: 78,
    workflows: 8,
    cost: '$89.20',
  },
  {
    id: 3,
    name: 'Agent Gamma',
    status: 'Online',
    efficiency: 96,
    workflows: 22,
    cost: '$201.75',
  },
  {
    id: 4,
    name: 'Agent Delta',
    status: 'Maintenance',
    efficiency: 0,
    workflows: 0,
    cost: '$0.00',
  },
  {
    id: 5,
    name: 'Agent Epsilon',
    status: 'Online',
    efficiency: 87,
    workflows: 13,
    cost: '$157.30',
  },
];

const AgentTable = () => {
  return (
    <Card className="col-span-2">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Agent Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Efficiency</TableHead>
              <TableHead>Workflows</TableHead>
              <TableHead className="text-right">Cost</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {agents.map((agent) => (
              <TableRow key={agent.id} className="group transition-colors hover:bg-muted/50">
                <TableCell className="font-medium">{agent.name}</TableCell>
                <TableCell>
                  <Badge 
                    variant="outline" 
                    className={`
                      ${agent.status === 'Online' ? 'border-green-500 text-green-500 bg-green-50 dark:bg-green-950/20' : ''} 
                      ${agent.status === 'Offline' ? 'border-gray-500 text-gray-500 bg-gray-50 dark:bg-gray-950/20' : ''} 
                      ${agent.status === 'Maintenance' ? 'border-amber-500 text-amber-500 bg-amber-50 dark:bg-amber-950/20' : ''}
                    `}
                  >
                    {agent.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-full max-w-24 rounded-full bg-gray-100 dark:bg-gray-800">
                      <div
                        className={`h-full rounded-full ${
                          agent.efficiency > 90 ? 'bg-green-500' : 
                          agent.efficiency > 70 ? 'bg-blue-500' : 
                          agent.efficiency > 0 ? 'bg-amber-500' : 'bg-gray-300'
                        }`}
                        style={{ width: `${agent.efficiency}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium">{agent.efficiency}%</span>
                  </div>
                </TableCell>
                <TableCell>{agent.workflows}</TableCell>
                <TableCell className="text-right">{agent.cost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AgentTable;
