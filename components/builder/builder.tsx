"use client";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { BuilderContent, builder } from "@builder.io/sdk";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface RenderBuilderContentProps {
  content: BuilderContent | null;
  model: string;
}

export function RenderBuilderContent({
  content,
  model,
}: RenderBuilderContentProps) {
  const isPreviewing = useIsPreviewing();

  if (!content && !isPreviewing) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Page Not Found</h1>
          <p className="mt-2 text-gray-600">
            This page does not exist in Builder.io
          </p>
        </div>
      </div>
    );
  }

  return <BuilderComponent model={model} content={content} />;
}
