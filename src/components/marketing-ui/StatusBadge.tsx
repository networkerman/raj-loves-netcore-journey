
import React from 'react';
import { Check } from 'lucide-react';

interface StatusBadgeProps {
  status: 'approved' | 'pending' | 'rejected' | 'active';
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'approved':
        return { 
          bg: 'bg-netcore-green/10', 
          text: 'text-netcore-green', 
          border: 'border-netcore-green/30',
          label: 'Approved',
          icon: <Check className="h-3 w-3 mr-1" />
        };
      case 'active':
        return { 
          bg: 'bg-netcore-green/10', 
          text: 'text-netcore-green', 
          border: 'border-netcore-green/30',
          label: 'Active',
          icon: null
        };
      case 'pending':
        return { 
          bg: 'bg-yellow-100', 
          text: 'text-yellow-700', 
          border: 'border-yellow-200',
          label: 'Pending',
          icon: null
        };
      case 'rejected':
        return { 
          bg: 'bg-red-100', 
          text: 'text-red-700', 
          border: 'border-red-200',
          label: 'Rejected',
          icon: null
        };
      default:
        return { 
          bg: 'bg-gray-100', 
          text: 'text-gray-700', 
          border: 'border-gray-200',
          label: status,
          icon: null
        };
    }
  };

  const { bg, text, border, label, icon } = getStatusConfig();

  return (
    <div className={`${bg} ${text} text-xs py-1 px-2 rounded border ${border} flex items-center ${className}`}>
      {icon}
      {label}
    </div>
  );
};

export default StatusBadge;
