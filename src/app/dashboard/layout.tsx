'use client';

import { AppSidebar } from '@/components/layout';
import {
  PlusCircle,
  ClipboardList,
  BarChart2,
  Settings,
  LucideIcon,
} from 'lucide-react';

interface NavItem {
  icon: React.ReactElement<LucideIcon>;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: <PlusCircle size={16} />, label: 'New Request', href: '/dashboard/intake' },
  { icon: <ClipboardList size={16} />, label: 'Triage Desk', href: '/dashboard/triage' },
  { icon: <BarChart2 size={16} />, label: 'Reports', href: '/dashboard/reporting' },
  { icon: <Settings size={16} />, label: 'Settings', href: '/dashboard/settings' },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-zinc-50">
      <AppSidebar items={navItems} projectName="Returns Triage Desk" />
      <div className="flex-1 ml-64 flex flex-col min-h-full">
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}