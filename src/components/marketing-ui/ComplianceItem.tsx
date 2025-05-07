
import React from 'react';
import { Check } from 'lucide-react';

interface ComplianceItemProps {
  title: string;
  status: 'passed' | 'failed' | 'verified' | 'matched';
  className?: string;
}

const ComplianceItem: React.FC<ComplianceItemProps> = ({ title, status, className = '' }) => {
  const getStatusText = () => {
    switch (status) {
      case 'passed': return 'Passed';
      case 'verified': return 'Verified';
      case 'matched': return 'Matched';
      case 'failed': return 'Failed';
      default: return status;
    }
  };

  const isPositive = status !== 'failed';
  const statusText = getStatusText();

  return (
    <div className="bg-gray-50 p-3 rounded border border-gray-200">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-full ${isPositive ? 'bg-netcore-green/20' : 'bg-red-100'} flex items-center justify-center mr-2`}>
            {isPositive ? (
              <Check className="h-4 w-4 text-netcore-green" />
            ) : (
              <span className="h-4 w-4 text-red-500">✗</span>
            )}
          </div>
          <span className="text-sm">{title}</span>
        </div>
        <span className={`text-xs ${isPositive ? 'text-netcore-green' : 'text-red-500'}`}>{statusText}</span>
      </div>
    </div>
  );
};

export default ComplianceItem;
