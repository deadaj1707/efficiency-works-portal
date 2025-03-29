
import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Activity, AlertTriangle, CheckCircle, Clock, Database, Play, Plus, User } from 'lucide-react';

interface ActivityItemProps {
  activity: {
    id: string;
    type: string;
    title: string;
    description: string;
    timestamp: string;
    actor: {
      name: string;
      avatar: string | null;
    };
    entityId: string | null;
    entityType: string | null;
  };
}

const ActivityItem: React.FC<ActivityItemProps> = ({ activity }) => {
  const getIcon = () => {
    switch (activity.type) {
      case 'workflow_created':
        return <Plus className="h-5 w-5 text-green-500" />;
      case 'workflow_started':
        return <Play className="h-5 w-5 text-blue-500" />;
      case 'workflow_completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'agent_deployed':
        return <Activity className="h-5 w-5 text-purple-500" />;
      case 'agent_error':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'cost_alert':
        return <Database className="h-5 w-5 text-amber-500" />;
      case 'user_login':
        return <User className="h-5 w-5 text-blue-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="flex items-start gap-4 rounded-lg border p-3 transition-all hover:bg-accent/50">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
        {getIcon()}
      </div>
      <div className="flex-1 space-y-1">
        <p className="font-medium leading-none">{activity.title}</p>
        <p className="text-sm text-muted-foreground">{activity.description}</p>
        <div className="flex items-center pt-1 text-xs text-muted-foreground">
          <span>{activity.actor.name}</span>
          <span className="mx-1">•</span>
          <span>{formatDistanceToNow(new Date(activity.timestamp), { addSuffix: true })}</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;
