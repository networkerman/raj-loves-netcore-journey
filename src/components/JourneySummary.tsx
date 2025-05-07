
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface JourneySummaryProps {
  onRestart: () => void;
}

const JourneySummary: React.FC<JourneySummaryProps> = ({ onRestart }) => {
  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4 animate-fade-in">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-netcore-blue/20">
        <div className="bg-netcore-blue text-white p-6 text-center">
          <h2 className="text-3xl font-bold mb-2">Journey Complete</h2>
          <p className="opacity-90 max-w-2xl mx-auto">
            You've experienced how Netcore's omnichannel solutions transform the customer journey in the BFSI sector
          </p>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4 text-netcore-blue">Raj's Experience</h3>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-netcore-teal flex items-center justify-center text-white text-xs shrink-0 mt-0.5">✓</div>
                  <p>Seamless journey from social media ad to completed application</p>
                </li>
                <li className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-netcore-teal flex items-center justify-center text-white text-xs shrink-0 mt-0.5">✓</div>
                  <p>Personalized recommendations based on his profile and needs</p>
                </li>
                <li className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-netcore-teal flex items-center justify-center text-white text-xs shrink-0 mt-0.5">✓</div>
                  <p>Consistent experience across WhatsApp, RCS, and SMS</p>
                </li>
                <li className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-netcore-teal flex items-center justify-center text-white text-xs shrink-0 mt-0.5">✓</div>
                  <p>Secure, convenient in-app payments and verification</p>
                </li>
                <li className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-netcore-teal flex items-center justify-center text-white text-xs shrink-0 mt-0.5">✓</div>
                  <p>Ongoing engagement with useful status updates and support</p>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-4 text-netcore-blue">Bajaj's Benefits</h3>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-netcore-orange flex items-center justify-center text-white text-xs shrink-0 mt-0.5">✓</div>
                  <p>Higher conversion rates through omnichannel engagement</p>
                </li>
                <li className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-netcore-orange flex items-center justify-center text-white text-xs shrink-0 mt-0.5">✓</div>
                  <p>Reduced application abandonment with re-engagement flows</p>
                </li>
                <li className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-netcore-orange flex items-center justify-center text-white text-xs shrink-0 mt-0.5">✓</div>
                  <p>Advanced analytics to optimize marketing campaigns</p>
                </li>
                <li className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-netcore-orange flex items-center justify-center text-white text-xs shrink-0 mt-0.5">✓</div>
                  <p>Automated compliance safeguards to protect brand reputation</p>
                </li>
                <li className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-netcore-orange flex items-center justify-center text-white text-xs shrink-0 mt-0.5">✓</div>
                  <p>Enhanced customer satisfaction and long-term loyalty</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-netcore-light rounded-lg p-6 border border-netcore-teal/30 mb-8">
            <h3 className="font-bold text-xl mb-4 text-center text-netcore-blue">Key Netcore Solutions Showcased</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded border border-gray-200">
                <h4 className="text-sm font-semibold mb-1 text-netcore-teal">Click-to-WhatsApp Ads</h4>
                <p className="text-xs text-gray-600">Direct lead generation with seamless handoff to WhatsApp</p>
              </div>
              
              <div className="bg-white p-3 rounded border border-gray-200">
                <h4 className="text-sm font-semibold mb-1 text-netcore-teal">WhatsApp Flow API</h4>
                <p className="text-xs text-gray-600">Structured data collection with interactive forms</p>
              </div>
              
              <div className="bg-white p-3 rounded border border-gray-200">
                <h4 className="text-sm font-semibold mb-1 text-netcore-teal">SMS Autoupgrade to RCS</h4>
                <p className="text-xs text-gray-600">Enhanced messaging with rich media and interactive elements</p>
              </div>
              
              <div className="bg-white p-3 rounded border border-gray-200">
                <h4 className="text-sm font-semibold mb-1 text-netcore-teal">Authentication Templates</h4>
                <p className="text-xs text-gray-600">One-tap identity verification within messaging interface</p>
              </div>
              
              <div className="bg-white p-3 rounded border border-gray-200">
                <h4 className="text-sm font-semibold mb-1 text-netcore-teal">Payments on WhatsApp</h4>
                <p className="text-xs text-gray-600">Secure in-chat transaction capabilities</p>
              </div>
              
              <div className="bg-white p-3 rounded border border-gray-200">
                <h4 className="text-sm font-semibold mb-1 text-netcore-teal">WhatsApp Voice Calling</h4>
                <p className="text-xs text-gray-600">In-app voice support for complex queries</p>
              </div>
              
              <div className="bg-white p-3 rounded border border-gray-200">
                <h4 className="text-sm font-semibold mb-1 text-netcore-teal">Multi CTA Support</h4>
                <p className="text-xs text-gray-600">Multiple call-to-action buttons in messages</p>
              </div>
              
              <div className="bg-white p-3 rounded border border-gray-200">
                <h4 className="text-sm font-semibold mb-1 text-netcore-teal">AES-256 Encryption</h4>
                <p className="text-xs text-gray-600">Bank-grade security for sensitive data</p>
              </div>
              
              <div className="bg-white p-3 rounded border border-gray-200">
                <h4 className="text-sm font-semibold mb-1 text-netcore-teal">Marketing Dashboards</h4>
                <p className="text-xs text-gray-600">Comprehensive analytics and campaign tools</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={onRestart} 
              variant="outline" 
              className="border-netcore-blue text-netcore-blue hover:bg-netcore-blue/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Restart Journey
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>© 2023 Netcore Cloud. All rights reserved.</p>
      </div>
    </div>
  );
};

export default JourneySummary;
