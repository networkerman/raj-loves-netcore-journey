
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, ArrowRight } from 'lucide-react';

interface MarketingToolsProps {
  onComplete: () => void;
}

const MarketingTools: React.FC<MarketingToolsProps> = ({ onComplete }) => {
  const [activeTab, setActiveTab] = useState("campaign");
  
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
              
              <TabsContent value="campaign" className="p-4">
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
                          Hi {{1}}, explore mutual funds and two-wheeler insurance tailored for you! Complete your credit card application now.
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
                        <span className="bg-gray-100 text-xs py-0.5 px-1.5 rounded">Income: >15LPA</span>
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
                  <Button onClick={() => setActiveTab("analytics")} className="bg-netcore-blue hover:bg-netcore-blue/90">
                    Launch Campaign <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="analytics" className="p-4">
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
                  <Button onClick={() => setActiveTab("compliance")} variant="outline" className="border-netcore-blue text-netcore-blue">
                    Export Report <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="compliance" className="p-4">
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
                      <div className="w-8 h-8 rounded-full bg-netcore-blue/20 flex items-center justify-center mr-2">
                        <span className="text-xs font-bold text-netcore-blue">i</span>
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
              </TabsContent>
            </Tabs>
          </Card>
          
          <div className="mt-6 bg-netcore-teal/10 rounded-lg p-4 border border-netcore-teal/30">
            <h4 className="font-semibold text-netcore-teal flex items-center">
              <span className="w-6 h-6 rounded-full bg-netcore-teal text-white flex items-center justify-center text-xs mr-2">N</span>
              Netcore Feature Spotlight
            </h4>
            <p className="mt-2 text-sm">
              <strong>Multi CTA and QR Support:</strong> Enhances message templates with multiple call-to-action buttons and QR codes, increasing engagement options for customers.
            </p>
            <p className="mt-2 text-sm">
              <strong>Auto Stop on Recategorization:</strong> Automatically pauses campaigns if messaging platforms change the template category, ensuring continued compliance.
            </p>
            <p className="mt-2 text-sm">
              <strong>Better SMS Dashboards, Campaigns, RBAC:</strong> Provides comprehensive analytics, campaign management tools, and role-based access control for marketing teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingTools;
