import { askGemini } from '../gemini';
import { resumeScanPrompt } from '../prompts/resume-analyzer.prompt';
import { coverLetterPrompt } from '../prompts/cover-letter.prompt';

export type AITaskType = 'resume_scan' | 'cover_letter';

export const AIService = {
  async runAI({ type, input }: { type: AITaskType; input: any }) {
    let prompt = '';
    
    switch (type) {
      case 'resume_scan':
        prompt = resumeScanPrompt(input);
        break;
      case 'cover_letter':
        prompt = coverLetterPrompt(input);
        break;
      default:
        throw new Error('Invalid AI task type');
    }

    try {
      const response = await askGemini(prompt);
      // We can add validation, logging, etc. here
      return { success: true, data: response };
    } catch (error) {
      console.error(`AI Service Error (${type}):`, error);
      return { success: false, error: 'Failed to process AI request' };
    }
  },
};
