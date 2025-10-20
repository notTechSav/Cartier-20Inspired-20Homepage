import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, AlertCircle, Edit2, Check, X, Trash2 } from 'lucide-react';
import { ContentSection } from '@/hooks/useEnhancedContent';

interface EnhancedContentSectionProps {
  section: ContentSection;
  onRegenerate: () => void;
  onUpdate: (content: string) => void;
  onDelete?: () => void;
  editable?: boolean;
}

export const EnhancedContentSection = ({
  section,
  onRegenerate,
  onUpdate,
  onDelete,
  editable = true,
}: EnhancedContentSectionProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(section.content);

  const handleSave = () => {
    onUpdate(editedContent);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedContent(section.content);
    setIsEditing(false);
  };

  if (section.loading) {
    return (
      <div className="flex items-center justify-center p-12 border border-neutral-200 bg-neutral-50/30">
        <div className="flex items-center space-x-3 text-neutral-600">
          <RefreshCw className="h-5 w-5 animate-spin" />
          <span className="text-sm font-light tracking-[0.02em]">
            Generating {section.title}...
          </span>
        </div>
      </div>
    );
  }

  if (section.error) {
    return (
      <div className="flex flex-col items-center justify-center p-12 border border-red-200 bg-red-50/30">
        <div className="flex items-center space-x-2 text-red-600 mb-4">
          <AlertCircle className="h-5 w-5" />
          <span className="text-sm font-light">Error generating content</span>
        </div>
        <p className="text-sm font-light text-neutral-600 mb-6 text-center max-w-md">
          {section.error}
        </p>
        <Button
          onClick={onRegenerate}
          variant="outline"
          size="sm"
          className="text-sm font-light"
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="relative group border border-neutral-200 bg-white transition-all duration-300 hover:border-neutral-300">
      {/* Section Header */}
      {section.title && (
        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4 bg-neutral-50/50">
          <h3 className="text-sm font-light uppercase tracking-[0.08em] text-neutral-700">
            {section.title}
          </h3>
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {editable && !isEditing && (
              <Button
                onClick={() => setIsEditing(true)}
                variant="ghost"
                size="sm"
                className="h-8 px-3 text-neutral-600 hover:text-neutral-900"
              >
                <Edit2 className="h-3.5 w-3.5" />
              </Button>
            )}
            <Button
              onClick={onRegenerate}
              variant="ghost"
              size="sm"
              className="h-8 px-3 text-neutral-600 hover:text-neutral-900"
            >
              <RefreshCw className="h-3.5 w-3.5" />
            </Button>
            {onDelete && (
              <Button
                onClick={onDelete}
                variant="ghost"
                size="sm"
                className="h-8 px-3 text-red-600 hover:text-red-700"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Content Area */}
      <div className="p-6">
        {isEditing ? (
          <div className="space-y-4">
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="w-full min-h-[300px] p-4 border border-neutral-300 rounded-none font-light text-sm leading-relaxed focus:outline-none focus:ring-1 focus:ring-neutral-400"
              style={{ fontFamily: 'monospace' }}
            />
            <div className="flex items-center gap-2">
              <Button
                onClick={handleSave}
                size="sm"
                className="bg-neutral-900 hover:bg-neutral-800 text-white"
              >
                <Check className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
              <Button
                onClick={handleCancel}
                variant="outline"
                size="sm"
                className="text-neutral-700"
              >
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div
            dangerouslySetInnerHTML={{ __html: section.content }}
            className="prose prose-lg max-w-none prose-headings:font-extralight prose-headings:tracking-tight prose-p:font-light prose-p:text-neutral-700 prose-p:leading-relaxed"
          />
        )}
      </div>
    </div>
  );
};

interface EnhancedDynamicContentProps {
  sections: ContentSection[];
  onRegenerateSection: (sectionId: string) => void;
  onUpdateSection: (sectionId: string, content: string) => void;
  onDeleteSection?: (sectionId: string) => void;
  editable?: boolean;
  className?: string;
}

export const EnhancedDynamicContent = ({
  sections,
  onRegenerateSection,
  onUpdateSection,
  onDeleteSection,
  editable = true,
  className = '',
}: EnhancedDynamicContentProps) => {
  if (sections.length === 0) {
    return (
      <div className={`flex items-center justify-center p-12 border border-dashed border-neutral-300 ${className}`}>
        <p className="text-sm font-light text-neutral-500 tracking-[0.02em]">
          No content sections available
        </p>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {sections.map((section) => (
        <EnhancedContentSection
          key={section.id}
          section={section}
          onRegenerate={() => onRegenerateSection(section.id)}
          onUpdate={(content) => onUpdateSection(section.id, content)}
          onDelete={onDeleteSection ? () => onDeleteSection(section.id) : undefined}
          editable={editable}
        />
      ))}
    </div>
  );
};

export default EnhancedDynamicContent;
