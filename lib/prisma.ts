const globalForPrisma = globalThis as unknown as {
  prisma: any | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  {} as any;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
