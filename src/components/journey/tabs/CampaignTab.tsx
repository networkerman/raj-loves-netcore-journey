
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CampaignTabProps {
  onNavigateToAnalytics: () => void;
}

const CampaignTab: React.FC<CampaignTabProps> = ({ onNavigateToAnalytics }) => {
  return (
    <div className="p-4">
      <h5 className="font-medium mb-2">Multi CTA Template Builder</h5>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
          <h6 className="text-sm font-medium mb-2">Template Details</h6>
          <div className="space-y-2">
            <div>
              <label className="text-xs text-gray-500">Template Name</label>
              <p className="text-sm">Credit Card Re-engagement</p>
            </div>
            <div>
              <label className="text-xs text-gray-500">Category</label>
              <p className="text-sm">Transactional</p>
            </div>
            <div>
              <label className="text-xs text-gray-500">Channel</label>
              <div className="flex gap-1 mt-1">
                <span className="bg-netcore-whatsapp/10 text-netcore-whatsapp text-xs py-0.5 px-2 rounded">WhatsApp</span>
                <span className="bg-netcore-rcs/10 text-netcore-rcs text-xs py-0.5 px-2 rounded">RCS</span>
                <span className="bg-netcore-sms/10 text-netcore-sms text-xs py-0.5 px-2 rounded">SMS</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-span-2 border border-gray-200 rounded-lg">
          <div className="bg-gray-50 p-3 border-b border-gray-200">
            <h6 className="text-sm font-medium">Template Preview</h6>
          </div>
          <div className="p-3">
            <div className="bg-white border border-gray-200 rounded-lg p-3 mb-3">
              <p className="text-sm mb-3">
                Hi {"{1}"}, explore mutual funds and two-wheeler insurance tailored for you! Complete your credit card application now.
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="bg-netcore-blue/10 text-netcore-blue text-xs py-1 px-2 rounded border border-netcore-blue/30">
                  Apply Now
                </div>
                <div className="bg-gray-100 text-gray-700 text-xs py-1 px-2 rounded border border-gray-200">
                  Learn More
                </div>
                <div className="bg-gray-100 text-gray-700 text-xs py-1 px-2 rounded border border-gray-200">
                  Scan QR
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button size="sm" className="bg-netcore-blue hover:bg-netcore-blue/90">
                Save Template
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <h5 className="font-medium mb-2">Audience Targeting</h5>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <label className="text-xs text-gray-500">Target Segment</label>
            <div className="bg-white border border-gray-200 rounded p-2 mt-1">
              <p className="text-sm">Incomplete Applications</p>
            </div>
          </div>
          <div>
            <label className="text-xs text-gray-500">Filters Applied</label>
            <div className="bg-white border border-gray-200 rounded p-2 mt-1 flex flex-wrap gap-1">
              <span className="bg-gray-100 text-xs py-0.5 px-1.5 rounded">Age: 25-35</span>
              <span className="bg-gray-100 text-xs py-0.5 px-1.5 rounded">Income: {">"} 15LPA</span>
              <span className="bg-gray-100 text-xs py-0.5 px-1.5 rounded">+2 more</span>
            </div>
          </div>
          <div>
            <label className="text-xs text-gray-500">AI Recommendations</label>
            <div className="bg-netcore-teal/5 border border-netcore-teal/20 rounded p-2 mt-1">
              <p className="text-xs">Using AI twin to personalize offers</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button onClick={onNavigateToAnalytics} className="bg-netcore-blue hover:bg-netcore-blue/90">
          Launch Campaign <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CampaignTab;
