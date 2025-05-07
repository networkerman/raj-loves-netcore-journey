
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface JourneyNavigationProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  steps: Array<{
    id: number;
    title: string;
    feature: string;
    channel: 'WhatsApp' | 'RCS' | 'SMS' | 'Dashboard';
  }>;
}

const JourneyNavigation: React.FC<JourneyNavigationProps> = ({ currentStep, setCurrentStep, steps }) => {
  return (
    <div className="journey-progress">
      {steps.map((step, index) => {
        const isActive = currentStep === step.id;
        const isCompleted = currentStep > step.id;
        const isUpcoming = currentStep < step.id;
        
        let channelColorClass = '';
        switch (step.channel) {
          case 'WhatsApp': channelColorClass = 'bg-netcore-whatsapp'; break;
          case 'RCS': channelColorClass = 'bg-netcore-rcs'; break;
          case 'SMS': channelColorClass = 'bg-netcore-sms'; break;
          case 'Dashboard': channelColorClass = 'bg-netcore-orange'; break;
          default: channelColorClass = 'bg-gray-400';
        }

        return (
          <React.Fragment key={step.id}>
            <div className="journey-step" onClick={() => setCurrentStep(step.id)}>
              <Badge variant="outline" className={`text-xs mb-2 ${isActive ? 'bg-netcore-teal/10 text-netcore-teal' : 'bg-gray-100'}`}>
                {step.feature}
              </Badge>
              <div 
                className={`journey-dot ${isActive ? 'journey-dot-active' : ''} ${isCompleted ? 'journey-dot-completed' : ''} ${isUpcoming ? 'journey-dot-upcoming' : ''}`}
              >
                {step.id}
              </div>
              <div className="h-1 w-6 mt-2">
                <div className={`h-full rounded-full ${channelColorClass}`}></div>
              </div>
              <p className="text-xs mt-1 text-center max-w-[80px]">{step.title}</p>
            </div>
            {index < steps.length - 1 && (
              <div 
                className={`journey-line ${isCompleted ? 'journey-line-completed' : ''} ${currentStep === index + 1 ? 'journey-line-active' : ''} ${isUpcoming && currentStep !== index + 1 ? 'journey-line-upcoming' : ''}`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default JourneyNavigation;
