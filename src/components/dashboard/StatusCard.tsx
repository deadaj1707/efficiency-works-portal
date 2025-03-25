
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface StatusCardProps {
  title: string;
  value: number;
  total: number;
  status: string;
  iconColor?: string;
  progressColor?: string;
}

const StatusCard: React.FC<StatusCardProps> = ({
  title,
  value,
  total,
  status,
  iconColor = "primary",
  progressColor = "primary"
}) => {
  const percentage = Math.round((value / total) * 100);
  
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex flex-col">
          <div className="flex items-end justify-between">
            <div className="text-3xl font-bold">{value}</div>
            <div className="text-sm text-muted-foreground">of {total}</div>
          </div>
          <Progress 
            value={percentage} 
            className={`mt-4 h-2 bg-${progressColor}/20`} 
          />
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <div className="flex items-center text-sm">
          <div className={`mr-2 h-2 w-2 rounded-full bg-${iconColor}`}></div>
          <span>{status}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default StatusCard;
