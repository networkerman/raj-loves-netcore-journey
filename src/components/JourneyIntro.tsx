
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface JourneyIntroProps {
  onStart: () => void;
}

const JourneyIntro: React.FC<JourneyIntroProps> = ({ onStart }) => {
  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4 animate-fade-in">
      <Card className="border-2 border-netcore-teal/20 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold text-netcore-blue">Raj's Journey with Netcore</CardTitle>
          <CardDescription className="text-lg mt-2">
            Explore how Netcore's omnichannel solutions transform the BFSI customer experience
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-netcore-light rounded-lg p-6 border border-gray-200">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="font-semibold text-xl mb-4 text-netcore-blue">Meet Raj</h3>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <span className="bg-netcore-teal/10 text-netcore-teal px-2 py-1 rounded text-sm font-medium">Age</span>
                    <span>27</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="bg-netcore-teal/10 text-netcore-teal px-2 py-1 rounded text-sm font-medium">Occupation</span>
                    <span>Software Engineer, 20 LPA</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="bg-netcore-teal/10 text-netcore-teal px-2 py-1 rounded text-sm font-medium">Life Stage</span>
                    <span>Recently married, relocated to Mumbai</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="bg-netcore-orange/10 text-netcore-orange px-2 py-1 rounded text-sm font-medium">Goals</span>
                    <span>Dining, travel, and financial planning</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="bg-netcore-orange/10 text-netcore-orange px-2 py-1 rounded text-sm font-medium">Tech-Savvy</span>
                    <span>Adept with WhatsApp and RCS</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="bg-netcore-blue/10 text-netcore-blue px-2 py-1 rounded text-sm font-medium">Platforms</span>
                    <span>WhatsApp, RCS, Instagram, Facebook</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="bg-netcore-blue/10 text-netcore-blue px-2 py-1 rounded text-sm font-medium">Device</span>
                    <span>Android user</span>
                  </p>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center items-center">
                <div className="w-full max-w-[220px] aspect-square rounded-full overflow-hidden border-4 border-netcore-teal/20">
                  <img 
                    src="/lovable-uploads/5ab29b24-1967-42b8-b477-6f39a45e6884.png" 
                    alt="Raj" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-netcore-whatsapp/10 border-netcore-whatsapp/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Rich, interactive messaging with flows, carousels, and payment integration</p>
              </CardContent>
            </Card>
            <Card className="bg-netcore-rcs/10 border-netcore-rcs/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">RCS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Enhanced messaging with rich media and interactive buttons</p>
              </CardContent>
            </Card>
            <Card className="bg-netcore-sms/10 border-netcore-sms/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">SMS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Reliable fallback with auto-upgrade capabilities</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-netcore-blue/5 rounded-lg p-6 border border-netcore-blue/20">
            <h3 className="font-semibold text-xl mb-4 text-center text-netcore-blue">
              Journey Overview
            </h3>
            <ol className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="bg-netcore-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
                <span><strong>Lead Generation:</strong> Raj finds a credit card offer via a Click-to-WhatsApp ad</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-netcore-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
                <span><strong>Lead Nurturing:</strong> WhatsApp Flow collects details and suggests tailored options</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-netcore-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
                <span><strong>Re-engagement:</strong> AI twin identifies interests, sending SMS auto-upgraded to RCS</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-netcore-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
                <span><strong>Conversion:</strong> Raj applies, verifies identity, and pays using WhatsApp</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-netcore-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
                <span><strong>Retention:</strong> Raj receives updates and support through RCS and WhatsApp</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-netcore-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">6</span>
                <span><strong>Support:</strong> WhatsApp Voice Business Calling API for personalized help</span>
              </li>
            </ol>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={onStart} className="w-full bg-netcore-blue hover:bg-netcore-blue/90">
            Start Raj's Journey <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default JourneyIntro;
