import Razorpay from "razorpay";
import crypto from "crypto";

let razorpayClient: Razorpay | null = null;
export function getRazorpay() {
  if (!razorpayClient) {
    razorpayClient = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID || "mock_key_id",
      key_secret: process.env.RAZORPAY_SECRET || "mock_secret",
    });
  }
  return razorpayClient;
}

export const RazorpayBilling = {
  async createSubscription(planId: string, customerId: string) {
    if (!process.env.RAZORPAY_KEY_ID) {
      console.warn("Razorpay logic bypassed - no keys.");
      return { id: "sub_mock123" };
    }
    
    return getRazorpay().subscriptions.create({
      plan_id: planId,
      customer_notify: 1,
      total_count: 12, // Annual limit for monthly
      notes: {
        userId: customerId,
      },
    });
  },

  verifyWebhookSignature(rawBody: string, signature: string) {
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET || "mock_webhook_secret";
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(rawBody)
      .digest("hex");

    return expectedSignature === signature;
  }
};
