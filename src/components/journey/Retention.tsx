
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { ProgressBar } from '@/components/marketing-ui';

interface RetentionProps {
  onComplete: () => void;
}

const Retention: React.FC<RetentionProps> = ({ onComplete }) => {
  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      <div className="bg-white rounded-lg shadow-lg mb-4 overflow-hidden">
        <div className="bg-netcore-blue text-white p-4">
          <h3 className="text-xl font-semibold">Step 5: Retention</h3>
          <p className="opacity-90">SMS Autoupgrade to RCS for spending updates</p>
        </div>
        
        <div className="p-4">
          <p className="mb-4 text-gray-700">
            Raj's card is approved, and he uses it for dining and travel. He gets monthly spending updates via RCS, with visuals and buttons for a richer experience.
          </p>
          
          <Card className="border border-gray-300 overflow-hidden mb-6">
            <div className="rcs-header">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                <span className="text-lg font-bold">B</span>
              </div>
              <div>
                <h4 className="font-medium">Bajaj Finserv</h4>
                <p className="text-xs opacity-80">RCS</p>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50">
              <div className="chat-bubble chat-bubble-rcs animate-fade-in">
                <h4 className="font-medium mb-1">Monthly Spending Summary</h4>
                <p className="text-xs text-gray-500 mb-3">March 2023</p>
                
                <div className="bg-white p-3 rounded-lg border border-gray-200 mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <h5 className="text-sm font-medium">Dining Rewards Card</h5>
                    <span className="text-xs bg-netcore-teal/10 text-netcore-teal px-2 py-0.5 rounded">Active</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-gray-600">Current Balance</span>
                    <span className="font-medium">₹18,435</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-gray-600">Available Credit</span>
                    <span className="font-medium">₹81,565</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-gray-600">Payment Due Date</span>
                    <span className="font-medium">18 Apr 2023</span>
                  </div>
                </div>
                
                <h5 className="text-sm font-medium mb-2">Spending Breakdown</h5>
                <div className="bg-white p-3 rounded-lg border border-gray-200 mb-4">
                  <div className="space-y-3">
                    <ProgressBar 
                      label="Dining" 
                      percentage={40} 
                      color="bg-netcore-teal" 
                      showValue={true}
                      className="mb-2"
                    />
                    <div className="text-right text-xs text-gray-600">₹7,250</div>
                    
                    <ProgressBar 
                      label="Travel" 
                      percentage={35} 
                      color="bg-netcore-rcs" 
                      showValue={true}
                      className="mb-2"
                    />
                    <div className="text-right text-xs text-gray-600">₹6,180</div>
                    
                    <ProgressBar 
                      label="Shopping" 
                      percentage={25} 
                      color="bg-netcore-orange" 
                      showValue={true}
                      className="mb-2"
                    />
                    <div className="text-right text-xs text-gray-600">₹4,600</div>
                  </div>
                </div>
                
                <div className="bg-netcore-rcs/5 p-3 rounded-lg border border-netcore-rcs/20 mb-4">
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 rounded-full bg-netcore-rcs/20 flex items-center justify-center text-netcore-rcs">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">5% Cashback Earned</h5>
                      <p className="text-xs text-gray-600">₹362 on dining this month</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Button 
                    size="sm" 
                    onClick={onComplete}
                    className="bg-netcore-rcs hover:bg-netcore-rcs/90"
                  >
                    View Full Statement
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-netcore-rcs text-netcore-rcs hover:bg-netcore-rcs/10"
                  >
                    Make Payment
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-netcore-rcs text-netcore-rcs hover:bg-netcore-rcs/10"
                  >
                    Contact Support
                  </Button>
                </div>
              </div>
            </div>
          </Card>
          
          <div className="mt-6 bg-netcore-teal/10 rounded-lg p-4 border border-netcore-teal/30">
            <h4 className="font-semibold text-netcore-teal flex items-center">
              <span className="w-6 h-6 rounded-full bg-netcore-teal text-white flex items-center justify-center text-xs mr-2">N</span>
              Netcore Feature Spotlight
            </h4>
            <p className="mt-2 text-sm">
              <strong>SMS Autoupgrade to RCS:</strong> Transforms traditional SMS alerts into rich, interactive experiences on supported devices, increasing engagement with monthly statements and payment options.
            </p>
            <p className="mt-2 text-sm">
              <strong>Rich Media Support:</strong> Enhances communication with visual elements like charts and graphs that make complex financial information more digestible and engaging for users.
            </p>
            <p className="mt-2 text-sm">
              <strong>RCS Web View:</strong> Supports richer engagement formats directly within the messaging interface, enabling interactive financial dashboards, statements, and customer service experiences without leaving the RCS conversation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retention;
