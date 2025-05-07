import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, ArrowRight } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

interface ConversionProps {
  onComplete: () => void;
}

const Conversion: React.FC<ConversionProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [employmentType, setEmploymentType] = useState<'salaried' | 'self-employed' | null>('salaried');
  const [showSelfEmployedMessage, setShowSelfEmployedMessage] = useState(false);
  
  const handleNext = () => {
    if (employmentType === 'self-employed') {
      setShowSelfEmployedMessage(true);
      toast({
        title: "Not Available",
        description: "This credit card is not available for self-employed individuals.",
        variant: "destructive",
      });
      return;
    }
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const handleEmploymentTypeChange = (type: 'salaried' | 'self-employed') => {
    setEmploymentType(type);
    if (type === 'self-employed') {
      setShowSelfEmployedMessage(true);
    } else {
      setShowSelfEmployedMessage(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      <div className="bg-white rounded-lg shadow-lg mb-4 overflow-hidden">
        <div className="bg-netcore-blue text-white p-4">
          <h3 className="text-xl font-semibold">Step 4: Conversion</h3>
          <p className="opacity-90">Authentication as a Template and Payments on WhatsApp</p>
        </div>
        
        <div className="p-4">
          <p className="mb-4 text-gray-700">
            Motivated to continue, Raj completes the application form in WhatsApp, verifies his identity with a No Tap/One Tap Authentication Template, and pays the joining fee via Payments on WhatsApp.
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
              {step === 1 && (
                <div className="chat-bubble chat-bubble-bot bg-white/90 p-4 animate-fade-in">
                  <h4 className="font-semibold mb-3">Complete Your Application</h4>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name</label>
                      <Input defaultValue="Raj Sharma" className="border-netcore-teal/50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address</label>
                      <Input defaultValue="raj.sharma@example.com" className="border-netcore-teal/50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Annual Income</label>
                      <Input defaultValue="₹20,00,000" className="border-netcore-teal/50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Employment Type</label>
                      <div className="grid grid-cols-2 gap-2">
                        <Button 
                          variant="outline" 
                          className={`justify-start ${employmentType === 'salaried' ? 'bg-netcore-whatsapp/20 border-netcore-whatsapp text-netcore-whatsapp' : ''}`}
                          onClick={() => handleEmploymentTypeChange('salaried')}
                        >
                          {employmentType === 'salaried' && <Check className="h-4 w-4 mr-2" />}
                          Salaried
                        </Button>
                        <Button 
                          variant="outline" 
                          className={`justify-start ${employmentType === 'self-employed' ? 'bg-netcore-whatsapp/20 border-netcore-whatsapp text-netcore-whatsapp' : ''}`}
                          onClick={() => handleEmploymentTypeChange('self-employed')}
                        >
                          {employmentType === 'self-employed' && <Check className="h-4 w-4 mr-2" />}
                          Self-employed
                        </Button>
                      </div>
                    </div>
                    
                    {showSelfEmployedMessage && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                        <p className="font-medium">Not Available</p>
                        <p>This credit card is not available for self-employed individuals.</p>
                        <div className="mt-2">
                          <Button 
                            variant="outline"
                            size="sm"
                            className="text-xs border-red-300 text-red-600 hover:bg-red-50"
                            onClick={() => handleEmploymentTypeChange('salaried')}
                          >
                            Switch to Salaried
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    <Button 
                      onClick={handleNext} 
                      className="w-full bg-netcore-whatsapp hover:bg-netcore-whatsapp/90"
                      disabled={employmentType === 'self-employed'}
                    >
                      Submit Details
                    </Button>
                  </form>
                </div>
              )}

              {step === 2 && (
                <div className="chat-bubble chat-bubble-bot bg-white/90 p-4 animate-fade-in">
                  <h4 className="font-semibold mb-2">Verify Your Identity</h4>
                  <p className="text-sm mb-3">We need to verify your identity to proceed with your application.</p>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-500">Authentication Request</span>
                      <div className="bg-netcore-teal/10 text-netcore-teal text-xs font-medium py-1 px-2 rounded">
                        Secure
                      </div>
                    </div>
                    <p className="text-sm font-medium mb-2">Bajaj Finserv would like to verify your identity</p>
                    <div className="flex items-center gap-2 text-xs text-gray-600 mb-3">
                      <div className="w-4 h-4 rounded-full bg-netcore-teal/20 flex items-center justify-center">
                        <span className="text-[8px] text-netcore-teal">🔒</span>
                      </div>
                      <span>End-to-end encrypted with AES-256</span>
                    </div>
                    <div className="bg-white border border-gray-200 rounded p-3 mb-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-medium">Raj Sharma</p>
                          <p className="text-[10px] text-gray-500">PAN: ABCDE1234F</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                      </div>
                    </div>
                    <Button 
                      onClick={handleNext} 
                      className="w-full bg-netcore-teal hover:bg-netcore-teal/90"
                    >
                      Authenticate Now
                    </Button>
                  </div>
                  
                  <div className="text-xs text-gray-500 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-netcore-teal/20 flex items-center justify-center mr-1">
                      <span className="text-[8px] text-netcore-teal">i</span>
                    </div>
                    <span>One Tap Authentication via Netcore's secure template</span>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="chat-bubble chat-bubble-bot bg-white/90 p-4 animate-fade-in">
                  <h4 className="font-semibold mb-2">Pay Joining Fee</h4>
                  <p className="text-sm mb-3">Your application is almost complete. Please pay the joining fee to activate your card.</p>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <p className="text-sm font-medium">Joining Fee</p>
                        <p className="text-xs text-gray-500">Bajaj Dining Rewards Card</p>
                      </div>
                      <p className="font-semibold">₹500</p>
                    </div>
                    
                    <div className="border-t border-b border-gray-200 py-3 my-3">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-6 bg-blue-500 rounded flex items-center justify-center">
                          <span className="text-xs text-white font-bold">VISA</span>
                        </div>
                        <div>
                          <p className="text-xs font-medium">HDFC Bank</p>
                          <p className="text-[10px] text-gray-500">••••4567</p>
                        </div>
                        <div className="ml-auto">
                          <Button 
                            variant="ghost" 
                            className="h-auto py-1 text-xs"
                          >
                            Change
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handleNext} 
                      className="w-full bg-netcore-whatsapp hover:bg-netcore-whatsapp/90"
                    >
                      Pay ₹500
                    </Button>
                  </div>
                  
                  <div className="text-xs text-gray-500 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-netcore-teal/20 flex items-center justify-center mr-1">
                      <span className="text-[8px] text-netcore-teal">i</span>
                    </div>
                    <span>Secure payment powered by Payments on WhatsApp</span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-3 border-t border-gray-200 bg-white">
              <div className="flex justify-between items-center">
                <div className="text-xs text-gray-500">
                  {step}/3 steps completed
                </div>
                {step < 3 ? (
                  <Button 
                    size="sm" 
                    disabled={employmentType === 'self-employed'}
                    className={`${employmentType !== 'self-employed' ? 'bg-netcore-whatsapp hover:bg-netcore-whatsapp/90' : 'bg-gray-300'}`}
                    onClick={handleNext}
                  >
                    Continue <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                ) : (
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-netcore-green text-netcore-green"
                  >
                    <Check className="mr-1 h-3 w-3" /> Complete
                  </Button>
                )}
              </div>
            </div>
          </Card>
          
          <div className="mt-6 bg-netcore-teal/10 rounded-lg p-4 border border-netcore-teal/30">
            <h4 className="font-semibold text-netcore-teal flex items-center">
              <span className="w-6 h-6 rounded-full bg-netcore-teal text-white flex items-center justify-center text-xs mr-2">N</span>
              Netcore Feature Spotlight
            </h4>
            <p className="mt-2 text-sm">
              <strong>Authentication as a Template:</strong> Streamlines identity verification with secure, one-tap authentication directly within the messaging interface.
            </p>
            <p className="mt-2 text-sm">
              <strong>Payments on WhatsApp:</strong> Enables in-chat transactions, eliminating the need to redirect users to external payment gateways.
            </p>
            <p className="mt-2 text-sm">
              <strong>AES-256 Encryption - BYOK:</strong> Ensures all sensitive data is protected with bank-grade encryption, maintaining customer trust and regulatory compliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversion;
