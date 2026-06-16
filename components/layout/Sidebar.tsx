"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileText, FileSignature, History, Settings, LayoutDashboard } from 'lucide-react';

const navItems = [
  { href: '/app', label: 'Overview', icon: LayoutDashboard },
  { href: '/app/resume', label: 'Resume Analyzer', icon: FileText },
  { href: '/app/cover-letter', label: 'Cover Letters', icon: FileSignature },
  { href: '/app/history', label: 'History', icon: History },
  { href: '/app/settings', label: 'Settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  
  return (
    <div className="w-64 bg-white border-r h-full flex flex-col">
      <div className="p-6">
        <span className="text-2xl font-bold text-blue-600">ATSAI Pro</span>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
          // exact match for app root
          const isReallyActive = item.href === '/app' ? pathname === '/app' : isActive;
          
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${isReallyActive ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
