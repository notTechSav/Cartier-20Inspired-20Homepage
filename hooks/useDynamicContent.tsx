import { useState, useEffect } from 'react';

interface DynamicContentOptions {
  page?: string;
  customPrompt?: string;
  brandVoice?: string;
}

interface DynamicContentState {
  content: string;
  loading: boolean;
  error: string | null;
}

export const useDynamicContent = (options: DynamicContentOptions = {}) => {
  const [state, setState] = useState<DynamicContentState>({
    content: '',
    loading: false,
    error: null,
  });

  const generateContent = async () => {
    // Disable API calls - return empty content
    setState({
      content: '',
      loading: false,
      error: null,
    });
  };

  useEffect(() => {
    // Do nothing - disabled
  }, []);

  return {
    ...state,
    regenerate: generateContent,
  };
};

