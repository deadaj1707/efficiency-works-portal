
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ActivityFeed from '@/components/activity/ActivityFeed';

const Activity = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Activity Feed</h1>
          <p className="text-muted-foreground">Monitor real-time activity across your platform</p>
        </div>
        
        <div className="grid gap-6">
          <ActivityFeed />
        </div>
      </div>
    </MainLayout>
  );
};

export default Activity;
