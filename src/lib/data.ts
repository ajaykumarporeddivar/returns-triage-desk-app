import {
  ReturnRequest,
  ReturnRequestProduct,
  DemoUser,
  ActivityItem,
  StatCardData,
  ChartData,
} from './types';

// Helper function to generate a random date within the last 12 months
const getRandomDate = (): string => {
  const now = new Date();
  const daysAgo = Math.floor(Math.random() * 365);
  const date = new Date(now.setDate(now.getDate() - daysAgo));
  return date.toISOString();
};

// Helper to generate realistic monetary values
const getRandomPrice = (min: number, max: number): number => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
};

// Helper to get a random item from an array
const getRandomItem = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export const DEMO_USER: DemoUser = {
  id: 'user-001',
  name: 'Olivia Chen',
  email: 'olivia.chen@example.com',
  role: 'E-commerce Operations Manager',
  plan: 'Pro',
  avatar: 'OC',
  joinedAt: '2023-01-15T10:00:00Z',
};

const PRODUCT_BASE_PRICES = {
  'WH-1000': 189.99, // Wireless Headphones
  'SW-005': 249.99, // Smartwatch
  'KB-201': 99.50, // Ergonomic Keyboard
  'PS-TINY': 59.00, // Portable Speaker
  'LS-13PRO': 35.00, // Laptop Sleeve
  'CAM-PRO': 499.00, // DSLR Camera
  'DRONE-MINI': 329.00, // Mini Drone
  'MUG-SMART': 45.00, // Smart Mug
  'SSD-500GB': 79.99, // External SSD
  'VR-HEADSET': 399.00, // VR Headset
};

const generateReturnProducts = (): ReturnRequestProduct[] => {
  const products: ReturnRequestProduct[] = [];
  const numProducts = Math.floor(Math.random() * 2) + 1; // 1 or 2 products
  const availableSKUs = Object.keys(PRODUCT_BASE_PRICES);

  for (let i = 0; i < numProducts; i++) {
    const sku = getRandomItem(availableSKUs);
    const quantity = Math.floor(Math.random() * 2) + 1; // 1 or 2 quantity
    const condition = getRandomItem(['New', 'Open Box', 'Damaged'] as const);

    products.push({
      sku,
      name: sku.replace('-', ' ').replace(/^[A-Z]{2}/, (match) => {
        switch (match) {
          case 'WH': return 'Wireless Headphones';
          case 'SW': return 'Smartwatch';
          case 'KB': return 'Ergonomic Keyboard';
          case 'PS': return 'Portable Speaker';
          case 'LS': return 'Laptop Sleeve';
          case 'CAM': return 'DSLR Camera';
          case 'DRONE': return 'Mini Drone';
          case 'MUG': return 'Smart Mug';
          case 'SSD': return 'External SSD';
          case 'VR': return 'VR Headset';
          default: return 'Product';
        }
      }),
      quantity,
      condition,
    });
  }
  return products;
};

const calculateReturnValue = (products: ReturnRequestProduct[]): number => {
  return products.reduce((total, product) => {
    const basePrice = PRODUCT_BASE_PRICES[product.sku as keyof typeof PRODUCT_BASE_PRICES] || 0;
    return total + (basePrice * product.quantity);
  }, 0);
};

