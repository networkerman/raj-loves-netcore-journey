
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface AnalyticsTabProps {
  onNavigateToCompliance: () => void;
}

const AnalyticsTab: React.FC<AnalyticsTabProps> = ({ onNavigateToCompliance }) => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h5 className="font-medium">Campaign Performance</h5>
        <div className="bg-netcore-green/10 text-netcore-green text-xs py-1 px-2 rounded border border-netcore-green/30">
          Active
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-white border border-gray-200 rounded-lg p-3">
          <h6 className="text-xs text-gray-500 mb-1">Delivery Rate</h6>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-bold">98.7%</span>
            <span className="text-xs text-netcore-green flex items-center">
              <ArrowRight className="h-3 w-3 rotate-[-45deg]" />
              2.1%
            </span>
          </div>
          <div className="h-1 bg-gray-100 rounded-full mt-2">
            <div className="h-1 bg-netcore-teal rounded-full" style={{width: '98.7%'}}></div>
          </div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-3">
          <h6 className="text-xs text-gray-500 mb-1">Open Rate</h6>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-bold">42.3%</span>
            <span className="text-xs text-netcore-green flex items-center">
              <ArrowRight className="h-3 w-3 rotate-[-45deg]" />
              5.7%
            </span>
          </div>
          <div className="h-1 bg-gray-100 rounded-full mt-2">
            <div className="h-1 bg-netcore-orange rounded-full" style={{width: '42.3%'}}></div>
          </div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-3">
          <h6 className="text-xs text-gray-500 mb-1">Click-through Rate</h6>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-bold">18.9%</span>
            <span className="text-xs text-netcore-green flex items-center">
              <ArrowRight className="h-3 w-3 rotate-[-45deg]" />
              3.2%
            </span>
          </div>
          <div className="h-1 bg-gray-100 rounded-full mt-2">
            <div className="h-1 bg-netcore-rcs rounded-full" style={{width: '18.9%'}}></div>
          </div>
        </div>
      </div>
      
      <h5 className="font-medium mb-2">CTA Performance</h5>
      <div className="bg-white border border-gray-200 rounded-lg p-3 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <h6 className="text-xs font-medium">Apply Now</h6>
              <span className="text-xs text-netcore-blue">58%</span>
            </div>
            <div className="h-1 bg-gray-100 rounded-full">
              <div className="h-1 bg-netcore-blue rounded-full" style={{width: '58%'}}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <h6 className="text-xs font-medium">Learn More</h6>
              <span className="text-xs text-netcore-blue">26%</span>
            </div>
            <div className="h-1 bg-gray-100 rounded-full">
              <div className="h-1 bg-netcore-blue rounded-full" style={{width: '26%'}}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <h6 className="text-xs font-medium">Scan QR</h6>
              <span className="text-xs text-netcore-blue">16%</span>
            </div>
            <div className="h-1 bg-gray-100 rounded-full">
              <div className="h-1 bg-netcore-blue rounded-full" style={{width: '16%'}}></div>
            </div>
          </div>
        </div>
      </div>
      
      <h5 className="font-medium mb-2">Channel Effectiveness</h5>
      <div className="bg-white border border-gray-200 rounded-lg p-3 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <h6 className="text-xs font-medium flex items-center">
                <span className="w-2 h-2 bg-netcore-whatsapp rounded-full mr-1"></span>
                WhatsApp
              </h6>
              <span className="text-xs text-gray-500">Conversion: 8.2%</span>
            </div>
            <div className="h-1 bg-gray-100 rounded-full">
              <div className="h-1 bg-netcore-whatsapp rounded-full" style={{width: '65%'}}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <h6 className="text-xs font-medium flex items-center">
                <span className="w-2 h-2 bg-netcore-rcs rounded-full mr-1"></span>
                RCS
              </h6>
              <span className="text-xs text-gray-500">Conversion: 7.5%</span>
            </div>
            <div className="h-1 bg-gray-100 rounded-full">
              <div className="h-1 bg-netcore-rcs rounded-full" style={{width: '25%'}}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <h6 className="text-xs font-medium flex items-center">
                <span className="w-2 h-2 bg-netcore-sms rounded-full mr-1"></span>
                SMS
              </h6>
              <span className="text-xs text-gray-500">Conversion: 3.1%</span>
            </div>
            <div className="h-1 bg-gray-100 rounded-full">
              <div className="h-1 bg-netcore-sms rounded-full" style={{width: '10%'}}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button onClick={onNavigateToCompliance} variant="outline" className="border-netcore-blue text-netcore-blue">
          Export Report <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default AnalyticsTab;
