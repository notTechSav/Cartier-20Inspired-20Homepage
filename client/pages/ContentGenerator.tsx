'use client';

import { useEffect, useState } from 'react';
import { useEnhancedContent } from '@/hooks/useEnhancedContent';
import { EnhancedDynamicContent } from '@/components/EnhancedDynamicContent';
import {
  PROMPT_TEMPLATES,
  getTemplatesByCategory,
  createCustomPrompt,
} from '@/lib/promptTemplates';
import { Button } from '@/components/ui/button';
import { RefreshCw, Plus, Sparkles } from 'lucide-react';

const ContentGenerator = () => {
  const {
    sections,
    globalLoading,
    generateSection,
    generateMultipleSections,
    updateSection,
    addSection,
    removeSection,
    initializeSections,
    clearCache,
  } = useEnhancedContent();

  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [customVariables, setCustomVariables] = useState<Record<string, string>>({});

  // Initialize with example sections
  useEffect(() => {
    initializeSections([
      {
        id: 'hero',
        title: 'Hero Statement',
        content: '<p class="text-2xl font-extralight">Click "Generate" to create content using AI.</p>',
      },
      {
        id: 'body',
        title: 'Main Content',
        content: '<p class="font-light">Select a template below and customize it for your needs.</p>',
      },
    ]);
  }, [initializeSections]);

  const handleGenerateFromTemplate = (templateId: string) => {
    const { prompt, options } = createCustomPrompt(templateId, customVariables);
    generateSection('hero', prompt, options);
  };

  const handleGenerateMultiple = () => {
    const configs = [
      {
        id: 'hero',
        ...createCustomPrompt('heroStatement', { PAGE_NAME: 'Content Generator' }),
      },
      {
        id: 'body',
        ...createCustomPrompt('aboutPage'),
      },
    ];
    generateMultipleSections(configs);
  };

  const handleAddSection = () => {
    const newId = `section-${Date.now()}`;
    addSection({
      id: newId,
      title: 'New Section',
      content: '<p>Click generate to create content for this section.</p>',
    });
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="border-b border-neutral-200 bg-white px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="mb-4 text-4xl font-extralight tracking-tight text-neutral-900">
                Content Generator
              </h1>
              <p className="text-base font-light leading-relaxed text-neutral-600">
                AI-powered content generation with Claude Sonnet 4. Features multi-section
                generation, inline editing, caching, and reusable templates.
              </p>
            </div>
            <Button
              onClick={() => clearCache()}
              variant="ghost"
              size="sm"
              className="text-neutral-600"
            >
              Clear Cache
            </Button>
          </div>
        </div>
      </section>

      {/* Control Panel */}
      <section className="border-b border-neutral-200 bg-white px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-xl font-extralight tracking-tight text-neutral-900">
            Quick Actions
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={handleGenerateMultiple}
              disabled={globalLoading}
              className="bg-neutral-900 hover:bg-neutral-800"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Generate All Sections
            </Button>
            <Button
              onClick={handleAddSection}
              variant="outline"
              className="border-neutral-300"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Section
            </Button>
            <Button
              onClick={() => generateSection('hero', 'Write a welcome message in the Katherine Taylor brand voice. Return only HTML.', { temperature: 1.0 })}
              variant="outline"
              disabled={sections.find(s => s.id === 'hero')?.loading}
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Regenerate Hero
            </Button>
          </div>
        </div>
      </section>

      {/* Template Library */}
      <section className="border-b border-neutral-200 bg-neutral-50/50 px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-xl font-extralight tracking-tight text-neutral-900">
            Template Library
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Object.values(PROMPT_TEMPLATES).map((template) => (
              <div
                key={template.id}
                className="border border-neutral-200 bg-white p-4 transition-all hover:border-neutral-400"
              >
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-sm font-normal text-neutral-900">
                    {template.name}
                  </h3>
                  <span className="text-xs font-light uppercase tracking-wider text-neutral-500">
                    {template.category}
                  </span>
                </div>
                <p className="mb-4 text-xs font-light leading-relaxed text-neutral-600">
                  {template.description}
                </p>
                <Button
                  onClick={() => handleGenerateFromTemplate(template.id)}
                  variant="outline"
                  size="sm"
                  className="w-full text-xs"
                  disabled={globalLoading}
                >
                  Use Template
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Generated Content */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-extralight tracking-tight text-neutral-900">
              Generated Content
            </h2>
            {globalLoading && (
              <div className="flex items-center gap-2 text-sm font-light text-neutral-600">
                <RefreshCw className="h-4 w-4 animate-spin" />
                Generating...
              </div>
            )}
          </div>
          <EnhancedDynamicContent
            sections={sections}
            onRegenerateSection={(id) => {
              const section = sections.find((s) => s.id === id);
              if (section?.prompt) {
                generateSection(id, section.prompt);
              }
            }}
            onUpdateSection={(id, content) => updateSection(id, { content })}
            onDeleteSection={removeSection}
            editable={true}
          />
        </div>
      </section>

      {/* Feature Overview */}
      <section className="border-t border-neutral-200 bg-white px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-extralight tracking-tight text-neutral-900">
            Feature Overview
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-base font-normal text-neutral-900">
                5. Multi-Section Generation
              </h3>
              <p className="text-sm font-light leading-relaxed text-neutral-700">
                Generate multiple content sections in parallel with different prompts and
                options. Each section maintains its own loading state and error handling.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-base font-normal text-neutral-900">
                4. Inline Editing
              </h3>
              <p className="text-sm font-light leading-relaxed text-neutral-700">
                Edit AI-generated content directly in the interface. Changes are saved
                immediately and can be regenerated at any time.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-base font-normal text-neutral-900">
                3. Content Caching
              </h3>
              <p className="text-sm font-light leading-relaxed text-neutral-700">
                Generated content is cached locally for 24 hours to avoid unnecessary API
                calls. Cache is automatically invalidated when regenerating.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-base font-normal text-neutral-900">
                2. Reusable Templates
              </h3>
              <p className="text-sm font-light leading-relaxed text-neutral-700">
                Pre-configured prompts for common content types: pages, sections, services,
                and editorial. Templates include variable interpolation and default options.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-base font-normal text-neutral-900">
                1. Advanced Controls
              </h3>
              <p className="text-sm font-light leading-relaxed text-neutral-700">
                Fine-tune generation with temperature, max tokens, and style directives.
                Each template has optimized defaults that can be overridden.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentGenerator;
