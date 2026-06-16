import { prisma } from '../prisma';

export const SubscriptionService = {
  async getUserPlan(userId: string) {
    if (!prisma.user) return 'FREE';
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });
    return user?.role || 'FREE';
  },

  async isActive(userId: string) {
    if (!prisma.subscription) return false;
    const sub = await prisma.subscription.findFirst({
      where: { userId, status: 'active' },
      orderBy: { createdAt: 'desc' },
    });
    
    if (!sub) return false;
    
    return new Date(sub.currentPeriodEnd) > new Date();
  },

  async refreshSubscriptionStatus(userId: string) {
    const active = await this.isActive(userId);
    const plan = active ? 'PRO' : 'FREE';
    
    // sync to user role
    if (prisma.user) {
      await prisma.user.update({
        where: { id: userId },
        data: { role: plan },
      });
    }
    
    return plan;
  }
}
