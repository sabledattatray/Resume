export default function DashboardPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, John 👋</h1>
        <p className="mt-2 text-gray-500">Here's a summary of your recent AI optimizations.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-white rounded-xl shadow-sm border p-6">
           <h3 className="text-sm font-medium text-gray-500">Resumes Analyzed</h3>
           <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
         </div>
         <div className="bg-white rounded-xl shadow-sm border p-6">
           <h3 className="text-sm font-medium text-gray-500">Cover Letters Generated</h3>
           <p className="text-3xl font-bold text-gray-900 mt-2">5</p>
         </div>
         <div className="bg-white rounded-xl shadow-sm border p-6">
           <h3 className="text-sm font-medium text-gray-500">Avg. ATS Score</h3>
           <p className="text-3xl font-bold text-green-600 mt-2">84%</p>
         </div>
      </div>
    </div>
  )
}
