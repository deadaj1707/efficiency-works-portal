
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import ActivityItem from './ActivityItem';

// Mock activity data - in a real app, this would come from an API
const mockActivities = [
  {
    id: '1',
    type: 'workflow_created',
    title: 'New Workflow Created',
    description: 'Data Processing Pipeline was created',
    timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 minutes ago
    actor: {
      name: 'John Doe',
      avatar: null
    },
    entityId: '101',
    entityType: 'workflow'
  },
  {
    id: '2',
    type: 'agent_deployed',
    title: 'Agent Deployed',
    description: 'Customer Service Bot agent was deployed to production',
    timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(), // 15 minutes ago
    actor: {
      name: 'Jane Smith',
      avatar: null
    },
    entityId: '102',
    entityType: 'agent'
  },
  {
    id: '3',
    type: 'cost_alert',
    title: 'Cost Alert',
    description: 'Monthly budget threshold of $1,000 reached',
    timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(), // 1 hour ago
    actor: {
      name: 'System',
      avatar: null
    },
    entityId: null,
    entityType: null
  },
  {
    id: '4',
    type: 'workflow_completed',
    title: 'Workflow Completed',
    description: 'Security Monitoring workflow completed successfully',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    actor: {
      name: 'System',
      avatar: null
    },
    entityId: '103',
    entityType: 'workflow'
  },
  {
    id: '5',
    type: 'agent_error',
    title: 'Agent Error',
    description: 'Inventory Management agent encountered an error',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
    actor: {
      name: 'System',
      avatar: null
    },
    entityId: '104',
    entityType: 'agent'
  },
  {
    id: '6',
    type: 'user_login',
    title: 'User Login',
    description: 'Admin user logged in from new device',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(), // 12 hours ago
    actor: {
      name: 'Admin',
      avatar: null
    },
    entityId: null,
    entityType: null
  },
  {
    id: '7',
    type: 'workflow_started',
    title: 'Workflow Started',
    description: 'Financial Reporting workflow started',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
    actor: {
      name: 'Scheduler',
      avatar: null
    },
    entityId: '105',
    entityType: 'workflow'
  }
];

const ActivityFeed: React.FC = () => {
  const [activities, setActivities] = useState(mockActivities);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance of new activity
        const newActivity = {
          id: Date.now().toString(),
          type: ['workflow_created', 'agent_deployed', 'cost_alert', 'workflow_completed', 'agent_error'][
            Math.floor(Math.random() * 5)
          ] as string,
          title: 'New Activity',
          description: `Random activity ${Date.now()}`,
          timestamp: new Date().toISOString(),
          actor: {
            name: 'System',
            avatar: null
          },
          entityId: Math.floor(Math.random() * 1000).toString(),
          entityType: Math.random() > 0.5 ? 'workflow' : 'agent'
        };
        
        setActivities(prev => [newActivity, ...prev.slice(0, 9)]); // Keep only 10 most recent
      }
    }, 30000); // Every 30 seconds check
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold">Activity Feed</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[400px] px-4">
          <div className="space-y-4 pr-4">
            {activities.map((activity) => (
              <ActivityItem key={activity.id} activity={activity} />
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default ActivityFeed;
