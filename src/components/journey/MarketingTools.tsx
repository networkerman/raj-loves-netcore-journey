
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Import our new components
import CampaignTab from './tabs/CampaignTab';
import AnalyticsTab from './tabs/AnalyticsTab';
import ComplianceTab from './tabs/ComplianceTab';
import FeatureSpotlight from './components/FeatureSpotlight';

interface MarketingToolsProps {
  onComplete: () => void;
}

const MarketingTools: React.FC<MarketingToolsProps> = ({ onComplete }) => {
  const [activeTab, setActiveTab] = useState("campaign");
  
  const handleNavigateToAnalytics = () => {
    setActiveTab("analytics");
  };
  
  const handleNavigateToCompliance = () => {
    setActiveTab("compliance");
  };
  
  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      <div className="bg-white rounded-lg shadow-lg mb-4 overflow-hidden">
        <div className="bg-netcore-blue text-white p-4">
          <h3 className="text-xl font-semibold">Behind the Scenes: Marketing Team Tools</h3>
          <p className="opacity-90">Multi CTA, QR Codes, and Advanced Analytics</p>
        </div>
        
        <div className="p-4">
          <p className="mb-4 text-gray-700">
            The Bajaj marketing team crafts campaigns with Multi CTA templates and QR codes, tracks Raj's engagement, and ensures compliance using Netcore's comprehensive marketing tools.
          </p>
          
          <Card className="border border-gray-300 overflow-hidden mb-6">
            <div className="bg-netcore-blue text-white p-3 flex items-center">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                <span className="text-lg font-bold">N</span>
              </div>
              <div>
                <h4 className="font-medium">Netcore Marketing Dashboard</h4>
                <p className="text-xs opacity-80">Bajaj Finserv Team</p>
              </div>
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="border-b border-gray-200">
                <TabsList className="bg-transparent border-b-0 p-0 h-auto">
                  <TabsTrigger 
                    value="campaign" 
                    className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-netcore-teal data-[state=active]:shadow-none rounded-none"
                  >
                    Campaign Builder
                  </TabsTrigger>
                  <TabsTrigger 
                    value="analytics" 
                    className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-netcore-teal data-[state=active]:shadow-none rounded-none"
                  >
                    Analytics
                  </TabsTrigger>
                  <TabsTrigger 
                    value="compliance" 
                    className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-netcore-teal data-[state=active]:shadow-none rounded-none"
                  >
                    Compliance
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="campaign">
                <CampaignTab onNavigateToAnalytics={handleNavigateToAnalytics} />
              </TabsContent>
              
              <TabsContent value="analytics">
                <AnalyticsTab onNavigateToCompliance={handleNavigateToCompliance} />
              </TabsContent>
              
              <TabsContent value="compliance">
                <ComplianceTab onComplete={onComplete} />
              </TabsContent>
            </Tabs>
          </Card>
          
          <FeatureSpotlight />
        </div>
      </div>
    </div>
  );
};

export default MarketingTools;
