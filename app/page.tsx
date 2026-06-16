import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ATSAI Pro | AI-Powered Resume Builder',
  description: 'Create ATS-friendly resumes and cover letters with AI. Increase your interview chances with data-driven resume optimization.',
  openGraph: {
    title: 'ATSAI Pro | AI-Powered Resume Builder',
    description: 'Create ATS-friendly resumes and cover letters with AI.',
    url: 'https://atsai.pro',
    siteName: 'ATSAI Pro',
    images: [
      {
        url: 'https://atsai.pro/og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Welcome to ATSAI Pro</h1>
      <p className="mt-4 text-xl">The AI-Powered Resume Builder (Next.js Version)</p>
      <div className="mt-8 flex gap-4">
        <Link href="/pricing" className="text-blue-500 hover:underline">Pricing</Link>
        <Link href="/features" className="text-blue-500 hover:underline">Features</Link>
        <Link href="/app" className="text-blue-500 hover:underline">Go to Dashboard</Link>
      </div>
    </main>
  );
}
