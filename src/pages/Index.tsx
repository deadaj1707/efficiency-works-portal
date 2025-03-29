
import React from 'react';
import { Activity, Clock, DollarSign, Zap } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import MetricCard from '@/components/dashboard/MetricCard';
import EfficiencyChart from '@/components/dashboard/EfficiencyChart';
import AgentTable from '@/components/dashboard/AgentTable';
import CostOverview from '@/components/dashboard/CostOverview';
import TimeMetrics from '@/components/dashboard/TimeMetrics';
import StatusCard from '@/components/dashboard/StatusCard';
import ActivityFeed from '@/components/activity/ActivityFeed';

const Index = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-purple-900 dark:text-purple-100">Dashboard</h1>
          <p className="text-muted-foreground">Monitor and optimize your agent workflows</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Active Agents"
            value="24"
            icon={<Zap className="h-5 w-5 text-purple-600" />}
            trend={{ value: 12, isPositive: true }}
          />
          <MetricCard
            title="Total Workflows"
            value="142"
            icon={<Activity className="h-5 w-5 text-purple-600" />}
            trend={{ value: 8, isPositive: true }}
          />
          <MetricCard
            title="Avg. Response Time"
            value="180ms"
            icon={<Clock className="h-5 w-5 text-purple-600" />}
            trend={{ value: 5, isPositive: false }}
          />
          <MetricCard
            title="Current Cost"
            value="$1,284.56"
            icon={<DollarSign className="h-5 w-5 text-purple-600" />}
            trend={{ value: 2, isPositive: false }}
          />
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <EfficiencyChart />
          <StatusCard
            title="Completed Workflows"
            value={89}
            total={142}
            status="63% completion rate"
            iconColor="purple-500"
          />
          <StatusCard
            title="System Load"
            value={62}
            total={100}
            status="Moderate load"
            iconColor="purple-400"
          />
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <AgentTable />
          </div>
          <div className="md:row-span-2 h-full">
            <ActivityFeed />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CostOverview />
          <TimeMetrics />
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
