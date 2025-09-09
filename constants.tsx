import { SummaryRow } from './types';

export const MOCK_SUMMARY_DATA: SummaryRow[] = [
  {
    priority: 'Critical',
    area: 'Security',
    recommendation: 'Implement Multi-Factor Authentication (MFA) for all user accounts.',
    nextAction: 'Integrate with an authenticator app or SMS verification by Q3.',
  },
  {
    priority: 'High',
    area: 'Performance',
    recommendation: 'Optimize database queries and add caching layer for frequently accessed data.',
    nextAction: 'Identify slow queries and deploy Redis cache within the next sprint.',
  },
  {
    priority: 'Medium',
    area: 'User Experience',
    recommendation: 'Redesign the user dashboard to improve information hierarchy and clarity.',
    nextAction: 'Conduct user testing on new wireframes and begin frontend implementation.',
  },
  {
    priority: 'Strategic',
    area: 'Growth',
    recommendation: 'Expand into the European market by adding support for GDPR and local languages.',
    nextAction: 'Legal review of GDPR compliance and start translation work for German and French.',
  },
];
