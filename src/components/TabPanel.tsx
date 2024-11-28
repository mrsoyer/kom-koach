import React from 'react';
import { ConnectionUsagePanel } from './ConnectionUsagePanel';
import { UserProfilePanel } from './UserProfilePanel';
import { EngagementPanel } from './EngagementPanel';
import { MarketingPanel } from './MarketingPanel';

interface Props {
  tabId: string;
}

export const TabPanel: React.FC<Props> = ({ tabId }) => {
  const renderContent = () => {
    switch (tabId) {
      case 'connections':
        return <ConnectionUsagePanel />;
      case 'users':
        return <UserProfilePanel />;
      case 'engagement':
        return <EngagementPanel />;
      case 'marketing':
        return <MarketingPanel />;
      default:
        return null;
    }
  };

  return <div className="mt-6">{renderContent()}</div>;
};