
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PhoneCall, Play, MessageSquare } from 'lucide-react';

interface SupportProps {
  onComplete: () => void;
}

const Support: React.FC<SupportProps> = ({ onComplete }) => {
  const [callState, setCallState] = useState<'inactive' | 'connecting' | 'active' | 'complete'>('inactive');
  
  const handleCall = () => {
    setCallState('connecting');
    
    setTimeout(() => {
      setCallState('active');
      
      setTimeout(() => {
        setCallState('complete');
        
        setTimeout(() => {
          onComplete();
        }, 2000);
      }, 4000);
    }, 2000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      <div className="bg-white rounded-lg shadow-lg mb-4 overflow-hidden">
        <div className="bg-netcore-blue text-white p-4">
          <h3 className="text-xl font-semibold">Step 6: Support and Beyond</h3>
          <p className="opacity-90">WhatsApp Voice Business Calling API</p>
        </div>
        
        <div className="p-4">
          <p className="mb-4 text-gray-700">
            Curious about his credit limit, Raj uses WhatsApp Voice Business Calling API to call support directly from the chat interface, getting personalized help without leaving WhatsApp.
          </p>
          
          <Card className="border border-gray-300 overflow-hidden mb-6">
            <div className="whatsapp-header">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                <span className="text-lg font-bold">B</span>
              </div>
              <div>
                <h4 className="font-medium">Bajaj Finserv</h4>
                <p className="text-xs opacity-80">Online</p>
              </div>
            </div>
            
            <div className="p-4 bg-[#E5DDD5] bg-opacity-50">
              <div className="chat-bubble chat-bubble-user">
                I want to know more about increasing my credit limit.
              </div>
              
              <div className="chat-bubble chat-bubble-bot">
                Hi Raj! I'd be happy to help you with information about increasing your credit limit. For personalized assistance, would you like to:
              </div>
              
              {callState === 'inactive' && (
                <div className="flex justify-center my-4 space-x-3">
                  <Button 
                    onClick={handleCall} 
                    className="bg-netcore-whatsapp hover:bg-netcore-whatsapp/90 flex items-center"
                  >
                    <PhoneCall className="mr-2 h-4 w-4" />
                    Call Support
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-gray-400 text-gray-700"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Continue in Chat
                  </Button>
                </div>
              )}
              
              {callState === 'connecting' && (
                <div className="bg-white rounded-lg p-4 my-4 animate-fade-in">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-netcore-teal flex items-center justify-center text-white text-xl font-bold mr-3">
                        B
                      </div>
                      <div>
                        <p className="font-medium">Bajaj Finserv Support</p>
                        <p className="text-xs text-gray-500">via WhatsApp Voice</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="animate-pulse text-center">
                      <div className="w-16 h-16 rounded-full bg-netcore-whatsapp/20 flex items-center justify-center mx-auto mb-2">
                        <PhoneCall className="h-8 w-8 text-netcore-whatsapp" />
                      </div>
                      <p className="text-netcore-whatsapp font-medium">Connecting...</p>
                    </div>
                  </div>
                </div>
              )}
              
              {callState === 'active' && (
                <div className="bg-white rounded-lg p-4 my-4 animate-fade-in">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-netcore-teal flex items-center justify-center text-white text-xl font-bold mr-3">
                        B
                      </div>
                      <div>
                        <p className="font-medium">Credit Specialist</p>
                        <p className="text-xs text-gray-500">00:45</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center cursor-pointer">
                        <PhoneCall className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-3">
                    <div className="flex items-center gap-3">
                      <Play className="h-6 w-6 text-gray-400" />
                      <div className="flex-1">
                        <div className="w-full h-2 bg-gray-300 rounded-full">
                          <div className="h-2 bg-netcore-teal rounded-full animate-[grow_4s_linear]" style={{width: '75%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 text-sm text-gray-600 italic">
                    "Based on your spending pattern and payment history, you're eligible for a credit limit increase of up to 20%. I can process this request right now..."
                  </div>
                </div>
              )}
              
              {callState === 'complete' && (
                <div className="space-y-3">
                  <div className="chat-bubble chat-bubble-bot animate-fade-in">
                    Your call has ended. The credit specialist has approved your credit limit increase to ₹1,20,000!
                  </div>
                  <div className="chat-bubble chat-bubble-bot animate-fade-in animation-delay-200">
                    Is there anything else you'd like to know about your card?
                  </div>
                  <div className="chat-bubble chat-bubble-user animate-fade-in animation-delay-300">
                    No, that's all for now. Thank you!
                  </div>
                </div>
              )}
            </div>
          </Card>
          
          <div className="mt-6 bg-netcore-teal/10 rounded-lg p-4 border border-netcore-teal/30">
            <h4 className="font-semibold text-netcore-teal flex items-center">
              <span className="w-6 h-6 rounded-full bg-netcore-teal text-white flex items-center justify-center text-xs mr-2">N</span>
              Netcore Feature Spotlight
            </h4>
            <p className="mt-2 text-sm">
              <strong>WhatsApp Voice Business Calling API:</strong> Enables voice calls directly within the WhatsApp interface, creating a seamless support experience without requiring users to leave the app or dial a separate number.
            </p>
            <p className="mt-2 text-sm">
              <strong>Context-Aware Support:</strong> When customers call through WhatsApp, agents have immediate access to their conversation history and account details, enabling more efficient and personalized service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
