import { useDynamicContent } from '@/hooks/useDynamicContent';
import { Button } from '@/components/ui/button';
import { RefreshCw, AlertCircle } from 'lucide-react';

interface DynamicContentProps {
  page?: string;
  customPrompt?: string;
  brandVoice?: string;
  className?: string;
}

export const DynamicContent = ({ 
  page, 
  customPrompt, 
  brandVoice, 
  className = "" 
}: DynamicContentProps) => {
  const { content, loading, error, regenerate } = useDynamicContent({
    page,
    customPrompt,
    brandVoice,
  });

  if (loading) {
    return (
      <div className={`flex items-center justify-center p-8 ${className}`}>
        <div className="flex items-center space-x-2 text-gray-600">
          <RefreshCw className="h-4 w-4 animate-spin" />
          <span>Generating content...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
        <div className="flex items-center space-x-2 text-red-600 mb-4">
          <AlertCircle className="h-4 w-4" />
          <span>Error generating content</span>
        </div>
        <p className="text-sm text-gray-600 mb-4 text-center max-w-md">
          {error}
        </p>
        <Button onClick={regenerate} variant="outline" size="sm">
          <RefreshCw className="h-4 w-4 mr-2" />
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className={className}>
      <div 
        dangerouslySetInnerHTML={{ __html: content }}
        className="prose prose-lg max-w-none"
      />
      <div className="mt-4 flex justify-end">
        <Button onClick={regenerate} variant="ghost" size="sm">
          <RefreshCw className="h-4 w-4 mr-2" />
          Regenerate
        </Button>
      </div>
    </div>
  );
};

export default DynamicContent;

