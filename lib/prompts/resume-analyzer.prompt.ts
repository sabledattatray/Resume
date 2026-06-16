export function resumeScanPrompt(resumeContent: string): string {
  return `
You are an expert ATS (Applicant Tracking System). Analyze the following resume content and provide:
1. An overall ATS score out of 100.
2. Key strengths.
3. Areas for improvement (formatting, keywords, etc.).

Resume Content:
${resumeContent}

Format output as JSON: { "score": number, "strengths": string[], "improvements": string[] }
  `.trim();
}
