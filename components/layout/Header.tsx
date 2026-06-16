import Link from 'next/link';

export default function Header({ user }: { user: any }) {
  const usagePercentage = Math.min((user.usage / user.limit) * 100, 100);

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6 shrink-0">
      <h2 className="text-lg font-medium">Dashboard</h2>
      
      <div className="flex items-center gap-6">
        {/* Usage indicator */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-500 font-medium flex items-center gap-2">
              <span className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-[10px] uppercase font-bold">{user.role} PLAN</span>
              {user.usage} / {user.limit} uses
            </span>
            <div className="w-32 h-2 bg-gray-100 rounded-full mt-1 overflow-hidden">
              <div 
                className={`h-full ${usagePercentage >= 100 ? 'bg-red-500' : 'bg-blue-500'}`} 
                style={{ width: `${usagePercentage}%` }}
              />
            </div>
          </div>
          {user.role === 'FREE' && (
            <Link href="/pricing" className="text-sm bg-blue-50 text-blue-600 px-3 py-1.5 rounded-md font-medium hover:bg-blue-100 transition-colors">
              Upgrade
            </Link>
          )}
        </div>
        
        {/* Profile */}
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-medium">
          {user.name.charAt(0)}
        </div>
      </div>
    </header>
  )
}
