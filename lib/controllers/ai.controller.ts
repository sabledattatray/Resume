import { AIService, AITaskType } from '../services/ai.service';
import { UsageService } from '../services/usage.service';

export const AIController = {
  async handleAIRequest(userId: string, type: AITaskType, input: any) {
    if (!userId) {
      return { success: false, error: 'Unauthorized', status: 401 };
    }

    // 1. Check Usage Limits
    const canProceed = await UsageService.checkLimit(userId, type);
    if (!canProceed) {
      return { success: false, error: 'Usage limit exceeded. Please upgrade to PRO.', status: 403 };
    }

    // 2. Run AI pipeline
    const result = await AIService.runAI({ type, input });
    if (!result.success) {
      return { success: false, error: result.error, status: 500 };
    }

    // 3. Log Usage (Token tracking)
    // Approximate token logic and cost calculations
    const tokensUsed = type === 'resume_scan' ? 3000 : 1200;
    const cost = type === 'resume_scan' ? 0.01 : 0.004;

    await UsageService.logUsage(userId, type, tokensUsed, cost);

    return { success: true, data: result.data, status: 200 };
  }
};
