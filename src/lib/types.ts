export type ApiResponse<T> = { ok: boolean; data?: T; error?: string };
export type SortDir = 'asc' | 'desc';

export interface DemoUser {
  id: string;
  name: string;
  email: string;
  role: string;
  plan: string;
  avatar: string;
  joinedAt: string;
}

export interface ReturnRequestProduct {
  sku: string;
  name: string;
  quantity: number;
  condition: 'New' | 'Open Box' | 'Damaged';
}

export interface ReturnRequest {
  id: string;
  orderId: string;
  customerName: string;
  customerEmail: string;
  reason: 'Damaged' | 'Wrong Item' | 'Changed Mind' | 'Too Late' | 'Other';
  requestedAction: 'Refund' | 'Exchange' | 'Store Credit';
  products: ReturnRequestProduct[];
  notes?: string;
  imageUrl?: string;
  value: number; // Calculated total value of items being returned
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  status: 'Pending Review' | 'Approved' | 'Rejected' | 'Processed' | 'Escalated';
  createdAt: string;
  updatedAt: string;
}

export interface ActivityItem {
  id: string;
  type: 'comment' | 'status_change' | 'action_taken';
  returnRequestId: string;
  userId: string;
  userName: string;
  timestamp: string;
  details: string;
}

export interface StatCardData {
  title: string;
  value: string;
  change: string; // e.g., '+12.5% vs last month'
  icon: React.ElementType; // LucideIcon component
  trend: 'up' | 'down' | 'neutral';
}

export interface ChartData {
  labels: string[];
  data: number[];
}