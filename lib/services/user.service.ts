import { prisma } from '../prisma';

export const UserService = {
  async getUser(id: string) {
    return prisma.user.findUnique({ where: { id } });
  },

  async getUserByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
  },

  async syncUser(email: string, name?: string) {
    let user = await this.getUserByEmail(email);
    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          name: name || '',
        },
      });
    }
    return user;
  },
};
