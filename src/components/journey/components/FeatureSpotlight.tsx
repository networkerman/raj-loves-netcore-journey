
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

interface FeatureItem {
  title: string;
  description: string;
  tooltip?: string;
}

const featureItems: FeatureItem[] = [
  {
    title: 'Multi CTA and QR Support',
    description: 'Enhances message templates with multiple call-to-action buttons and QR codes, increasing engagement options for customers.',
    tooltip: 'Increase conversion rates by 25% with multiple CTAs in a single message'
  },
  {
    title: 'Auto Stop on Recategorization',
    description: 'Automatically pauses campaigns if messaging platforms change the template category, ensuring continued compliance.',
    tooltip: 'Prevent compliance issues with automatic campaign suspension'
  },
  {
    title: 'Better SMS Dashboards, Campaigns, RBAC',
    description: 'Provides comprehensive analytics, campaign management tools, and role-based access control for marketing teams.',
    tooltip: 'Get deeper insights and control with advanced analytics tools'
  }
];

const FeatureSpotlight: React.FC = () => {
  return (
    <div className="mt-6 bg-netcore-teal/10 rounded-lg p-4 border border-netcore-teal/30">
      <h4 className="font-semibold text-netcore-teal flex items-center">
        <img 
          src="/Netcore logo.jpg" 
          alt="Netcore" 
          className="h-6 w-6 mr-2 bg-white rounded-full p-[2px]"
        />
        Netcore Feature Spotlight
      </h4>
      
      <div className="space-y-3 mt-3">
        {featureItems.map((item, index) => (
          <div key={index} className="flex">
            <div className="flex-1">
              <p className="text-sm">
                <strong>{item.title}:</strong> {item.description}
              </p>
            </div>
            {item.tooltip && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="ml-2 text-netcore-teal/70 hover:text-netcore-teal">
                      <Info className="h-4 w-4" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-netcore-teal text-white border-netcore-teal">
                    <p>{item.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSpotlight;
