"use client";
import { useState } from "react";

export default function RazorpayCheckoutButton({ planId, onSuccess }: { planId: string, onSuccess?: () => void }) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      // Create subscription order via backend
      const res = await fetch("/api/billing/create-subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId }),
      });
      const data = await res.json();
      
      if (!data.success) {
        alert("Failed to create subscription: " + (data.error || "Unknown error"));
        setLoading(false);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_mock",
        subscription_id: data.subscriptionId,
        name: "ATSAI Pro",
        description: "Pro Plan Subscription",
        handler: function (response: any) {
          alert("Payment successful! Subscription ID: " + response.razorpay_subscription_id);
          if (onSuccess) onSuccess();
        },
        theme: {
          color: "#2563eb",
        },
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();
      
    } catch (error) {
      console.error(error);
      alert("Checkout failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={`w-full py-3 px-4 rounded-md text-center font-medium bg-blue-600 text-white hover:bg-blue-700 transition ${loading ? 'opacity-75 cursor-wait' : ''}`}
    >
      {loading ? "Processing..." : "Upgrade to Pro"}
    </button>
  );
}
