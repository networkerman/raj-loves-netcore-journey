
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
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-2">
              <span className="text-xl font-bold">N</span>
            </div>
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
        <div className="container mx-auto text-center text-sm text-netcore-blue/70">
          <p>Transforming customer engagement for BFSI with Netcore's omnichannel solutions</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
