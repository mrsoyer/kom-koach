export type TabId = 'users' | 'engagement' | 'recruitment' | 'business' | 'marketing';

export interface Tab {
  id: TabId;
  label: string;
  icon: string;
}

export interface FilterState {
  dateRange: 'day' | 'week' | 'month' | 'year';
  userType: 'all' | 'employee' | 'employer';
  region: string;
  sector: string;
}