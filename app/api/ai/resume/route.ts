import { NextRequest, NextResponse } from "next/server";
import { AIController } from "@/lib/controllers/ai.controller";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { input } = body;
    
    // In a real app, you would get userId from the session/token here
    const mockUserId = "some-user-id"; 
    
    const result = await AIController.handleAIRequest(mockUserId, 'resume_scan', input);
    
    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: result.status });
    }
    
    return NextResponse.json({ data: result.data });
  } catch (error) {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
