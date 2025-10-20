const OVERLAY_TAG_NAME = "vite-error-overlay";

type OverlayError = {
  frame?: string;
  message: string;
  stack: string;
  plugin?: string;
  id?: string;
  loc?: { file?: string; line?: number; column?: number } | null;
};

type OverlayConstructor = new (err: OverlayError, links?: boolean) => HTMLElement;

type PatchedOverlayConstructor = OverlayConstructor & {
  __patched?: true;
};

function normalizeError(err?: Partial<OverlayError>): OverlayError {
  return {
    message: typeof err?.message === "string" ? err.message : "",
    stack: typeof err?.stack === "string" ? err.stack : "",
    frame: typeof err?.frame === "string" ? err.frame : "",
    plugin: typeof err?.plugin === "string" ? err.plugin : undefined,
    id: typeof err?.id === "string" ? err.id : undefined,
    loc: err?.loc ?? null,
  } satisfies OverlayError;
}

export function patchViteErrorOverlay(): void {
  if (typeof window === "undefined") {
    return;
  }

  const registry = window.customElements;

  if (!registry || typeof registry.get !== "function") {
    return;
  }

  const existing = registry.get(OVERLAY_TAG_NAME) as PatchedOverlayConstructor | undefined;

  if (!existing || existing.__patched) {
    return;
  }

  const BaseOverlay = existing as OverlayConstructor;

  class SafeOverlay extends BaseOverlay {
    constructor(...args: ConstructorParameters<OverlayConstructor>) {
      const [err, links] = args;
      super(normalizeError(err as Partial<OverlayError> | undefined), links);
    }
  }

  (SafeOverlay as PatchedOverlayConstructor).__patched = true;

  const originalGet = registry.get.bind(registry);

  registry.get = function patchedGet(name: string) {
    const ctor = originalGet(name);

    if (name === OVERLAY_TAG_NAME) {
      return SafeOverlay as unknown as CustomElementConstructor;
    }

    return ctor;
  };
}

patchViteErrorOverlay();
