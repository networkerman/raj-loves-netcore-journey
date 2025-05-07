
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface FuturePossibilitiesProps {
  onComplete: () => void;
}

const FuturePossibilities: React.FC<FuturePossibilitiesProps> = ({ onComplete }) => {
  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      <div className="bg-white rounded-lg shadow-lg mb-4 overflow-hidden">
        <div className="bg-netcore-blue text-white p-4">
          <h3 className="text-xl font-semibold">Future Possibilities</h3>
          <p className="opacity-90">What's next for Raj's Netcore-powered journey</p>
        </div>
        
        <div className="p-4">
          <p className="mb-4 text-gray-700">
            Raj's experience with Bajaj Financial Services could evolve even further with these upcoming Netcore innovations:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Card className="border-2 border-netcore-blue/20 overflow-hidden">
              <div className="bg-netcore-blue/5 p-3 border-b border-netcore-blue/10">
                <h4 className="text-lg font-semibold text-netcore-blue">UCE 2.0</h4>
              </div>
              <CardContent className="pt-4">
                <p className="text-sm mb-3">
                  AI-powered message crafting that personalizes content based on individual user behavior patterns and preferences.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <h5 className="text-xs font-medium mb-1">For Raj</h5>
                  <p className="text-xs text-gray-600">
                    Messages that dynamically adapt based on his spending patterns, suggesting relevant financial products exactly when he needs them.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-netcore-teal/20 overflow-hidden">
              <div className="bg-netcore-teal/5 p-3 border-b border-netcore-teal/10">
                <h4 className="text-lg font-semibold text-netcore-teal">RCS Multiple Bot Support</h4>
              </div>
              <CardContent className="pt-4">
                <p className="text-sm mb-3">
                  Specialized bots that handle different aspects of customer service, from technical support to sales inquiries.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <h5 className="text-xs font-medium mb-1">For Raj</h5>
                  <p className="text-xs text-gray-600">
                    Access to specialized financial advisors through RCS for complex queries about investments, insurance, and credit planning.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-netcore-whatsapp/20 overflow-hidden">
              <div className="bg-netcore-whatsapp/5 p-3 border-b border-netcore-whatsapp/10">
                <h4 className="text-lg font-semibold text-netcore-whatsapp">WhatsApp Template Analytics</h4>
              </div>
              <CardContent className="pt-4">
                <p className="text-sm mb-3">
                  Detailed performance metrics for WhatsApp templates, helping businesses optimize messaging strategies.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <h5 className="text-xs font-medium mb-1">For Bajaj</h5>
                  <p className="text-xs text-gray-600">
                    Deep insights into which messages drive the most conversions, enabling more effective communication with customers like Raj.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-netcore-orange/20 overflow-hidden">
              <div className="bg-netcore-orange/5 p-3 border-b border-netcore-orange/10">
                <h4 className="text-lg font-semibold text-netcore-orange">Dynamic Carousels</h4>
              </div>
              <CardContent className="pt-4">
                <p className="text-sm mb-3">
                  Personalized product displays that adapt to user preferences and browsing history in real-time.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <h5 className="text-xs font-medium mb-1">For Raj</h5>
                  <p className="text-xs text-gray-600">
                    Financial product offers that automatically adjust based on his life stage, recent activities, and expressed interests.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="border-2 border-netcore-blue/20 mb-6">
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold text-netcore-blue mb-2">CAPI (Conversion API)</h4>
              <p className="text-sm mb-4">
                Transparent tracking from ad impression to conversion, providing complete visibility into the customer journey.
              </p>
              
              <div className="bg-netcore-blue/5 rounded-lg p-4 border border-netcore-blue/20">
                <h5 className="text-sm font-medium mb-2 text-netcore-blue">Full Journey Analytics</h5>
                
                <div className="relative">
                  <div className="absolute top-0 left-1/2 w-px h-full bg-netcore-blue/30 -translate-x-1/2 z-10"></div>
                  
                  <div className="relative z-20 space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-netcore-blue/10 border-2 border-netcore-blue flex items-center justify-center">
                        <span className="text-xs font-bold text-netcore-blue">1</span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">Ad Impression</p>
                        <p className="text-xs text-gray-500">Social media discovery</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-netcore-blue/10 border-2 border-netcore-blue flex items-center justify-center">
                        <span className="text-xs font-bold text-netcore-blue">2</span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">CTWA Click</p>
                        <p className="text-xs text-gray-500">WhatsApp initiation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-netcore-blue/10 border-2 border-netcore-blue flex items-center justify-center">
                        <span className="text-xs font-bold text-netcore-blue">3</span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">Form Completion</p>
                        <p className="text-xs text-gray-500">Application data collected</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-netcore-blue/10 border-2 border-netcore-blue flex items-center justify-center">
                        <span className="text-xs font-bold text-netcore-blue">4</span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">Payment Completion</p>
                        <p className="text-xs text-gray-500">Final conversion</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center">
            <Button 
              onClick={onComplete} 
              className="bg-netcore-blue hover:bg-netcore-blue/90"
            >
              Complete Journey
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturePossibilities;
