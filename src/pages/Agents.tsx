
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const agents = [
  {
    id: 1,
    name: 'Agent Alpha',
    type: 'Processing',
    status: 'Online',
    workflows: 15,
    efficiency: 92,
    lastActive: '2 minutes ago',
  },
  {
    id: 2,
    name: 'Agent Beta',
    type: 'Analytics',
    status: 'Offline',
    workflows: 8,
    efficiency: 78,
    lastActive: '3 hours ago',
  },
  {
    id: 3,
    name: 'Agent Gamma',
    type: 'Automation',
    status: 'Online',
    workflows: 22,
    efficiency: 96,
    lastActive: '1 minute ago',
  },
  {
    id: 4,
    name: 'Agent Delta',
    type: 'Monitoring',
    status: 'Maintenance',
    workflows: 0,
    efficiency: 0,
    lastActive: '2 days ago',
  },
  {
    id: 5,
    name: 'Agent Epsilon',
    type: 'Integration',
    status: 'Online',
    workflows: 13,
    efficiency: 87,
    lastActive: '15 minutes ago',
  },
  {
    id: 6,
    name: 'Agent Zeta',
    type: 'Processing',
    status: 'Online',
    workflows: 17,
    efficiency: 91,
    lastActive: '5 minutes ago',
  },
  {
    id: 7,
    name: 'Agent Eta',
    type: 'Analytics',
    status: 'Online',
    workflows: 9,
    efficiency: 84,
    lastActive: '10 minutes ago',
  },
  {
    id: 8,
    name: 'Agent Theta',
    type: 'Integration',
    status: 'Offline',
    workflows: 11,
    efficiency: 76,
    lastActive: '1 day ago',
  },
];

const Agents = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Agents</h1>
            <p className="text-muted-foreground">Manage and monitor your agent fleet</p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <div className="relative grow sm:grow-0 w-full sm:w-60">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search agents..."
                className="w-full pl-8"
              />
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Agent
            </Button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {agents.map((agent) => (
            <Card key={agent.id} className="overflow-hidden transition-all hover:shadow-md">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{agent.name}</CardTitle>
                    <CardDescription>{agent.type}</CardDescription>
                  </div>
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
                </div>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Workflows</p>
                    <p className="mt-1 text-lg font-semibold">{agent.workflows}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Efficiency</p>
                    <p className="mt-1 text-lg font-semibold">{agent.efficiency}%</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm font-medium text-muted-foreground">Last active</p>
                    <p className="mt-1 text-sm">{agent.lastActive}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="outline" className="w-full" size="sm">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Agents;
