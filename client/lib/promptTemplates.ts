import { GenerationOptions } from '@/hooks/useEnhancedContent';

export interface PromptTemplate {
  id: string;
  name: string;
  description: string;
  prompt: string;
  defaultOptions?: GenerationOptions;
  category: 'page' | 'section' | 'service' | 'editorial';
}

// Brand voice constants
const BRAND_VOICE = {
  core: 'Katherine Taylor brand voice: De Beers × Hermès aesthetic, quiet authority, understated luxury',
  tone: 'Confident restraint, "less is more on surface, more is more behind the scenes"',
  style: 'Pixel-perfect precision, no filler, every word earns its place',
};

// Reusable prompt templates
export const PROMPT_TEMPLATES: Record<string, PromptTemplate> = {
  // Page-level templates
  aboutPage: {
    id: 'about-page',
    name: 'About Page',
    description: 'Complete about page copy with personal narrative',
    category: 'page',
    prompt: `Write the complete About page copy for Katherine Taylor's luxury companion website.

Brand voice: ${BRAND_VOICE.core}
Tone: ${BRAND_VOICE.tone}
Style: ${BRAND_VOICE.style}

Include:
- Opening statement (2-3 sentences defining the relationship model)
- Personal philosophy on companionship, continuity, discretion
- What makes this different from transactional arrangements
- Closing statement on client selection

Use quiet authority. No superlatives. Return only HTML.`,
    defaultOptions: {
      temperature: 0.9,
      maxTokens: 2048,
      styleDirectives: ['Use <p> tags with proper spacing', 'Avoid over-formatting'],
    },
  },

  journalPage: {
    id: 'journal-page',
    name: 'Journal Page',
    description: 'Journal/blog landing page with editorial tone',
    category: 'page',
    prompt: `Write the Journal page introduction for Katherine Taylor's website.

Brand voice: ${BRAND_VOICE.core}
Tone: Editorial, reflective, but still precise
Style: ${BRAND_VOICE.style}

Include:
- Brief introduction to the journal (2-3 sentences)
- What readers can expect (themes, frequency, perspective)
- Intentional scarcity note

Keep it under 200 words. Return only HTML.`,
    defaultOptions: {
      temperature: 1.0,
      maxTokens: 1024,
    },
  },

  // Section-level templates
  heroStatement: {
    id: 'hero-statement',
    name: 'Hero Statement',
    description: 'Opening statement for any page',
    category: 'section',
    prompt: `Write a hero statement (1-2 sentences) for {PAGE_NAME} page.

Brand voice: ${BRAND_VOICE.core}
Requirements:
- Maximum 2 sentences
- Establish authority immediately
- No clichés or generic luxury language
- Make it memorable but restrained

Return only the HTML paragraph.`,
    defaultOptions: {
      temperature: 1.1,
      maxTokens: 256,
    },
  },

  closingStatement: {
    id: 'closing-statement',
    name: 'Closing Statement',
    description: 'Final call-to-action or philosophical close',
    category: 'section',
    prompt: `Write a closing statement for {PAGE_NAME} page.

Brand voice: ${BRAND_VOICE.core}
Requirements:
- 2-3 sentences
- Not a hard CTA, but an invitation
- Reinforce the core value proposition
- End with quiet confidence

Return only the HTML.`,
    defaultOptions: {
      temperature: 0.95,
      maxTokens: 512,
    },
  },

  // Service descriptions
  serviceDescription: {
    id: 'service-description',
    name: 'Service Description',
    description: 'Individual service offering description',
    category: 'service',
    prompt: `Write a service description for: {SERVICE_NAME}

Brand voice: ${BRAND_VOICE.core}
Tone: ${BRAND_VOICE.tone}

Structure:
- Opening definition (what this service is)
- Who it's for / what problem it solves
- What's included
- Pricing context (if relevant)

Keep it under 300 words. Focus on value, not features. Return only HTML.`,
    defaultOptions: {
      temperature: 0.85,
      maxTokens: 1536,
    },
  },

  // Editorial content
  journalEntry: {
    id: 'journal-entry',
    name: 'Journal Entry',
    description: 'Blog post or editorial piece',
    category: 'editorial',
    prompt: `Write a journal entry on the topic: {TOPIC}

Brand voice: ${BRAND_VOICE.core}
Tone: More personal and reflective than marketing copy, but still precise
Style: First-person perspective, thoughtful, no fluff

Structure:
- Opening observation or question
- 3-4 body paragraphs exploring the theme
- Closing insight or question for reflection

Length: 400-600 words. Return only HTML with proper paragraph tags.`,
    defaultOptions: {
      temperature: 1.0,
      maxTokens: 3072,
      styleDirectives: [
        'Use first-person perspective',
        'Allow for more personality than marketing copy',
      ],
    },
  },

  // Specialized templates
  ratesRationale: {
    id: 'rates-rationale',
    name: 'Rates Rationale',
    description: 'Explanation of pricing philosophy',
    category: 'section',
    prompt: `Write an explanation of the pricing philosophy for luxury companion services.

Brand voice: ${BRAND_VOICE.core}
Tone: Unapologetic but not defensive, educational without being condescending

Include:
- Why rates are structured this way
- What justifies the premium
- The economics of scarcity and continuity
- Why this protects both parties

Keep it under 400 words. Return only HTML.`,
    defaultOptions: {
      temperature: 0.8,
      maxTokens: 2048,
    },
  },

  faqAnswer: {
    id: 'faq-answer',
    name: 'FAQ Answer',
    description: 'Individual FAQ response',
    category: 'section',
    prompt: `Write an FAQ answer for the question: {QUESTION}

Brand voice: ${BRAND_VOICE.core}
Tone: Direct, helpful, but still maintaining mystery where appropriate

Requirements:
- Answer the question honestly
- Don't over-explain
- Maintain boundaries where needed
- 2-4 sentences maximum

Return only the HTML paragraph.`,
    defaultOptions: {
      temperature: 0.7,
      maxTokens: 512,
    },
  },

  testimonialStyle: {
    id: 'testimonial-style',
    name: 'Testimonial (Style)',
    description: 'Client testimonial in brand voice',
    category: 'section',
    prompt: `Write a client testimonial that sounds authentic but aligns with the brand.

Context: {CONTEXT}
Brand voice: ${BRAND_VOICE.core}

Requirements:
- Sound like a real person, not marketing copy
- Focus on transformation or specific value
- 2-3 sentences
- Include a subtle detail that makes it credible
- No over-the-top praise

Return only the quote text (no attribution needed).`,
    defaultOptions: {
      temperature: 1.0,
      maxTokens: 512,
    },
  },
};

// Helper function to interpolate variables in prompts
export const interpolatePrompt = (
  template: PromptTemplate,
  variables: Record<string, string>
): string => {
  let prompt = template.prompt;
  Object.entries(variables).forEach(([key, value]) => {
    prompt = prompt.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
  });
  return prompt;
};

// Get templates by category
export const getTemplatesByCategory = (
  category: PromptTemplate['category']
): PromptTemplate[] => {
  return Object.values(PROMPT_TEMPLATES).filter((t) => t.category === category);
};

// Get template by ID
export const getTemplateById = (id: string): PromptTemplate | undefined => {
  return Object.values(PROMPT_TEMPLATES).find((t) => t.id === id);
};

// Create a custom prompt from a template
export const createCustomPrompt = (
  templateId: string,
  variables: Record<string, string> = {},
  overrides?: Partial<PromptTemplate>
): { prompt: string; options?: GenerationOptions } => {
  const template = getTemplateById(templateId);
  if (!template) {
    throw new Error(`Template with id "${templateId}" not found`);
  }

  const prompt = interpolatePrompt(template, variables);

  return {
    prompt: overrides?.prompt || prompt,
    options: overrides?.defaultOptions || template.defaultOptions,
  };
};
