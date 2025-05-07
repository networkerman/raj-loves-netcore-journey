
import React, { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string | number;
  change?: number;
  fillPercentage: number;
  color?: string;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  label, 
  value, 
  change,
  fillPercentage,
  color = 'bg-netcore-teal',
  className = '' 
}) => {
  return (
    <div className={`bg-white border border-gray-200 rounded-lg p-3 ${className}`}>
      <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-bold">{value}</span>
        {change !== undefined && (
          <span className={`text-xs ${change >= 0 ? 'text-netcore-green' : 'text-red-500'} flex items-center`}>
            <ArrowRight className={`h-3 w-3 ${change >= 0 ? 'rotate-[-45deg]' : 'rotate-[45deg]'}`} />
            {Math.abs(change)}%
          </span>
        )}
      </div>
      <div className="h-1 bg-gray-100 rounded-full mt-2">
        <div 
          className={`h-1 ${color} rounded-full`} 
          style={{width: `${Math.min(Math.max(fillPercentage, 0), 100)}%`}}
        ></div>
      </div>
    </div>
  );
};

export default MetricCard;
