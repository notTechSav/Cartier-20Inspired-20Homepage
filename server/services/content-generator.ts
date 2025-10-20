/**
 * Luxury Content Generation Service
 * Uses Claude Sonnet 4 for high-end service descriptions and SEO content
 * 
 * Optimized for: San Francisco luxury market, UHNW clientele
 */

import { anthropic } from '@ai-sdk/anthropic';
import { generateText } from 'ai';

// Brand voice configuration - your perfected luxury aesthetic
const BRAND_VOICE = `
You are writing for an ultra-luxury jewelry and timepiece concierge service in San Francisco.

TARGET AUDIENCE:
- Ultra high-net-worth individuals (UHNW)
- Silicon Valley elite, Pacific Heights residents
- Discerning collectors seeking bespoke experiences
- Clients who value exclusivity, discretion, and impeccable service

BRAND VOICE:
- Tone: Sophisticated, refined, never ostentatious
- Language: Elegant yet accessible, timeless not trendy
- Style: Evocative but precise, poetic yet grounded
- Emotional resonance: Trust, exclusivity, heritage

AVOID:
- Superlatives without substance ("the best", "amazing")
- Casual language ("great", "awesome", "cool")
- Generic luxury clichés
- Over-the-top flowery language
- Sales-y or pushy tone

EMPHASIZE:
- Craftsmanship and expertise
- Personalized, bespoke experiences
- San Francisco exclusivity
- Discretion and privacy
- Time-honored traditions meets modern sophistication
- Relationship-building, not transactions

SEO KEYWORDS (use naturally):
- San Francisco luxury jewelry
- Bespoke jewelry consultation
- High-end timepiece curation
- Private jewelry concierge
- UHNW jewelry services
- Ultra-luxury San Francisco
`;

interface ServiceDetails {
  serviceName: string;
  description?: string;
  duration?: string;
  price?: string;
  location?: string;
  highlights?: string[];
  targetKeywords?: string[];
}

interface GeneratedContent {
  luxuryDescription: string;
  seoOptimized: string;
  shortVersion: string;
  metaTags: {
    title: string;
    description: string;
    keywords: string[];
  };
  schema: {
    '@type': 'Service';
    name: string;
    description: string;
    provider: {
      '@type': 'Organization';
      name: string;
      areaServed: string;
    };
    offers?: {
      '@type': 'Offer';
      price?: string;
      priceCurrency: string;
    };
  };
}

/**
 * Generate luxury service description
 */
export async function generateServiceDescription(
  details: ServiceDetails
): Promise<GeneratedContent> {
  const prompt = `
${BRAND_VOICE}

SERVICE DETAILS:
- Name: ${details.serviceName}
${details.description ? `- Overview: ${details.description}` : ''}
${details.duration ? `- Duration: ${details.duration}` : ''}
${details.price ? `- Investment: ${details.price}` : ''}
${details.location ? `- Location: ${details.location}` : ''}
${details.highlights ? `- Key Features: ${details.highlights.join(', ')}` : ''}

TASK:
Generate THREE versions of this service description:

1. LUXURY DESCRIPTION (200-250 words):
   - Full, evocative description for the service page
   - Emphasize the experience, craftsmanship, and exclusivity
   - Naturally incorporate: San Francisco, luxury, bespoke
   - Paint a picture of what clients will experience
   
2. SEO-OPTIMIZED VERSION (150 words):
   - Same essence but optimized for search engines
   - Include keywords: ${details.targetKeywords?.join(', ') || 'San Francisco luxury jewelry, bespoke service, UHNW'}
   - Maintain luxury tone while being search-friendly
   
3. SHORT VERSION (50-75 words):
   - Concise version for cards, previews, or summaries
   - Capture the essence, maintain elegance

4. SEO META TAGS:
   - Title (55-60 characters, compelling + keyword-rich)
   - Meta description (150-160 characters, actionable + enticing)
   - 5-7 relevant keywords

FORMAT YOUR RESPONSE AS JSON:
{
  "luxuryDescription": "...",
  "seoOptimized": "...",
  "shortVersion": "...",
  "metaTitle": "...",
  "metaDescription": "...",
  "keywords": ["...", "..."]
}
`;

  try {
    const { text } = await generateText({
      model: anthropic('claude-sonnet-4-20250514'),
      prompt,
      maxTokens: 2000,
    });

    // Parse the JSON response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Failed to parse AI response');
    }

    const parsed = JSON.parse(jsonMatch[0]);

    // Build structured response
    const result: GeneratedContent = {
      luxuryDescription: parsed.luxuryDescription,
      seoOptimized: parsed.seoOptimized,
      shortVersion: parsed.shortVersion,
      metaTags: {
        title: parsed.metaTitle,
        description: parsed.metaDescription,
        keywords: parsed.keywords,
      },
      schema: {
        '@type': 'Service',
        name: details.serviceName,
        description: parsed.shortVersion,
        provider: {
          '@type': 'Organization',
          name: 'Cartier San Francisco', // Update with your actual business name
          areaServed: 'San Francisco, CA',
        },
        ...(details.price && {
          offers: {
            '@type': 'Offer',
            price: details.price,
            priceCurrency: 'USD',
          },
        }),
      },
    };

    return result;
  } catch (error) {
    console.error('Content generation error:', error);
    throw new Error('Failed to generate content. Please try again.');
  }
}

/**
 * Batch generate descriptions for multiple services
 */
export async function batchGenerateDescriptions(
  services: ServiceDetails[]
): Promise<GeneratedContent[]> {
  // Generate in parallel (but be mindful of rate limits)
  const results = await Promise.all(
    services.map(service => generateServiceDescription(service))
  );
  
  return results;
}

/**
 * Refresh/update existing content with seasonal angle
 */
export async function refreshContentSeasonal(
  existingService: ServiceDetails,
  season: string // e.g., "Valentine's Day 2025", "Holiday Season"
): Promise<Pick<GeneratedContent, 'luxuryDescription' | 'shortVersion'>> {
  const prompt = `
${BRAND_VOICE}

EXISTING SERVICE: ${existingService.serviceName}
SEASONAL CONTEXT: ${season}

TASK:
Refresh the service description with a seasonal angle while maintaining the core service value.
Keep the luxury tone, but add timely relevance for ${season}.

Generate:
1. Updated luxury description (200 words) - incorporate seasonal relevance
2. Updated short version (75 words) - seasonal but still timeless

FORMAT AS JSON:
{
  "luxuryDescription": "...",
  "shortVersion": "..."
}
`;

  const { text } = await generateText({
    model: anthropic('claude-sonnet-4-20250514'),
    prompt,
    maxTokens: 1500,
  });

  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error('Failed to parse seasonal refresh response');
  }

  return JSON.parse(jsonMatch[0]);
}


