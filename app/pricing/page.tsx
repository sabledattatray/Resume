import Link from 'next/link';
import { Check } from 'lucide-react';
import RazorpayCheckoutButton from '@/components/RazorpayCheckoutButton';

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for testing the waters",
    features: ["3 AI Resume Scans / mo", "Basic ATS Scoring", "1 Cover Letter / mo"],
    cta: "Current Plan",
    ctaLink: "/app",
    popular: false,
    planId: "free"
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "For serious job seekers",
    features: ["Unlimited Resume Scans", "Advanced Keyword Analysis", "Unlimited Cover Letters", "Priority Support", "Profile SEO Optimization"],
    cta: "Upgrade to Pro",
    ctaLink: "/dashboard",
    popular: true,
    planId: "plan_pro_mock_123"
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Simple, transparent pricing</h1>
          <p className="mt-4 text-xl text-gray-600">Invest in your career. Upgrade to Pro for unlimited AI-powered optimization.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className={`bg-white rounded-2xl shadow-sm border ${plan.popular ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-200'} p-8 relative flex flex-col`}>
              {plan.popular && (
                <div className="absolute top-0 transform -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium tracking-wide uppercase">Most Popular</span>
                </div>
              )}
              <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
              <p className="mt-2 text-gray-500">{plan.description}</p>
              <div className="mt-4 flex items-baseline text-5xl font-extrabold text-gray-900">
                {plan.price}
                {plan.period && <span className="ml-1 text-xl font-medium text-gray-500">{plan.period}</span>}
              </div>
              <ul className="mt-8 space-y-4 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="w-5 h-5 text-blue-500 shrink-0" />
                    <span className="ml-3 text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                {plan.popular ? (
                  <RazorpayCheckoutButton planId={plan.planId} />
                ) : (
                  <Link 
                    href={plan.ctaLink} 
                    className="block w-full py-3 px-4 rounded-md text-center font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition"
                  >
                    {plan.cta}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
