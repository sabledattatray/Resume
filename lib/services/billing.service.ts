import { prisma } from '../prisma';

export const BillingService = {
  async getSubscriptionDetails(userId: string) {
    return prisma.subscription.findFirst({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  },

  async handlePaymentSuccess(userId: string, amount: number, currency: string) {
    return prisma.payment.create({
      data: {
        userId,
        amount,
        currency,
        status: 'success',
      },
    });
  },
};
