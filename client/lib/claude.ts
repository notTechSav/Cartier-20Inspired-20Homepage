import { Router } from "express";
import { z } from "zod";

const router = Router();

// Request schema for Claude API calls
const ClaudeRequestSchema = z.object({
  message: z.string().min(1).max(4000),
  context: z.string().optional(),
  systemPrompt: z.string().optional(),
});

// Luxury AI Concierge system prompt
const LUXURY_SYSTEM_PROMPT = `You are an elite AI concierge for a luxury brand experience. 
Your communication style embodies:
- Understated elegance and quiet authority
- Deep knowledge without ostentation  
- Personalized attention to detail
- Anticipation of needs before they are expressed

Speak with the refinement of a Hermès craftsperson and the precision of a Swiss watchmaker.
Your responses should be concise yet complete, sophisticated yet accessible.
Never use excessive enthusiasm or superlatives. Let quality speak for itself.

When discussing products or services, focus on:
- Heritage and craftsmanship
- Timeless design principles
- Bespoke personalization
- Exceptional materials and techniques
- The story behind each creation`;

// Claude API endpoint
router.post("/api/claude/chat", async (req, res) => {
  try {
    const { message, context, systemPrompt } = ClaudeRequestSchema.parse(req.body);
    
    // Note: This is a placeholder implementation
    // In production, you would make an actual call to the Anthropic API
    // For demonstration, we'll return a sophisticated response
    
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY || "",
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-3-opus-20240229",
        max_tokens: 1000,
        system: systemPrompt || LUXURY_SYSTEM_PROMPT,
        messages: [
          {
            role: "user",
            content: context ? `Context: ${context}\n\nQuestion: ${message}` : message,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`Claude API error: ${response.status}`);
    }

    const data = await response.json();
    
    res.json({
      response: data.content[0].text,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Claude API error:", error);
    res.status(500).json({
      error: "We apologize for the inconvenience. Our concierge service is momentarily unavailable.",
    });
  }
});

// Stream endpoint for real-time responses
router.post("/api/claude/stream", async (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  
  try {
    const { message } = ClaudeRequestSchema.parse(req.body);
    
    // Simulate streaming response
    const words = "I understand your inquiry. Allow me to assist you with the refined attention you deserve.".split(" ");
    
    for (const word of words) {
      res.write(`data: ${JSON.stringify({ word, done: false })}\n\n`);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
    res.end();
  } catch (error) {
    res.write(`data: ${JSON.stringify({ error: true })}\n\n`);
    res.end();
  }
});

export default router;
