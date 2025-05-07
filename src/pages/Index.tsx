
import React, { useState } from 'react';
import JourneyIntro from '@/components/JourneyIntro';
import JourneyNavigation from '@/components/JourneyNavigation';
import LeadGeneration from '@/components/journey/LeadGeneration';
import LeadNurturing from '@/components/journey/LeadNurturing';
import Reengagement from '@/components/journey/Reengagement';
import Conversion from '@/components/journey/Conversion';
import Retention from '@/components/journey/Retention';
import Support from '@/components/journey/Support';
import MarketingTools from '@/components/journey/MarketingTools';
import FuturePossibilities from '@/components/journey/FuturePossibilities';
import JourneySummary from '@/components/JourneySummary';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Index = () => {
  const [journeyStarted, setJourneyStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [journeyComplete, setJourneyComplete] = useState(false);

  const journeySteps = [
    { id: 1, title: "Lead Generation", feature: "CTWA Ads", channel: "WhatsApp" as const },
    { id: 2, title: "Lead Nurturing", feature: "Flow API", channel: "WhatsApp" as const },
    { id: 3, title: "Re-engagement", feature: "Autoupgrade", channel: "RCS" as const },
    { id: 4, title: "Conversion", feature: "Authentication", channel: "WhatsApp" as const },
    { id: 5, title: "Retention", feature: "Rich Media", channel: "RCS" as const },
    { id: 6, title: "Support", feature: "Voice API", channel: "WhatsApp" as const },
    { id: 7, title: "Marketing", feature: "Multi CTA", channel: "Dashboard" as const },
    { id: 8, title: "Future", feature: "Innovations", channel: "Dashboard" as const },
  ];

  const handleStartJourney = () => {
    setJourneyStarted(true);
  };

  const handleCompleteStep = () => {
    if (currentStep < journeySteps.length) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    } else {
      setJourneyComplete(true);
      window.scrollTo(0, 0);
    }
  };

  const handleRestartJourney = () => {
    setCurrentStep(1);
    setJourneyComplete(false);
    setJourneyStarted(false);
    window.scrollTo(0, 0);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <LeadGeneration onComplete={handleCompleteStep} />;
      case 2:
        return <LeadNurturing onComplete={handleCompleteStep} />;
      case 3:
        return <Reengagement onComplete={handleCompleteStep} />;
      case 4:
        return <Conversion onComplete={handleCompleteStep} />;
      case 5:
        return <Retention onComplete={handleCompleteStep} />;
      case 6:
        return <Support onComplete={handleCompleteStep} />;
      case 7:
        return <MarketingTools onComplete={handleCompleteStep} />;
      case 8:
        return <FuturePossibilities onComplete={handleCompleteStep} />;
      default:
        return <LeadGeneration onComplete={handleCompleteStep} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-netcore-blue text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/netcore-logo.jpg" 
              alt="Netcore" 
              className="h-8 mr-2 bg-white p-1 rounded"
            />
            <h1 className="text-xl font-bold">Netcore BFSI Solutions</h1>
          </div>
          <div className="text-sm font-medium">
            Raj's Omnichannel Journey
          </div>
        </div>
      </header>

      <main className="container mx-auto py-6 px-4">
        {!journeyStarted ? (
          <JourneyIntro onStart={handleStartJourney} />
        ) : journeyComplete ? (
          <JourneySummary onRestart={handleRestartJourney} />
        ) : (
          <div className="space-y-6">
            <JourneyNavigation 
              currentStep={currentStep} 
              setCurrentStep={setCurrentStep} 
              steps={journeySteps} 
            />
            {renderCurrentStep()}
          </div>
        )}
      </main>

      <footer className="bg-netcore-blue/5 p-4 border-t border-netcore-blue/10 mt-10">
        <div className="container mx-auto text-center">
          <p className="text-sm text-netcore-blue/70 mb-3">
            Transforming customer engagement for BFSI with Netcore's omnichannel solutions
          </p>
          <TooltipProvider>
            <div className="flex justify-center gap-6 items-center flex-wrap">
              <Dialog>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DialogTrigger asChild>
                      <img 
                        src="/meta-certified-technical-professional.png" 
                        alt="Meta Certified Professional" 
                        className="h-10 object-contain cursor-pointer hover:opacity-80 transition-opacity"
                      />
                    </DialogTrigger>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click to view Meta certification</p>
                  </TooltipContent>
                </Tooltip>
                <DialogContent className="sm:max-w-md flex flex-col items-center">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold">Meta Certified Technical Professional</h3>
                    <p className="text-sm text-gray-500">Official Meta Business Partner certification</p>
                  </div>
                  <img 
                    src="/meta-certified-technical-professional.png" 
                    alt="Meta Certified Professional" 
                    className="max-h-[60vh] w-auto object-contain"
                  />
                </DialogContent>
              </Dialog>
              
              <Dialog>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DialogTrigger asChild>
                      <img 
                        src="/NetcorePartneroftheyear.png" 
                        alt="Netcore Partner of the Year" 
                        className="h-10 object-contain cursor-pointer hover:opacity-80 transition-opacity"
                      />
                    </DialogTrigger>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click to view Google partnership award</p>
                  </TooltipContent>
                </Tooltip>
                <DialogContent className="sm:max-w-md flex flex-col items-center">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold">Google Partner of the Year</h3>
                    <p className="text-sm text-gray-500">Official Google Business Partner recognition</p>
                  </div>
                  <img 
                    src="/NetcorePartneroftheyear.png" 
                    alt="Netcore Partner of the Year" 
                    className="max-h-[60vh] w-auto object-contain"
                  />
                </DialogContent>
              </Dialog>
            </div>
          </TooltipProvider>
        </div>
      </footer>
    </div>
  );
};

export default Index;
