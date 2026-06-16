export function coverLetterPrompt(input: { resume: string; targetRole: string; company: string }): string {
  return `
Write a professional, compelling cover letter for the role of ${input.targetRole} at ${input.company}.
Use the provided resume text to highlight relevant experience.

Resume:
${input.resume}
  `.trim();
}
