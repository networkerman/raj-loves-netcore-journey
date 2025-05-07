
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

interface ComplianceTabProps {
  onComplete: () => void;
}

const ComplianceTab: React.FC<ComplianceTabProps> = ({ onComplete }) => {
  return (
    <div className="p-4">
      <h5 className="font-medium mb-2">Compliance Dashboard</h5>
      
      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h6 className="text-sm font-medium">Template Status</h6>
          <div className="bg-netcore-green/10 text-netcore-green text-xs py-1 px-2 rounded border border-netcore-green/30 flex items-center">
            <Check className="h-3 w-3 mr-1" />
            Approved
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="bg-gray-50 p-3 rounded border border-gray-200">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-netcore-green/20 flex items-center justify-center mr-2">
                  <Check className="h-4 w-4 text-netcore-green" />
                </div>
                <span className="text-sm">Content Policy Compliance</span>
              </div>
              <span className="text-xs text-netcore-green">Passed</span>
            </div>
          </div>
          <div className="bg-gray-50 p-3 rounded border border-gray-200">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-netcore-green/20 flex items-center justify-center mr-2">
                  <Check className="h-4 w-4 text-netcore-green" />
                </div>
                <span className="text-sm">Opt-in Verification</span>
              </div>
              <span className="text-xs text-netcore-green">Verified</span>
            </div>
          </div>
          <div className="bg-gray-50 p-3 rounded border border-gray-200">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-netcore-green/20 flex items-center justify-center mr-2">
                  <Check className="h-4 w-4 text-netcore-green" />
                </div>
                <span className="text-sm">Category Alignment</span>
              </div>
              <span className="text-xs text-netcore-green">Matched</span>
            </div>
          </div>
        </div>
      </div>
      
      <h5 className="font-medium mb-2">Auto Stop on Recategorization</h5>
      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
        <p className="text-sm mb-3">
          Netcore's Auto Stop feature will automatically pause your campaign if WhatsApp or RCS platforms recategorize your template, preventing potential compliance issues.
        </p>
        
        <div className="bg-netcore-blue/5 p-3 rounded border border-netcore-blue/20">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2">
              <img 
                src="/Netcore logo.jpg" 
                alt="Netcore" 
                className="h-6 w-6 object-contain rounded-full"
              />
            </div>
            <span className="text-sm">Auto Stop is enabled for this campaign</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button onClick={onComplete} className="bg-netcore-blue hover:bg-netcore-blue/90">
          Complete Tour <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ComplianceTab;
