/**
 * Shared types for AI Content Generation
 */

export interface ServiceDetails {
  serviceName: string;
  description?: string;
  duration?: string;
  price?: string;
  location?: string;
  highlights?: string[];
  targetKeywords?: string[];
}

export interface GeneratedContent {
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

export interface ContentGenerationResponse {
  success: boolean;
  data: GeneratedContent;
  generatedAt: string;
}

export interface BatchGenerationResponse {
  success: boolean;
  data: GeneratedContent[];
  count: number;
  generatedAt: string;
}

export interface SeasonalRefreshResponse {
  success: boolean;
  data: {
    luxuryDescription: string;
    shortVersion: string;
  };
  season: string;
  generatedAt: string;
}


