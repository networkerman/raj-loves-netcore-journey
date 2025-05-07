
import React from 'react';

interface ProgressBarProps {
  label: string;
  percentage: number;
  color?: string;
  showValue?: boolean;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  label, 
  percentage, 
  color = 'bg-netcore-blue', 
  showValue = true,
  className = '' 
}) => {
  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-1">
        <h6 className="text-xs font-medium">{label}</h6>
        {showValue && <span className="text-xs text-netcore-blue">{percentage}%</span>}
      </div>
      <div className="h-1 bg-gray-100 rounded-full">
        <div 
          className={`h-1 ${color} rounded-full`} 
          style={{width: `${Math.min(Math.max(percentage, 0), 100)}%`}}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
