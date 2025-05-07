
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Check } from 'lucide-react';

interface LeadNurturingProps {
  onComplete: () => void;
}

const LeadNurturing: React.FC<LeadNurturingProps> = ({ onComplete }) => {
  const [messages, setMessages] = useState<Array<{text: string, type: string}>>([
    { text: "Hi, I'm interested in the dining rewards credit card.", type: 'user' },
    { text: "Hello Raj! 👋 Thanks for your interest in our Dining Rewards Credit Card. I'll help you explore this option and get started with your application.", type: 'bot' },
  ]);
  const [panInput, setPanInput] = useState('');
  const [showPanForm, setShowPanForm] = useState(true);
  const [showCards, setShowCards] = useState(false);
  const [cardSelected, setCardSelected] = useState(false);

  useEffect(() => {
    // Add the next message after a delay
    const timer = setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { text: "Let's get started with your credit card application. Could you please provide your PAN card number?", type: 'bot' }
      ]);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handlePanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!panInput || panInput.length !== 10) {
      return;
    }
    
    // Add user message
    setMessages(prev => [...prev, { text: panInput, type: 'user' }]);
    setShowPanForm(false);
    
    // Add bot processing message
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "Thank you! Let me check your eligibility based on your PAN details...", type: 'bot' }]);
      
      // Add bot response with card options after delay
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { text: "Good news, Raj! Based on your profile, you're eligible for the following credit cards:", type: 'bot' }
        ]);
        setShowCards(true);
      }, 2000);
    }, 1000);
  };

  const handleCardSelect = (cardName: string) => {
    setMessages(prev => [...prev, { text: `I'd like to proceed with the ${cardName} card.`, type: 'user' }]);
    setCardSelected(true);
    
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { text: "Great choice! I've saved your preference for the Dining Rewards Card. To proceed with your application, we'll need some additional details.", type: 'bot' }
      ]);
      
      setTimeout(() => {
        onComplete();
      }, 2000);
    }, 1000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      <div className="bg-white rounded-lg shadow-lg mb-4 overflow-hidden">
        <div className="bg-netcore-blue text-white p-4">
          <h3 className="text-xl font-semibold">Step 2: Lead Nurturing</h3>
          <p className="opacity-90">WhatsApp Flow API enables data collection and personalization</p>
        </div>
        
        <div className="p-4">
          <p className="mb-4 text-gray-700">
            The chat continues seamlessly, collecting Raj's PAN details through a WhatsApp Flow and suggesting tailored credit card options based on his CIBIL score.
          </p>
          
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
            
            <div className="p-4 h-[300px] bg-[#E5DDD5] bg-opacity-50 overflow-y-auto flex flex-col">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`chat-bubble ${message.type === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'} ${
                    index >= messages.length - 2 ? 'animate-fade-in' : ''
                  }`}
                >
                  {message.text}
                </div>
              ))}

              {showPanForm && (
                <div className="chat-bubble chat-bubble-bot bg-white/90 p-4 animate-fade-in">
                  <form onSubmit={handlePanSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Enter your PAN card number</label>
                      <Input 
                        value={panInput} 
                        onChange={(e) => setPanInput(e.target.value)} 
                        placeholder="ABCDE1234F" 
                        maxLength={10}
                        pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" 
                        className="border-netcore-teal/50"
                        required
                      />
                      <p className="text-xs text-gray-500">Format: ABCDE1234F</p>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-netcore-whatsapp hover:bg-netcore-whatsapp/90"
                    >
                      Submit
                    </Button>
                  </form>
                </div>
              )}

              {showCards && !cardSelected && (
                <div className="chat-bubble chat-bubble-bot bg-transparent border-0 mr-0 ml-0 max-w-full p-0 animate-fade-in">
                  <div className="flex gap-2 overflow-x-auto pb-2 px-1 snap-x">
                    <div className="min-w-[260px] max-w-[260px] snap-center">
                      <div className="bg-white rounded-lg shadow-md p-4 border border-netcore-teal/50 h-full">
                        <div className="flex items-start justify-between mb-2">
                          <div className="w-12 h-8 bg-netcore-teal/20 rounded flex items-center justify-center">
                            <span className="text-xs font-bold text-netcore-teal">BAJAJ</span>
                          </div>
                          <div className="bg-netcore-orange/10 text-netcore-orange text-xs font-medium py-1 px-2 rounded">
                            Recommended
                          </div>
                        </div>
                        <h4 className="font-semibold text-netcore-blue">Dining Rewards Card</h4>
                        <ul className="my-3 text-xs space-y-1 text-gray-700">
                          <li className="flex items-start">
                            <Check className="h-3 w-3 text-netcore-green mr-1 mt-0.5" />
                            <span>5% cashback on all dining</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-3 w-3 text-netcore-green mr-1 mt-0.5" />
                            <span>2x reward points on weekend spends</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-3 w-3 text-netcore-green mr-1 mt-0.5" />
                            <span>Zero joining fee (limited offer)</span>
                          </li>
                        </ul>
                        <Button 
                          className="w-full bg-netcore-blue hover:bg-netcore-blue/90 text-sm py-1 h-auto"
                          onClick={() => handleCardSelect("Dining Rewards")}
                        >
                          Select This Card
                        </Button>
                      </div>
                    </div>

                    <div className="min-w-[260px] max-w-[260px] snap-center">
                      <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 h-full">
                        <div className="flex items-start justify-between mb-2">
                          <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                            <span className="text-xs font-bold text-gray-500">BAJAJ</span>
                          </div>
                        </div>
                        <h4 className="font-semibold text-netcore-blue">Travel Points Card</h4>
                        <ul className="my-3 text-xs space-y-1 text-gray-700">
                          <li className="flex items-start">
                            <Check className="h-3 w-3 text-netcore-green mr-1 mt-0.5" />
                            <span>4x points on travel bookings</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-3 w-3 text-netcore-green mr-1 mt-0.5" />
                            <span>Complimentary airport lounge access</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-3 w-3 text-netcore-green mr-1 mt-0.5" />
                            <span>Travel insurance up to ₹50 lakhs</span>
                          </li>
                        </ul>
                        <Button 
                          variant="outline" 
                          className="w-full border-netcore-blue text-netcore-blue hover:bg-netcore-blue/10 text-sm py-1 h-auto"
                          onClick={() => handleCardSelect("Travel Points")}
                        >
                          Select This Card
                        </Button>
                      </div>
                    </div>

                    <div className="min-w-[260px] max-w-[260px] snap-center">
                      <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 h-full">
                        <div className="flex items-start justify-between mb-2">
                          <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                            <span className="text-xs font-bold text-gray-500">BAJAJ</span>
                          </div>
                        </div>
                        <h4 className="font-semibold text-netcore-blue">Cashback Card</h4>
                        <ul className="my-3 text-xs space-y-1 text-gray-700">
                          <li className="flex items-start">
                            <Check className="h-3 w-3 text-netcore-green mr-1 mt-0.5" />
                            <span>1.5% cashback on all purchases</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-3 w-3 text-netcore-green mr-1 mt-0.5" />
                            <span>3% cashback on utility bills</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-3 w-3 text-netcore-green mr-1 mt-0.5" />
                            <span>No annual fee for first year</span>
                          </li>
                        </ul>
                        <Button 
                          variant="outline" 
                          className="w-full border-netcore-blue text-netcore-blue hover:bg-netcore-blue/10 text-sm py-1 h-auto"
                          onClick={() => handleCardSelect("Cashback")}
                        >
                          Select This Card
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
          
          <div className="mt-6 bg-netcore-teal/10 rounded-lg p-4 border border-netcore-teal/30">
            <h4 className="font-semibold text-netcore-teal flex items-center">
              <span className="w-6 h-6 rounded-full bg-netcore-teal text-white flex items-center justify-center text-xs mr-2">N</span>
              Netcore Feature Spotlight
            </h4>
            <p className="mt-2 text-sm">
              <strong>WhatsApp Flow API:</strong> Enables structured data collection with form-like interfaces inside WhatsApp chats, enhancing user experience and data quality.
            </p>
            <p className="mt-2 text-sm">
              <strong>WhatsApp Carousels:</strong> Present personalized product options in an interactive, swipeable format, increasing engagement and conversion rates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadNurturing;
