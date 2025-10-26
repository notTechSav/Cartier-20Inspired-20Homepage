type MetaSelector = "name" | "property";

const setMeta = (selector: MetaSelector, key: string, content: string) => {
  if (typeof document === "undefined") return;
  const existing = document.head.querySelector<HTMLMetaElement>(
    `meta[${selector}="${key}"]`,
  );
  const element = existing ?? document.createElement("meta");
  element.setAttribute(selector, key);
  element.content = content;
  if (!existing) {
    document.head.appendChild(element);
  }
};

export const setNamedMeta = (name: string, content: string) =>
  setMeta("name", name, content);

export const setPropertyMeta = (property: string, content: string) =>
  setMeta("property", property, content);

export const setLinkTag = (rel: string, href: string) => {
  if (typeof document === "undefined") return;
  const existing = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  const element = existing ?? document.createElement("link");
  element.rel = rel;
  element.href = href;
  if (!existing) {
    document.head.appendChild(element);
  }
};

export const injectJsonLd = (id: string, payload: Record<string, unknown>) => {
  if (typeof document === "undefined") return;
  const scriptId = `jsonld-${id}`;
  let script = document.getElementById(scriptId) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = scriptId;
    document.head.appendChild(script);
  }

  script.text = JSON.stringify(payload);
};

export const removeJsonLd = (id: string) => {
  if (typeof document === "undefined") return;
  const scriptId = `jsonld-${id}`;
  const script = document.getElementById(scriptId);
  if (script?.parentNode) {
    script.parentNode.removeChild(script);
  }
};