export const MOCK_RETURN_REQUESTS: ReturnRequest[] = [
  {
    id: 'req-001',
    orderId: 'ORD-78901',
    customerName: 'Sarah Johnson',
    customerEmail: 'sarah.j@example.com',
    reason: 'Damaged',
    requestedAction: 'Refund',
    products: [{ sku: 'WH-1000', name: 'Wireless Headphones', quantity: 1, condition: 'Damaged' }],
    notes: 'Headphones arrived with a cracked earcup. Unusable.',
    imageUrl: 'https://via.placeholder.com/150/FF6347/FFFFFF?text=DamagedHeadphones',
    value: 189.99,
    priority: 'Critical',
    status: 'Pending Review',
    createdAt: '2024-07-28T09:30:00Z',
    updatedAt: '2024-07-28T09:30:00Z',
  },
  {
    id: 'req-002',
    orderId: 'ORD-78902',
    customerName: 'Marcus Webb',
    customerEmail: 'marcus.w@example.com',
    reason: 'Wrong Item',
    requestedAction: 'Exchange',
    products: [{ sku: 'KB-201', name: 'Ergonomic Keyboard', quantity: 1, condition: 'New' }],
    notes: 'Ordered a mouse, received a keyboard instead.',
    imageUrl: 'https://via.placeholder.com/150/6495ED/FFFFFF?text=WrongItem',
    value: 99.50,
    priority: 'High',
    status: 'Approved',
    createdAt: '2024-07-27T14:15:00Z',
    updatedAt: '2024-07-28T10:00:00Z',
  },
  {
    id: 'req-003',
    orderId: 'ORD-78903',
    customerName: 'Emily Davis',
    customerEmail: 'emily.d@example.com',
    reason: 'Changed Mind',
    requestedAction: 'Store Credit',
    products: [{ sku: 'LS-13PRO', name: 'Laptop Sleeve', quantity: 1, condition: 'New' }],
    notes: 'Decided I do not need it anymore, still sealed.',
    imageUrl: '',
    value: 35.00,
    priority: 'Low',
    status: 'Processed',
    createdAt: '2024-07-26T11:00:00Z',
    updatedAt: '2024-07-27T09:00:00Z',
  },
  {
    id: 'req-004',
    orderId: 'ORD-78904',
    customerName: 'David Lee',
    customerEmail: 'david.l@example.com',
    reason: 'Too Late',
    requestedAction: 'Refund',
    products: [{ sku: 'SW-005', name: 'Smartwatch', quantity: 1, condition: 'Open Box' }],
    notes: 'Return requested after 30-day window. Product box was opened.',
    imageUrl: 'https://via.placeholder.com/150/FFA07A/FFFFFF?text=LateReturn',
    value: 249.99,
    priority: 'Medium',
    status: 'Rejected',
    createdAt: '2024-07-25T16:45:00Z',
    updatedAt: '2024-07-26T10:30:00Z',
  },
  {
    id: 'req-005',
    orderId: 'ORD-78905',
    customerName: 'Jessica Kim',
    customerEmail: 'jessica.k@example.com',
    reason: 'Damaged',
    requestedAction: 'Refund',
    products: [
      { sku: 'PS-TINY', name: 'Portable Speaker', quantity: 1, condition: 'Damaged' },
      { sku: 'SSD-500GB', name: 'External SSD', quantity: 1, condition: 'New' },
    ],
    notes: 'Speaker has static, SSD seems fine. Only refund for speaker.',
    imageUrl: 'https://via.placeholder.com/150/DC143C/FFFFFF?text=SpeakerDamage',
    value: 59.00 + 79.99, // Speaker damaged, SSD not, but value includes both in product list
    priority: 'High',
    status: 'Pending Review',
    createdAt: '2024-07-24T08:00:00Z',
    updatedAt: '2024-07-24T08:00:00Z',
  },
  {
    id: 'req-006',
    orderId: 'ORD-78906',
    customerName: 'Robert Green',
    customerEmail: 'robert.g@example.com',
    reason: 'Other',
    requestedAction: 'Exchange',
    products: [{ sku: 'CAM-PRO', name: 'DSLR Camera', quantity: 1, condition: 'New' }],
    notes: 'Received as a gift, already own one. Still sealed.',
    imageUrl: '',
    value: 499.00,
    priority: 'Medium',
    status: 'Pending Review',
    createdAt: '2024-07-23T12:00:00Z',
    updatedAt: '2024-07-23T12:00:00Z',
  },
  {
    id: 'req-007',
    orderId: 'ORD-78907',
    customerName: 'Sophia Rodriguez',
    customerEmail: 'sophia.r@example.com',
    reason: 'Wrong Item',
    requestedAction: 'Refund',
    products: [{ sku: 'DRONE-MINI', name: 'Mini Drone', quantity: 1, condition: 'New' }],
    notes: 'Ordered a different model, got this one.',
    imageUrl: 'https://via.placeholder.com/150/ADD8E6/FFFFFF?text=IncorrectModel',
    value: 329.00,
    priority: 'High',
    status: 'Approved',
    createdAt: '2024-07-22T09:10:00Z',
    updatedAt: '2024-07-23T08:30:00Z',
  },
  {
    id: 'req-008',
    orderId: 'ORD-78908',
    customerName: 'Daniel White',
    customerEmail: 'daniel.w@example.com',
    reason: 'Changed Mind',
    requestedAction: 'Store Credit',
    products: [{ sku: 'MUG-SMART', name: 'Smart Mug', quantity: 2, condition: 'New' }],
    notes: 'Bought two, only needed one. Other still in box.',
    imageUrl: '',
    value: 45.00 * 2,
    priority: 'Low',
    status: 'Processed',
    createdAt: '2024-07-21T15:30:00Z',
    updatedAt: '2024-07-22T11:00:00Z',
  },
  {
    id: 'req-009',
    orderId: 'ORD-78909',
    customerName: 'Olivia Martinez',
    customerEmail: 'olivia.m@example.com',
    reason: 'Damaged',
    requestedAction: 'Exchange',
    products: [{ sku: 'VR-HEADSET', name: 'VR Headset', quantity: 1, condition: 'Damaged' }],
    notes: 'Lens scratched upon arrival. Need a replacement.',
    imageUrl: 'https://via.placeholder.com/150/B22222/FFFFFF?text=ScratchedVR',
    value: 399.00,
    priority: 'Critical',
    status: 'Escalated',
    createdAt: '2024-07-20T10:40:00Z',
    updatedAt: '2024-07-21T14:00:00Z',
  },
  {
    id: 'req-010',
    orderId: 'ORD-78910',
    customerName: 'Ethan Taylor',
    customerEmail: 'ethan.t@example.com',
    reason: 'Other',
    requestedAction: 'Refund',
    products: [{ sku: 'WH-1000', name: 'Wireless Headphones', quantity: 1, condition: 'New' }],
    notes: 'Received duplicate order by mistake. Both are new.',
    imageUrl: '',
    value: 189.99,
    priority: 'Medium',
    status: 'Pending Review',
    createdAt: '2024-07-19T09:00:00Z',
    updatedAt: '2024-07-19T09:00:00Z',
  },
  {
    id: 'req-011',
    orderId: 'ORD-78911',
    customerName: 'Ava Miller',
    customerEmail: 'ava.m@example.com',
    reason: 'Damaged',
    requestedAction: 'Refund',
    products: [{ sku: 'SW-005', name: 'Smartwatch', quantity: 1, condition: 'Damaged' }],
    notes: 'Screen stopped working after 2 days. Minor crack.',
    imageUrl: 'https://via.placeholder.com/150/FF4500/FFFFFF?text=SmartwatchBroken',
    value: 249.99,
    priority: 'Critical',
    status: 'Approved',
    createdAt: '2024-07-18T11:20:00Z',
    updatedAt: '2024-07-19T10:00:00Z',
  },
  {
    id: 'req-012',
    orderId: 'ORD-78912',
    customerName: 'Noah Wilson',
    customerEmail: 'noah.w@example.com',
    reason: 'Changed Mind',
    requestedAction: 'Exchange',
    products: [{ sku: 'KB-201', name: 'Ergonomic Keyboard', quantity: 1, condition: 'Open Box' }],
    notes: 'Bought for office but employer provided one. Box opened.',
    imageUrl: '',
    value: 99.50,
    priority: 'Low',
    status: 'Pending Review',
    createdAt: '2024-07-17T13:00:00Z',
    updatedAt: '2024-07-17T13:00:00Z',
  },
  {
    id: 'req-013',
    orderId: 'ORD-78913',
    customerName: 'Isabella Garcia',
    customerEmail: 'isabella.g@example.com',
    reason: 'Wrong Item',
    requestedAction: 'Refund',
    products: [{ sku: 'PS-TINY', name: 'Portable Speaker', quantity: 2, condition: 'New' }],
    notes: 'Received two speakers instead of one speaker and one earbud.',
    imageUrl: 'https://via.placeholder.com/150/DAA520/FFFFFF?text=WrongQuantity',
    value: 59.00 * 2,
    priority: 'High',
    status: 'Rejected',
    createdAt: '2024-07-16T10:00:00Z',
    updatedAt: '2024-07-17T09:00:00Z',
  },
  {
    id: 'req-014',
    orderId: 'ORD-78914',
    customerName: 'Liam Brown',
    customerEmail: 'liam.b@example.com',
    reason: 'Other',
    requestedAction: 'Store Credit',
    products: [{ sku: 'LS-13PRO', name: 'Laptop Sleeve', quantity: 1, condition: 'New' }],
    notes: 'Accidental purchase, still in original packaging.',
    imageUrl: '',
    value: 35.00,
    priority: 'Low',
    status: 'Processed',
    createdAt: '2024-07-15T16:00:00Z',
    updatedAt: '2024-07-16T11:00:00Z',
  },
  {
    id: 'req-015',
    orderId: 'ORD-78915',
    customerName: 'Sophia Miller',
    customerEmail: 'sophia.m@example.com',
    reason: 'Damaged',
    requestedAction: 'Exchange',
    products: [{ sku: 'SSD-500GB', name: 'External SSD', quantity: 1, condition: 'Damaged' }],
    notes: 'SSD not recognized by computer. Appears faulty.',
    imageUrl: 'https://via.placeholder.com/150/800000/FFFFFF?text=FaultySSD',
    value: 79.99,
    priority: 'Critical',
    status: 'Pending Review',
    createdAt: '2024-07-14T09:45:00Z',
    updatedAt: '2024-07-14T09:45:00Z',
  },
];

