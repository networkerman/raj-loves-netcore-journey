
import React from 'react';

const FeatureSpotlight: React.FC = () => {
  return (
    <div className="mt-6 bg-netcore-teal/10 rounded-lg p-4 border border-netcore-teal/30">
      <h4 className="font-semibold text-netcore-teal flex items-center">
        <span className="w-6 h-6 rounded-full bg-netcore-teal text-white flex items-center justify-center text-xs mr-2">N</span>
        Netcore Feature Spotlight
      </h4>
      <p className="mt-2 text-sm">
        <strong>Multi CTA and QR Support:</strong> Enhances message templates with multiple call-to-action buttons and QR codes, increasing engagement options for customers.
      </p>
      <p className="mt-2 text-sm">
        <strong>Auto Stop on Recategorization:</strong> Automatically pauses campaigns if messaging platforms change the template category, ensuring continued compliance.
      </p>
      <p className="mt-2 text-sm">
        <strong>Better SMS Dashboards, Campaigns, RBAC:</strong> Provides comprehensive analytics, campaign management tools, and role-based access control for marketing teams.
      </p>
    </div>
  );
};

export default FeatureSpotlight;
