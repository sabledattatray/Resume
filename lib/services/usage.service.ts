import { prisma } from '../prisma';

export const UsageService = {
  async getUsageCount(userId: string, startOfMonth: Date) {
    if (!prisma.usageLog) return 0; // fallback if db is not ready
    
    return prisma.usageLog.count({
      where: {
        userId,
        createdAt: {
          gte: startOfMonth,
        },
      },
    });
  },

  async checkLimit(userId: string, type: string) {
    if (!prisma.user) return true; // fallback if db is not ready

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { role: true, monthlyLimit: true },
    });

    if (!user) return false;

    // PRO and ADMIN users have unlimited or higher limits (managed by business rules)
    if (user.role === 'ADMIN' || user.role === 'PRO') {
      return true;
    }

    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);

    const usageCount = await this.getUsageCount(userId, startOfMonth);

    return usageCount < user.monthlyLimit;
  },

  async logUsage(userId: string, type: string, tokensUsed: number, cost: number) {
    if (!prisma.usageLog) return null; // fallback

    return prisma.usageLog.create({
      data: {
        userId,
        type,
        tokensUsed,
        cost,
      },
    });
  },
};