export const STATS = {
  totalReturnsValue: '$284,520',
  totalReturnsValueGrowth: '+8%',
  totalReturnRequests: '320',
  totalReturnRequestsGrowth: '+12%',
  pendingReturnsValue: '$12,500',
  pendingReturnsValueGrowth: '-5%',
  avgResolutionTime: '2.5 Days',
  highPriorityReturns: '15',
  approvedRate: '75%',
};

export const CHART_DATA: ChartData = {
  labels: ['Jan W1', 'Jan W2', 'Jan W3', 'Jan W4', 'Feb W1', 'Feb W2', 'Feb W3', 'Feb W4', 'Mar W1', 'Mar W2', 'Mar W3', 'Mar W4'],
  weeklyRequests: [42, 58, 51, 73, 68, 65, 79, 84, 71, 93, 89, 112],
  weeklyValue: [18200, 22400, 19800, 31200, 28500, 25100, 33000, 35500, 30100, 42000, 38500, 47000], // Example for revenue
  pendingRequests: [10, 8, 12, 7, 9, 6, 11, 5, 8, 10, 7, 9], // Example for a specific metric
};

export const SPARKLINE_DATA: StatCardData = {
  totalReturnsValue: [78, 82, 79, 91, 88, 94, 103], // In thousands of dollars
  totalReturnRequests: [142, 158, 151, 173, 188, 165, 179], // Number of requests
  pendingReturnsValue: [32, 28, 35, 29, 25, 31, 27], // In hundreds of dollars
  approvedRate: [72, 75, 74, 76, 78, 77, 75], // Percentage
};

