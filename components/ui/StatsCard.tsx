import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface StatsCardProps {
  title: string;
  value: number | string;
  icon?: React.ReactNode;
  description?: string;
}

export function StatsCard({ title, value, icon, description }: StatsCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        {icon && <div className="p-1.5">{icon}</div>}
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <div className="text-2xl font-bold">
          {value}
        </div>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}