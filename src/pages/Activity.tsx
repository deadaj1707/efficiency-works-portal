
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ActivityFeed from '@/components/activity/ActivityFeed';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Activity = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Activity Feed</h1>
          <p className="text-muted-foreground">Monitor real-time activity across your platform</p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Activities</TabsTrigger>
            <TabsTrigger value="workflows">Workflows</TabsTrigger>
            <TabsTrigger value="agents">Agents</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="animate-fade-in">
            <Card className="h-full">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold">Live Activity Feed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[600px]">
                  <ActivityFeed />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="workflows" className="animate-fade-in">
            <Card className="h-full">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold">Workflow Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[600px]">
                  <ActivityFeed />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="agents" className="animate-fade-in">
            <Card className="h-full">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold">Agent Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[600px]">
                  <ActivityFeed />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="system" className="animate-fade-in">
            <Card className="h-full">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold">System Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[600px]">
                  <ActivityFeed />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="users" className="animate-fade-in">
            <Card className="h-full">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold">User Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[600px]">
                  <ActivityFeed />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Activity;
