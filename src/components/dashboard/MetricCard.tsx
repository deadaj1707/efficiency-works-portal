
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  icon,
  description,
  trend,
  className,
}) => {
  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-md", className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="mt-2 text-2xl font-bold">{value}</h3>
            
            {trend && (
              <div className="mt-1 flex items-center gap-1">
                <span
                  className={cn(
                    "text-xs font-medium",
                    trend.isPositive ? "text-green-500" : "text-red-500"
                  )}
                >
                  {trend.isPositive ? "+" : ""}
                  {trend.value}%
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn(
                    "h-3 w-3",
                    trend.isPositive ? "text-green-500 rotate-0" : "text-red-500 rotate-180"
                  )}
                >
                  <path
                    d="M7 3V11M7 3L3 7M7 3L11 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xs text-muted-foreground">vs last month</span>
              </div>
            )}
            
            {description && (
              <p className="mt-1 text-xs text-muted-foreground">{description}</p>
            )}
          </div>
          
          <div className="rounded-full p-2 bg-primary/10">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
