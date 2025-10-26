import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder/builder";

// Builder Public API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: Promise<{
    page: string[];
  }>;
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const urlPath = "/" + (params?.page?.join("/") || "");

  const content = await builder
    .get("page", {
      userAttributes: {
        urlPath,
      },
    })
    .toPromise();

  return (
    <>
      <RenderBuilderContent content={content} model="page" />
    </>
  );
}
