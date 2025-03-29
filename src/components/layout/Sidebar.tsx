
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Activity, BarChart3, Bell, Home, LayoutDashboard, Settings, Users } from 'lucide-react';

interface SidebarProps {
  open: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ open }) => {
  const location = useLocation();
  
  const routes = [
    {
      name: 'Dashboard',
      path: '/',
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      name: 'Agents',
      path: '/agents',
      icon: <Users className="h-5 w-5" />,
    },
    {
      name: 'Workflows',
      path: '/workflows',
      icon: <Activity className="h-5 w-5" />,
    },
    {
      name: 'Analytics',
      path: '/analytics',
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      name: 'Activity',
      path: '/activity',
      icon: <Bell className="h-5 w-5" />,
    },
    {
      name: 'Settings',
      path: '/settings',
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r bg-background transition-transform duration-300 md:translate-x-0",
        open ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex h-16 items-center border-b px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <Home className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg">AgentFlow</span>
        </Link>
      </div>
      
      <div className="flex-1 overflow-auto py-4">
        <nav className="grid gap-2 px-4">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={cn(
                "group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent transition-colors",
                location.pathname === route.path ? "bg-accent" : "transparent"
              )}
            >
              <div className={cn(
                "rounded-md p-1",
                location.pathname === route.path ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
              )}>
                {route.icon}
              </div>
              <span>{route.name}</span>
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="border-t p-4">
        <div className="glass rounded-lg p-4">
          <p className="text-xs font-medium mb-2">System Status</p>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="text-xs text-muted-foreground">All systems operational</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
