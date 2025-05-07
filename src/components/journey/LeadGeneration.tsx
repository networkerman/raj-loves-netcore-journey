
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
            While scrolling through Instagram, Raj spots a CTWA ad for a Bajaj credit card offering dining rewards—perfect for his weekend plans in Mumbai.
          </p>
          
          <div className="border border-gray-300 rounded-lg overflow-hidden mb-6">
            {/* Instagram-style header */}
            <div className="bg-white p-3 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-netcore-orange to-netcore-blue flex items-center justify-center text-white font-bold">B</div>
                <div className="ml-2">
                  <span className="font-medium text-sm">bajajfinserv</span>
                  <span className="text-xs text-gray-500 block">Sponsored</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 flex items-center justify-center">
                  <span className="text-lg leading-none">•••</span>
                </div>
              </div>
            </div>
            
            <div>
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
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
              
              {/* Instagram-style engagement bar */}
              <div className="py-2 px-3 flex items-center gap-4 border-b border-gray-200">
                <div className="flex items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="#9E9E9E"/>
                  </svg>
                  <span className="ml-1 text-sm text-gray-500">2,456</span>
                </div>
                <div className="flex items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="ml-1 text-sm text-gray-500">142</span>
                </div>
                <div className="flex items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 3L10 15M22 3L15 21L11 13L3 9L22 3Z" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="ml-auto">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 3C17.2626 2.73735 17.5744 2.52901 17.9176 2.38687C18.2608 2.24473 18.6286 2.17157 19 2.17157C19.3714 2.17157 19.7392 2.24473 20.0824 2.38687C20.4256 2.52901 20.7374 2.73735 21 3C21.2626 3.26264 21.471 3.57444 21.6131 3.9176C21.7553 4.26077 21.8284 4.62856 21.8284 5C21.8284 5.37143 21.7553 5.73923 21.6131 6.08239C21.471 6.42555 21.2626 6.73735 21 7L8 20L3 21L4 16L17 3Z" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              {/* Ad content */}
              <div className="p-4">
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
