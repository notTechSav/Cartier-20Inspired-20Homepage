/**
 * Content Generation API Routes
 * REST endpoints for AI-powered luxury content creation
 */

import { RequestHandler } from 'express';
import Anthropic from '@anthropic-ai/sdk';
import {
  generateServiceDescription,
  batchGenerateDescriptions,
  refreshContentSeasonal,
} from '../services/content-generator';

/**
 * POST /api/content/generate
 * Generate content - supports both generic prompts and structured service details
 *
 * Body (Generic):
 * {
 *   prompt: string;
 *   temperature?: number;
 *   maxTokens?: number;
 * }
 *
 * Body (Service Details):
 * {
 *   serviceName: string;
 *   description?: string;
 *   duration?: string;
 *   price?: string;
 *   location?: string;
 *   highlights?: string[];
 *   targetKeywords?: string[];
 * }
 */
export const handleGenerateContent: RequestHandler = async (req, res) => {
  try {
    const requestBody = req.body;

    // Check if this is a generic prompt request
    if (requestBody.prompt) {
      const { prompt, temperature = 0.7, maxTokens = 4096 } = requestBody;

      if (!prompt || typeof prompt !== 'string') {
        return res.status(400).json({
          error: 'prompt must be a non-empty string',
        });
      }

      console.log(`Generating content from generic prompt (${prompt.substring(0, 50)}...)`);

      // Use Anthropic SDK for direct API call
      const anthropic = new Anthropic({
        apiKey: process.env.ANTHROPIC_API_KEY,
      });

      const response = await anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: maxTokens,
        temperature,
        messages: [{ role: 'user', content: prompt }],
      });

      const content = response.content[0].text;

      return res.json({
        success: true,
        content,
        generatedAt: new Date().toISOString(),
      });
    }

    // Otherwise, treat as service description request
    const serviceDetails = requestBody;

    if (!serviceDetails.serviceName) {
      return res.status(400).json({
        error: 'Either "prompt" or "serviceName" is required',
      });
    }

    console.log(`Generating content for: ${serviceDetails.serviceName}`);

    const content = await generateServiceDescription(serviceDetails);

    res.json({
      success: true,
      data: content,
      generatedAt: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Content generation error:', error);
    res.status(500).json({
      error: 'Failed to generate content',
      message: error.message,
    });
  }
};

/**
 * POST /api/content/batch-generate
 * Generate descriptions for multiple services at once
 * 
 * Body:
 * {
 *   services: Array<ServiceDetails>
 * }
 */
export const handleBatchGenerate: RequestHandler = async (req, res) => {
  try {
    const { services } = req.body;

    if (!Array.isArray(services) || services.length === 0) {
      return res.status(400).json({
        error: 'services array is required and must not be empty',
      });
    }

    if (services.length > 20) {
      return res.status(400).json({
        error: 'Maximum 20 services per batch request',
      });
    }

    console.log(`Batch generating content for ${services.length} services`);

    const results = await batchGenerateDescriptions(services);

    res.json({
      success: true,
      data: results,
      count: results.length,
      generatedAt: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Batch generation error:', error);
    res.status(500).json({
      error: 'Failed to generate batch content',
      message: error.message,
    });
  }
};

/**
 * POST /api/content/refresh-seasonal
 * Refresh existing content with seasonal angle
 * 
 * Body:
 * {
 *   service: ServiceDetails;
 *   season: string; // e.g., "Valentine's Day 2025"
 * }
 */
export const handleSeasonalRefresh: RequestHandler = async (req, res) => {
  try {
    const { service, season } = req.body;

    if (!service || !season) {
      return res.status(400).json({
        error: 'service and season are required',
      });
    }

    console.log(`Refreshing content for: ${service.serviceName} (${season})`);

    const refreshed = await refreshContentSeasonal(service, season);

    res.json({
      success: true,
      data: refreshed,
      season,
      generatedAt: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Seasonal refresh error:', error);
    res.status(500).json({
      error: 'Failed to refresh seasonal content',
      message: error.message,
    });
  }
};

/**
 * GET /api/content/health
 * Health check for content generation service
 */
export const handleHealthCheck: RequestHandler = (req, res) => {
  const hasApiKey = !!process.env.ANTHROPIC_API_KEY;
  
  res.json({
    status: 'ok',
    service: 'content-generation',
    claudeConfigured: hasApiKey,
    timestamp: new Date().toISOString(),
  });
};


