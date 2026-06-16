import { prisma } from '../prisma';

export const ResumeService = {
  async getResumes(userId: string) {
    return prisma.resume.findMany({ where: { userId } });
  },

  async getResume(id: string) {
    return prisma.resume.findUnique({ where: { id } });
  },

  async createResume(userId: string, title: string, content: any) {
    return prisma.resume.create({
      data: {
        userId,
        title,
        content,
      },
    });
  },

  async updateAtsScore(resumeId: string, score: number) {
    return prisma.resume.update({
      where: { id: resumeId },
      data: { atsScore: score },
    });
  },
};
