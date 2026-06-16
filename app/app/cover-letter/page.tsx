"use client";
import { useState } from 'react';
import { PenTool, Target, Building2 } from 'lucide-react';

export default function CoverLetterGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [output, setOutput] = useState("");

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setOutput("Dear Hiring Manager,\n\nI am writing to express my strong interest in the Software Engineer position at TechCorp. With over 5 years of experience in full-stack development, particularly with React and Node.js, I have consistently delivered high-performance web applications that drive user engagement and business growth.\n\nIn my previous role, I led a team that modernized our core platform, resulting in a 30% reduction in page load times and a 15% increase in conversion rates. My expertise in building scalable cloud architectures and my commitment to clean, maintainable code align perfectly with the technical requirements described in your job posting.\n\nI am eager to bring my technical skills and proactive problem-solving approach to TechCorp and contribute to your team's innovative projects. Thank you for considering my application.\n\nSincerely,\nJohn Doe");
      setIsGenerating(false);
    }, 2000);
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Cover Letter Generator</h1>
        <p className="mt-2 text-gray-500">Instantly write a tailored cover letter based on your resume and the job description.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Panel */}
        <div className="bg-white border rounded-xl p-6 shadow-sm space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">My Resume (Text)</label>
            <textarea 
              className="w-full border-gray-300 border rounded-md p-3 text-sm h-32 focus:ring-blue-500 focus:border-blue-500" 
              placeholder="Paste your resume content here..."
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Target className="w-4 h-4 text-gray-400" /> Target Role
              </label>
              <input type="text" className="w-full border-gray-300 border rounded-md p-2.5 text-sm" placeholder="e.g. Frontend Engineer" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-gray-400" /> Target Company
              </label>
              <input type="text" className="w-full border-gray-300 border rounded-md p-2.5 text-sm" placeholder="e.g. Google" />
            </div>
          </div>
          
          <button 
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-md font-medium hover:bg-blue-700 transition flex justify-center items-center gap-2 disabled:opacity-50"
          >
            {isGenerating ? "Generating Magic..." : <><PenTool className="w-5 h-5" /> Generate Cover Letter</>}
          </button>
        </div>

        {/* Output Panel */}
        <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col h-[600px]">
          <h2 className="text-lg font-medium text-gray-900 mb-4 border-b pb-4">Generated Output</h2>
          <div className="flex-1 bg-gray-50 border rounded-md p-4 overflow-y-auto font-serif text-gray-800 leading-relaxed whitespace-pre-wrap">
            {output ? output : (
              <span className="text-gray-400 text-sm flex items-center justify-center h-full">Your generated cover letter will appear here.</span>
            )}
          </div>
          {output && (
             <div className="mt-4 pt-4 border-t flex gap-3">
               <button className="flex-1 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-50 transition">Copy Text</button>
               <button className="flex-1 bg-blue-50 text-blue-700 px-4 py-2 rounded-md font-medium hover:bg-blue-100 transition">Download PDF</button>
             </div>
          )}
        </div>
      </div>
    </div>
  )
}
