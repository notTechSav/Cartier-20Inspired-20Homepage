import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '@/builder-registry'; // Register all components

// Initialize Builder with your API key
// You'll need to set this in your environment variables
builder.init(import.meta.env.VITE_BUILDER_API_KEY || '');

/**
 * BuilderPage Component
 * 
 * This component renders content from Builder.io based on the current URL path.
 * It allows you to create and edit pages visually in Builder.io's interface.
 * 
 * Usage:
 * 1. Set VITE_BUILDER_API_KEY in your .env file
 * 2. Create content in Builder.io with model name "page"
 * 3. Set the URL path in Builder.io to match your route
 */
const BuilderPage = () => {
  const location = useLocation();
  const isPreviewingInBuilder = useIsPreviewing();
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        
        // Fetch content from Builder.io based on the current URL
        const builderContent = await builder
          .get('page', {
            url: location.pathname,
            // Use preview mode if in Builder.io editor
            ...(isPreviewingInBuilder && { preview: true }),
          })
          .promise();

        setContent(builderContent);
      } catch (error) {
        console.error('Error fetching Builder.io content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [location.pathname, isPreviewingInBuilder]);

  // Show loading state
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-luxury-white">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-luxury-black border-t-transparent" />
      </div>
    );
  }

  // If no content found and not in preview mode, return null (will show 404)
  if (!content && !isPreviewingInBuilder) {
    return null;
  }

  // Render the Builder.io content
  return (
    <BuilderComponent
      model="page"
      content={content}
    />
  );
};

export default BuilderPage;

