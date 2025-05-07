
import React, { ReactNode } from 'react';
import { Card } from '@/components/ui/card';

interface MarketingCardProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

const MarketingCard: React.FC<MarketingCardProps> = ({ 
  title, 
  subtitle, 
  icon, 
  children, 
  className = '' 
}) => {
  return (
    <Card className={`overflow-hidden ${className}`}>
      <div className="bg-netcore-blue text-white p-3 flex items-center">
        {icon && (
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
            {icon}
          </div>
        )}
        <div>
          <h4 className="font-medium">{title}</h4>
          {subtitle && <p className="text-xs opacity-80">{subtitle}</p>}
        </div>
      </div>
      <div className="p-4">
        {children}
      </div>
    </Card>
  );
};

export default MarketingCard;
