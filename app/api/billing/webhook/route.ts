import { NextRequest, NextResponse } from "next/server";
import { BillingService } from "@/lib/services/billing.service";
import { RazorpayBilling } from "@/lib/billing/razorpay";

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("x-razorpay-signature");

    if (!signature) {
      return NextResponse.json({ error: "Missing signature" }, { status: 400 });
    }

    if (!RazorpayBilling.verifyWebhookSignature(rawBody, signature)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    const event = JSON.parse(rawBody);

    // Process event
    if (event.event === "payment.captured") {
      const paymentInfo = event.payload.payment.entity;
      // In a real app we would map this back to standard userId via notes/metadata
      // await BillingService.handlePaymentSuccess(paymentInfo.notes.userId, paymentInfo.amount, paymentInfo.currency);
      console.log("Payment captured:", paymentInfo.id);
    } else if (event.event === "subscription.charged") {
       // Upgrade user plan logic here
       console.log("Subscription charged.");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webhook Error", error);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
  }
}
