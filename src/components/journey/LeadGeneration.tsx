
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

interface LeadGenerationProps {
  onComplete: () => void;
}

const LeadGeneration: React.FC<LeadGenerationProps> = ({ onComplete }) => {
  const [showChat, setShowChat] = useState(false);
  
  const handleCtwaClick = () => {
    setShowChat(true);
    setTimeout(() => {
      onComplete();
    }, 2000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      <div className="bg-white rounded-lg shadow-lg mb-4 overflow-hidden">
        <div className="bg-netcore-blue text-white p-4">
          <h3 className="text-xl font-semibold">Step 1: Lead Generation</h3>
          <p className="opacity-90">Click-to-WhatsApp (CTWA) Ads capture high-intent leads</p>
        </div>
        
        <div className="p-4">
          <p className="mb-4 text-gray-700">
            While scrolling through social media, Raj spots a CTWA ad for a Bajaj credit card offering dining rewards—perfect for his weekend plans in Mumbai.
          </p>
          
          <div className="border border-gray-300 rounded-lg overflow-hidden mb-6">
            <div className="bg-gray-100 p-3 border-b border-gray-300 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-netcore-orange flex items-center justify-center text-white font-bold">B</div>
                <span className="ml-2 font-medium">Bajaj Finserv</span>
              </div>
              <span className="text-xs text-gray-500">Sponsored</span>
            </div>
            
            <div className="p-4">
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                  alt="Credit card with dining benefits" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-netcore-blue/80 flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-bold text-xl">Bajaj Dining Rewards Card</h4>
                    <p className="text-sm opacity-90">5% cashback on all restaurant bills</p>
                  </div>
                </div>
              </div>
              
              <h4 className="font-semibold text-lg mb-1">Enjoy Mumbai like never before!</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Get up to 5% cashback on dining, zero joining fee for a limited time, and exclusive restaurant offers.
              </p>
              
              <Button 
                onClick={handleCtwaClick} 
                className="w-full bg-netcore-whatsapp hover:bg-netcore-whatsapp/90 text-white"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Chat with us on WhatsApp
              </Button>
            </div>
          </div>
          
          {showChat && (
            <Card className="border border-gray-300">
              <div className="whatsapp-header">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <span className="text-lg font-bold">B</span>
                </div>
                <div>
                  <h4 className="font-medium">Bajaj Finserv</h4>
                  <p className="text-xs opacity-80">Online</p>
                </div>
              </div>
              
              <div className="p-4 h-[200px] bg-[#E5DDD5] bg-opacity-50 overflow-y-auto">
                <div className="chat-bubble chat-user animate-fade-in">
                  Hi, I'm interested in the dining rewards credit card.
                </div>
                <div className="chat-bubble chat-bubble-bot animate-fade-in animation-delay-300">
                  Hello Raj! 👋 Thanks for your interest in our Dining Rewards Credit Card. I'll help you explore this option and get started with your application. 
                </div>
              </div>
              
              <div className="chat-input">
                <input 
                  type="text" 
                  placeholder="Type a message" 
                  className="flex-1 bg-transparent focus:outline-none"
                  disabled
                />
                <Button size="sm" variant="ghost" disabled>Send</Button>
              </div>
            </Card>
          )}

          <div className="mt-6 bg-netcore-teal/10 rounded-lg p-4 border border-netcore-teal/30">
            <h4 className="font-semibold text-netcore-teal flex items-center">
              <span className="w-6 h-6 rounded-full bg-netcore-teal text-white flex items-center justify-center text-xs mr-2">N</span>
              Netcore Feature Spotlight
            </h4>
            <p className="mt-2 text-sm">
              <strong>Click-to-WhatsApp Ads:</strong> Seamlessly connect high-intent prospects directly to a WhatsApp chat from social media ads, significantly increasing conversion rates compared to traditional landing pages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadGeneration;
