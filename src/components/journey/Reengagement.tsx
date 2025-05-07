
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ReengagementProps {
  onComplete: () => void;
}

const Reengagement: React.FC<ReengagementProps> = ({ onComplete }) => {
  const [showRcs, setShowRcs] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  
  const handleSmsClick = () => {
    setShowRcs(true);
  };

  const handleRcsButtonClick = () => {
    setUserInteracted(true);
  };

  const handleContinueToNextStep = () => {
    if (userInteracted) {
      onComplete();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      <div className="bg-white rounded-lg shadow-lg mb-4 overflow-hidden">
        <div className="bg-netcore-blue text-white p-4">
          <h3 className="text-xl font-semibold">Step 3: Re-engagement</h3>
          <p className="opacity-90">SMS Autoupgrade to RCS and Static Link Tracking</p>
        </div>
        
        <div className="p-4">
          <p className="mb-4 text-gray-700">
            Raj delays applying. An AI twin built from his persona and credit card interest predicts he might be interested in mutual funds and two-wheeler insurance. He receives a personalized SMS that auto-upgrades to RCS for richer visuals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Card className="border border-gray-300 p-4">
              <h4 className="font-semibold text-netcore-blue mb-3">Behind the Scenes: AI Twin</h4>
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 mb-3">
                <h5 className="text-sm font-medium text-gray-700">Customer Profile</h5>
                <ul className="text-xs space-y-1 mt-2 text-gray-600">
                  <li><span className="font-medium">Age:</span> 27</li>
                  <li><span className="font-medium">Income:</span> 20 LPA</li>
                  <li><span className="font-medium">Location:</span> Mumbai</li>
                  <li><span className="font-medium">Life Stage:</span> Recently married</li>
                  <li><span className="font-medium">Previous Interest:</span> Dining rewards credit card</li>
                </ul>
              </div>
              <div className="bg-netcore-teal/5 rounded-lg p-3 border border-netcore-teal/20">
                <h5 className="text-sm font-medium text-netcore-teal">AI Prediction</h5>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="bg-white p-2 rounded border border-gray-200">
                    <p className="text-xs font-medium">Mutual Funds</p>
                    <div className="h-2 bg-gray-200 rounded-full mt-1">
                      <div className="h-2 bg-netcore-teal rounded-full w-4/5"></div>
                    </div>
                    <p className="text-[10px] text-right text-gray-500 mt-0.5">80%</p>
                  </div>
                  <div className="bg-white p-2 rounded border border-gray-200">
                    <p className="text-xs font-medium">Two-Wheeler Insurance</p>
                    <div className="h-2 bg-gray-200 rounded-full mt-1">
                      <div className="h-2 bg-netcore-teal rounded-full w-3/5"></div>
                    </div>
                    <p className="text-[10px] text-right text-gray-500 mt-0.5">60%</p>
                  </div>
                </div>
              </div>
            </Card>
            
            {!showRcs && (
              <Card className="border border-gray-300 flex flex-col">
                <div className="sms-header mb-auto">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <span className="text-lg font-bold">B</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Bajaj Finserv</h4>
                    <p className="text-xs opacity-80">SMS</p>
                  </div>
                </div>
                
                <div className="p-4 flex-grow">
                  <div className="chat-bubble chat-bubble-sms">
                    <p className="font-medium mb-1">Bajaj Finserv</p>
                    <p className="text-sm">
                      Raj, explore mutual funds and two-wheeler insurance tailored for you! Complete your credit card application: https://baja.j/card123
                    </p>
                  </div>
                </div>
                
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                  <Button 
                    onClick={handleSmsClick} 
                    className="w-full bg-netcore-blue hover:bg-netcore-blue/90"
                  >
                    Tap to view enhanced message <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            )}
          </div>
          
          {showRcs && (
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
                  <h4 className="font-medium mb-2">Exclusive Offers for You, Raj!</h4>
                  
                  <div className="rounded-lg overflow-hidden mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                      alt="Financial products" 
                      className="w-full h-28 object-cover"
                    />
                  </div>
                  
                  <p className="text-sm mb-3">
                    We've noticed you haven't completed your credit card application. We also have mutual funds and two-wheeler insurance options perfect for someone like you in Mumbai.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <Button 
                      size="sm" 
                      onClick={() => {
                        handleRcsButtonClick();
                      }}
                      className="bg-netcore-rcs hover:bg-netcore-rcs/90"
                    >
                      Complete Card Application
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={handleRcsButtonClick}
                      className="border-netcore-rcs text-netcore-rcs hover:bg-netcore-rcs/10"
                    >
                      Explore Mutual Funds
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={handleRcsButtonClick}
                      className="border-netcore-rcs text-netcore-rcs hover:bg-netcore-rcs/10"
                    >
                      Two-Wheeler Insurance
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-3 border-t border-gray-200 bg-white">
                <div className="flex justify-between items-center">
                  <div className="text-xs text-gray-500">
                    {userInteracted ? "Ready to continue" : "Please select an option"}
                  </div>
                  <Button 
                    size="sm"
                    disabled={!userInteracted}
                    onClick={handleContinueToNextStep}
                    className={`${userInteracted ? 'bg-netcore-rcs hover:bg-netcore-rcs/90' : 'bg-gray-300'}`}
                  >
                    Continue <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Card>
          )}
          
          <div className="mt-6 bg-netcore-teal/10 rounded-lg p-4 border border-netcore-teal/30">
            <h4 className="font-semibold text-netcore-teal flex items-center">
              <span className="w-6 h-6 rounded-full bg-netcore-teal text-white flex items-center justify-center text-xs mr-2">N</span>
              Netcore Feature Spotlight
            </h4>
            <p className="mt-2 text-sm">
              <strong>SMS Autoupgrade to RCS:</strong> Automatically delivers rich, interactive experiences to users with RCS-capable devices, while ensuring basic SMS delivery to others.
            </p>
            <p className="mt-2 text-sm">
              <strong>Static Link Tracking with Link Swapping:</strong> Monitors engagement with links in messages while dynamically optimizing them for better performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reengagement;
