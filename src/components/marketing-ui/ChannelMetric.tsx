
import React from 'react';

interface ChannelMetricProps {
  channel: 'WhatsApp' | 'RCS' | 'SMS';
  conversionRate: number;
  percentage: number;
  className?: string;
}

const ChannelMetric: React.FC<ChannelMetricProps> = ({ 
  channel, 
  conversionRate, 
  percentage,
  className = '' 
}) => {
  const getChannelColor = () => {
    switch (channel) {
      case 'WhatsApp': return 'bg-netcore-whatsapp';
      case 'RCS': return 'bg-netcore-rcs';
      case 'SMS': return 'bg-netcore-sms';
      default: return 'bg-gray-400';
    }
  };

  const color = getChannelColor();

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-1">
        <h6 className="text-xs font-medium flex items-center">
          <span className={`w-2 h-2 ${color} rounded-full mr-1`}></span>
          {channel}
        </h6>
        <span className="text-xs text-gray-500">Conversion: {conversionRate}%</span>
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

export default ChannelMetric;
