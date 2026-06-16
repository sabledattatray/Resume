"use client";
import { useState } from 'react';
import { UploadCloud, CheckCircle, AlertCircle } from 'lucide-react';

export default function ResumeAnalyzer() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    // Mock API call to AI endpoint
    setTimeout(() => {
      setResult({
        score: 85,
        strengths: ["Strong action verbs", "Clear formatting", "Measurable achievements"],
        improvements: ["Add more metrics", "Include specific keywords for target role"]
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Resume Analyzer</h1>
          <p className="mt-2 text-gray-500">Upload your resume to get instant AI-powered feedback and an ATS match score.</p>
        </div>
      </div>

      {!result ? (
        <div className="bg-white border rounded-xl p-8 shadow-sm">
          <div className="border-2 border-dashed border-gray-200 rounded-lg p-12 text-center hover:bg-gray-50 transition-colors cursor-pointer">
            <UploadCloud className="w-12 h-12 text-gray-400 mx-auto" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Upload your resume</h3>
            <p className="mt-2 text-sm text-gray-500">PDF, DOCX up to 5MB</p>
            <button className="mt-6 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-50">
              Select File
            </button>
          </div>
          
          <div className="mt-8 flex justify-end">
            <button 
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-md font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isAnalyzing ? "Analyzing..." : "Run AI Analysis"}
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-xl p-6 shadow-sm text-center flex flex-col items-center justify-center">
            <div className="relative">
              <svg className="w-32 h-32 transform -rotate-90">
                 <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-gray-100" />
                 <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray={56 * 2 * Math.PI} strokeDashoffset={56 * 2 * Math.PI - (result.score / 100) * 56 * 2 * Math.PI} className="text-green-500 transition-all duration-1000 ease-out" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-gray-900">{result.score}</span>
              </div>
            </div>
            <h3 className="mt-4 font-medium text-gray-900">ATS Match Score</h3>
            <p className="mt-1 text-sm text-gray-500">Excellent! You're in the top 15%.</p>
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white border rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" /> Strengths
              </h3>
              <ul className="mt-4 space-y-3">
                {result.strengths.map((s: string, i: number) => (
                  <li key={i} className="flex items-start text-gray-600 gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white border rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500" /> Areas for Improvement
              </h3>
              <ul className="mt-4 space-y-3">
                {result.improvements.map((s: string, i: number) => (
                  <li key={i} className="flex items-start text-gray-600 gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="col-span-full flex justify-end">
             <button onClick={() => setResult(null)} className="text-gray-500 hover:text-gray-900 font-medium px-4 py-2 hover:bg-gray-100 transition rounded-md">
               Scan Another Resume
             </button>
          </div>
        </div>
      )}
    </div>
  )
}
