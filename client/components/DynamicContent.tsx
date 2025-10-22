import { useDynamicContent } from "@/hooks/useDynamicContent";
import { Button } from "@/components/ui/button";
import { RefreshCw, AlertCircle } from "lucide-react";

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
  className = "",
}: DynamicContentProps) => {
  const { content, loading, error, regenerate } = useDynamicContent({
    page,
    customPrompt,
    brandVoice,
  });

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "var(--spacer-m)",
        }}
        className={className}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--spacer-xs)",
            color: "var(--color-text-tertiary)",
          }}
        >
          <RefreshCw
            style={{
              width: "16px",
              height: "16px",
              animation: "spin 1s linear infinite",
            }}
          />
          <span>Generating content...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "var(--spacer-m)",
        }}
        className={className}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--spacer-xs)",
            color: "var(--color-text-error)",
            marginBottom: "var(--spacer-m)",
          }}
        >
          <AlertCircle style={{ width: "16px", height: "16px" }} />
          <span>Error generating content</span>
        </div>
        <p
          style={{
            fontSize: "14px",
            color: "var(--color-text-tertiary)",
            marginBottom: "var(--spacer-m)",
            textAlign: "center",
            maxWidth: "28rem",
          }}
        >
          {error}
        </p>
        <Button onClick={regenerate} variant="outline" size="sm">
          <RefreshCw
            style={{
              width: "16px",
              height: "16px",
              marginRight: "var(--spacer-xs)",
            }}
          />
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className={className}>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        style={{ maxWidth: "100%" }}
      />
      <div
        style={{
          marginTop: "var(--spacer-m)",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button onClick={regenerate} variant="ghost" size="sm">
          <RefreshCw
            style={{
              width: "16px",
              height: "16px",
              marginRight: "var(--spacer-xs)",
            }}
          />
          Regenerate
        </Button>
      </div>
    </div>
  );
};

export default DynamicContent;
