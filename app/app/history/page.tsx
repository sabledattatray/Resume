export default function HistoryPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">AI Usage History</h1>
        <p className="mt-2 text-gray-500">Review your past AI generations and resume scans.</p>
      </div>
      
      <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Date</th>
              <th className="py-3 px-6">Action Type</th>
              <th className="py-3 px-6">Tokens Used</th>
              <th className="py-3 px-6">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y text-gray-700">
            <tr>
              <td className="py-3 px-6">Today, 2:30 PM</td>
              <td className="py-3 px-6 font-medium">Cover Letter Generation</td>
              <td className="py-3 px-6">1,245</td>
              <td className="py-3 px-6"><span className="text-green-600 font-medium">Success</span></td>
            </tr>
            <tr>
              <td className="py-3 px-6">Yesterday, 10:15 AM</td>
              <td className="py-3 px-6 font-medium">Resume Analysis</td>
              <td className="py-3 px-6">3,010</td>
              <td className="py-3 px-6"><span className="text-green-600 font-medium">Success</span></td>
            </tr>
            <tr>
              <td className="py-3 px-6">Aug 12, 1:00 PM</td>
              <td className="py-3 px-6 font-medium">Resume Analysis</td>
              <td className="py-3 px-6">2,950</td>
              <td className="py-3 px-6"><span className="text-green-600 font-medium">Success</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
