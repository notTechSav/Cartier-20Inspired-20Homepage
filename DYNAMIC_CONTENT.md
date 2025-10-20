# Dynamic Content Generation

This project includes a dynamic content generation feature that uses OpenAI's API to generate page content in the Katherine Taylor brand voice.

## Setup

1. **Environment Variable**: Create a `.env` file in the project root and add your OpenAI API key:
   ```
   VITE_OPENAI_API_KEY=your_openai_api_key_here
   ```

2. **Install Dependencies**: The required dependencies are already included in the project.

## Usage

### Basic Implementation

```tsx
import DynamicContent from '@/components/DynamicContent';

const MyPage = () => {
  return (
    <div>
      <h1>My Page</h1>
      <DynamicContent page="my-page" />
    </div>
  );
};
```

### Advanced Usage

```tsx
import DynamicContent from '@/components/DynamicContent';

const MyPage = () => {
  return (
    <div>
      <h1>My Page</h1>
      <DynamicContent 
        page="my-page"
        customPrompt="Write a compelling introduction for our luxury services page"
        brandVoice="Katherine Taylor brand voice with emphasis on elegance"
        className="my-custom-styles"
      />
    </div>
  );
};
```

### Using the Hook Directly

```tsx
import { useDynamicContent } from '@/hooks/useDynamicContent';

const MyComponent = () => {
  const { content, loading, error, regenerate } = useDynamicContent({
    page: "custom-page",
    customPrompt: "Generate content for a luxury brand",
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  );
};
```

## Props

### DynamicContent Component

- `page?: string` - The page name to generate content for (defaults to current pathname)
- `customPrompt?: string` - Custom prompt for content generation
- `brandVoice?: string` - Brand voice description (defaults to "Katherine Taylor brand voice")
- `className?: string` - Additional CSS classes

### useDynamicContent Hook

Returns an object with:
- `content: string` - The generated HTML content
- `loading: boolean` - Loading state
- `error: string | null` - Error message if any
- `regenerate: () => void` - Function to regenerate content

## Features

- **Automatic Page Detection**: Uses the current route pathname by default
- **Error Handling**: Graceful error handling with retry functionality
- **Loading States**: Visual feedback during content generation
- **Customizable Prompts**: Override default prompts for specific use cases
- **Regeneration**: Users can regenerate content with a button click
- **TypeScript Support**: Full type safety throughout

## Example Implementation

The `Maison` page (`client/pages/Maison.tsx`) demonstrates how to integrate dynamic content generation alongside static content.

## Security Notes

- The OpenAI API key is exposed to the client-side code (prefixed with `VITE_`)
- This is suitable for development and testing, but consider using a backend proxy for production
- Never commit the `.env` file with real API keys to version control

