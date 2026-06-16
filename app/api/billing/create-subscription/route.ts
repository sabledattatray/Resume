import { NextRequest, NextResponse } from "next/server";
import { RazorpayBilling } from "@/lib/billing/razorpay";
import { SubscriptionService } from "@/lib/services/subscription.service";

export async function POST(req: NextRequest) {
  try {
    const { planId } = await req.json();

    // In a real app we derive userId from a secure session token
    const mockUserId = "some-user-id"; 
    
    // Check if user is already PRO
    const currentPlan = await SubscriptionService.getUserPlan(mockUserId);
    if (currentPlan === "PRO") {
      return NextResponse.json({ success: false, error: "Already subscribed to Pro plan" }, { status: 400 });
    }

    const subscription = await RazorpayBilling.createSubscription(planId, mockUserId);

    return NextResponse.json({ 
      success: true, 
      subscriptionId: subscription.id 
    });

  } catch (error: any) {
    console.error("Subscription Error", error);
    return NextResponse.json({ success: false, error: error.message || "Failed to create subscription" }, { status: 500 });
  }
}