export const RECENT_ACTIVITY: ActivityItem[] = [
  { id: 'act-001', action: 'Created new return request', user: 'Olivia Chen', avatar: 'OC', time: '2 minutes ago', type: 'create', detail: 'ORD-78915 (Damaged SSD)' },
  { id: 'act-002', action: 'Approved return request', user: 'Olivia Chen', avatar: 'OC', time: '15 minutes ago', type: 'approve', detail: 'ORD-78911 (Damaged Smartwatch)' },
  { id: 'act-003', action: 'Rejected return request', user: 'Olivia Chen', avatar: 'OC', time: '1 hour ago', type: 'reject', detail: 'ORD-78913 (Wrong Quantity Speakers)' },
  { id: 'act-004', action: 'Marked as processed', user: 'Olivia Chen', avatar: 'OC', time: '3 hours ago', type: 'process', detail: 'ORD-78914 (Laptop Sleeve)' },
  { id: 'act-005', action: 'Escalated return request', user: 'Olivia Chen', avatar: 'OC', time: 'yesterday', type: 'escalate', detail: 'ORD-78909 (VR Headset)' },
  { id: 'act-006', action: 'Approved return request', user: 'Olivia Chen', avatar: 'OC', time: 'yesterday', type: 'approve', detail: 'ORD-78907 (Mini Drone)' },
  { id: 'act-007', action: 'Marked as processed', user: 'Olivia Chen', avatar: 'OC', time: '2 days ago', type: 'process', detail: 'ORD-78908 (Smart Mug)' },
  { id: 'act-008', action: 'Created new return request', user: 'Olivia Chen', avatar: 'OC', time: '3 days ago', type: 'create', detail: 'ORD-78912 (Ergonomic Keyboard)' },
  { id: 'act-009', action: 'Rejected return request', user: 'Olivia Chen', avatar: 'OC', time: '4 days ago', type: 'reject', detail: 'ORD-78904 (Late Smartwatch Return)' },
  { id: 'act-010', action: 'Marked as processed', user: 'Olivia Chen', avatar: 'OC', time: '5 days ago', type: 'process', detail: 'ORD-78903 (Laptop Sleeve)' },
  { id: 'act-011', action: 'Approved return request', user: 'Olivia Chen', avatar: 'OC', time: '6 days ago', type: 'approve', detail: 'ORD-78902 (Wrong Keyboard)' },
  { id: 'act-012', action: 'Created new return request', user: 'Olivia Chen', avatar: 'OC', time: '1 week ago', type: 'create', detail: 'ORD-78901 (Damaged Headphones)' },
];

export function getById<T extends { id: string }>(arr: T[], id: string): T | undefined {
  return arr.find(x => x.id === id);
}