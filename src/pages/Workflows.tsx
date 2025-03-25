
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';

const workflows = [
  {
    id: 1,
    name: 'Data Processing Pipeline',
    status: 'Active',
    progress: 65,
    agents: 3,
    startedAt: '2023-07-15T09:24:00',
    cost: '$34.25',
  },
  {
    id: 2,
    name: 'Customer Service Bot',
    status: 'Active',
    progress: 100,
    agents: 2,
    startedAt: '2023-07-14T14:30:00',
    cost: '$28.50',
  },
  {
    id: 3,
    name: 'Security Monitoring',
    status: 'Active',
    progress: 100,
    agents: 4,
    startedAt: '2023-07-10T00:00:00',
    cost: '$142.75',
  },
  {
    id: 4,
    name: 'Inventory Management',
    status: 'Paused',
    progress: 45,
    agents: 2,
    startedAt: '2023-07-12T10:15:00',
    cost: '$18.20',
  },
  {
    id: 5,
    name: 'Social Media Analysis',
    status: 'Failed',
    progress: 27,
    agents: 3,
    startedAt: '2023-07-13T16:45:00',
    cost: '$12.30',
  },
  {
    id: 6,
    name: 'Financial Reporting',
    status: 'Scheduled',
    progress: 0,
    agents: 2,
    startedAt: '2023-07-16T09:00:00',
    cost: '$0.00',
  },
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

const Workflows = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Workflows</h1>
            <p className="text-muted-foreground">Manage your automated processes</p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <div className="relative grow sm:grow-0 w-full sm:w-60">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search workflows..."
                className="w-full pl-8"
              />
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Workflow
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          {workflows.map((workflow) => (
            <Card key={workflow.id} className="overflow-hidden transition-all hover:shadow-md">
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <CardTitle className="text-lg">{workflow.name}</CardTitle>
                    <CardDescription>Started {formatDate(workflow.startedAt)}</CardDescription>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`
                      self-start sm:self-auto
                      ${workflow.status === 'Active' ? 'border-green-500 text-green-500 bg-green-50 dark:bg-green-950/20' : ''} 
                      ${workflow.status === 'Paused' ? 'border-amber-500 text-amber-500 bg-amber-50 dark:bg-amber-950/20' : ''} 
                      ${workflow.status === 'Failed' ? 'border-red-500 text-red-500 bg-red-50 dark:bg-red-950/20' : ''}
                      ${workflow.status === 'Scheduled' ? 'border-blue-500 text-blue-500 bg-blue-50 dark:bg-blue-950/20' : ''}
                    `}
                  >
                    {workflow.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium">Progress</p>
                      <p className="text-sm font-medium">{workflow.progress}%</p>
                    </div>
                    <Progress value={workflow.progress} className="h-2" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Agents</p>
                      <p className="mt-1 text-lg font-semibold">{workflow.agents}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Cost</p>
                      <p className="mt-1 text-lg font-semibold">{workflow.cost}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-0">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <div className="flex space-x-2">
                  {workflow.status === 'Active' && (
                    <Button variant="outline" size="sm" className="text-amber-500 border-amber-500 hover:bg-amber-50">
                      Pause
                    </Button>
                  )}
                  {workflow.status === 'Paused' && (
                    <Button variant="outline" size="sm" className="text-green-500 border-green-500 hover:bg-green-50">
                      Resume
                    </Button>
                  )}
                  {workflow.status !== 'Scheduled' && (
                    <Button variant="outline" size="sm" className="text-red-500 border-red-500 hover:bg-red-50">
                      Stop
                    </Button>
                  )}
                  {workflow.status === 'Scheduled' && (
                    <Button variant="outline" size="sm" className="text-green-500 border-green-500 hover:bg-green-50">
                      Start Now
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Workflows;
