import React, { useEffect, useMemo, useRef, useState } from "react";

// LWS utility CSS (tokens + durations) — keep inline for the preview
const Tokens = () => (
  <style>{`
    :root{
      --shadow-elevation-sm: 0 1px 3px rgba(26,26,26,0.04);
      --shadow-elevation-md: 0 4px 12px rgba(26,26,26,0.06);
      --shadow-elevation-lg: 0 12px 28px rgba(26,26,26,0.08);
      --safe-top: env(safe-area-inset-top);
      --safe-bottom: env(safe-area-inset-bottom);
      --color-ink:#1a1a1a;
      --color-paper:#fafaf7;
      --color-stone:#6B5D54;
    }
    .duration-250{ transition-duration:250ms; }
    .duration-400{ transition-duration:400ms; }
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .animate-fade-in { animation: fade-in 400ms ease-out; }
    @media (prefers-reduced-motion: reduce){
      *{ transition-duration: 0.01ms !important; animation-duration:0.01ms !important; animation-iteration-count:1 !important; }
    }
  `}</style>
);

type CTA = "private-access" | "conversation" | "inquire";
type FrameAsset = {
  base: string;
  widths?: number[];
  alt?: string;
};

type Collection = {
  slug: string;
  dir?: string;
  placeholderSeed?: string;
  title: string;
  statement: string;
  cta: CTA;
  count: number;
  hero?: {
    src: string;
    srcSet?: string;
    alt?: string;
  };
  frames?: FrameAsset[];
};

type FrameMeta = {
  camera?: string;
  lens?: string;
  focal?: string;
  aperture?: string;
  shutter?: string;
  iso?: number;
  capturedAt?: string;
  notes?: string;
};

type CollectionMeta = Record<string, FrameMeta>;

const createBuilderSrcSet = (base: string, widths: number[]) =>
  widths
    .map((width) => `${base}?format=webp&width=${width} ${width}w`)
    .join(", ");

const builderFrameWidths = [640, 960, 1200, 1600];
const heroWidths = [640, 960, 1200, 1600];

const silkAndStoneHeroBase =
  "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Fa934f5793f2643c8a8d61ddd67c1c96d";
const colorfieldHeroBase =
  "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F6b131e52db7143258955bb96ca138636";

const DATA: Collection[] = [
  {
    slug: "photos-1",
    title: "Silk & Stone — Los Angeles, 2025",
    statement: "Matte textures, afternoon shadow, breath held. Northern California, 2025.",
    cta: "private-access",
    count: 23,
    hero: {
      src: `${silkAndStoneHeroBase}?format=webp&width=1200`,
      srcSet: createBuilderSrcSet(silkAndStoneHeroBase, heroWidths),
      alt: "Katherine Taylor leaning against a paneled doorway wearing white lingerie and a fur coat",
    },
    frames: [
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Fa934f5793f2643c8a8d61ddd67c1c96d",
        alt: "Katherine Taylor leaning against a paneled doorway wearing white lingerie and a fur coat",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F6cc130799bdb41ebb55b586dc283e151",
        alt: "Katherine Taylor facing forward in white lingerie and a fur coat in front of sunlit shutters",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F0b7729fae0ee4a699fa1cfd03de590f9",
        alt: "Katherine Taylor in sheer nude and pink lingerie leaning over a bathroom sink",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F21e68133549a4cfe8796dbc06d58414d",
        alt: "Katherine Taylor seated in a floral chair wearing sheer pink-trimmed lingerie and an open white shirt",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Fe162ebd2316b43788931185980f4100c",
        alt: "Katherine Taylor posing topless before a bathroom mirror while holding pink lingerie",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F16e1c1c67e6945349334456c5bbf6ce4",
        alt: "Katherine Taylor standing in a white shirt with suspenders and pinstripe trousers by open French doors",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F9d474aecdb0d4b4398faba902149ec88",
        alt: "Katherine Taylor reclining against a doorway in a white shirt, suspenders, and pinstripe trousers",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F8ea57fb0ccb34a35950da1fa95c54bf8",
        alt: "Katherine Taylor leaning on a doorway wearing a white shirt and pinstripe trousers",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F87466c182406412bbbb8452539a4e563",
        alt: "Katherine Taylor seated on a doorstep in a white shirt with pinstripe trousers",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F8f4562142c37463687bb11cfbeb96401",
        alt: "Katherine Taylor in a flowing black robe beside a sunlit pool",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Fd627b42a90eb4b058bfb9d586c7955fc",
        alt: "Katherine Taylor reclining beside the pool in black swimwear and pearls",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Fc23626474d1d414487ea408c3d9084fd",
        alt: "Katherine Taylor topless wearing a black sheer robe in a golden room",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F70b7da9c15b14cf58443d06a71c289ad",
        alt: "Katherine Taylor reclining on a tiled floor in a black gown near a staircase",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F6e0bfa795b3449e78b25958c61f8c37e",
        alt: "Katherine Taylor stretched along a staircase in a red gown",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F09131f26ab7c4e74a266ba9ad0065336",
        alt: "Katherine Taylor topless in a doorway draped in a black leather coat",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Fc5904f093b734758b5d94729fb21bda9",
        alt: "Katherine Taylor stepping through French doors in a white bra with a fur coat",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F6a7de7a219214d1190b93b759877ff79",
        alt: "Katherine Taylor lounging on a bed in white lingerie and a fur coat",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F46cb0724bfde4c47bfb415c4de0743d7",
        alt: "Katherine Taylor standing in a bathroom wearing sheer pink-trimmed lingerie",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Feb0036e1f99b48859ce3a59b29ce325f",
        alt: "Katherine Taylor reflected in a bathroom mirror holding pink lingerie",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F387f56336a1142549f62919149507e2e",
        alt: "Katherine Taylor in a black wrap dress spreading the skirt beside a swimming pool",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Fab84a453e59340cca4af82e5aace3fbe",
        alt: "Katherine Taylor sunbathing by the pool in black swimwear",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Ff5188eaa737849c28a91a5e755d1b150",
        alt: "Katherine Taylor posing nude against a golden paneled wall",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F6694f20d884445e18feb4200cda5c5db",
        alt: "Katherine Taylor standing nude by a sunlit window with golden paneling",
      },
    ],
  },
  {
    slug: "photos-2",
    title: "Colorfield — Malibu, 2024",
    statement: "Color-forward frames, salt air, saturated dusk. Southern California coast.",
    cta: "conversation",
    count: 21,
    hero: {
      src: `${colorfieldHeroBase}?format=webp&width=1200`,
      srcSet: createBuilderSrcSet(colorfieldHeroBase, heroWidths),
      alt: "Katherine Taylor posing topless in a black corset and gloves before a gilded mirror",
    },
    frames: [
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F6b131e52db7143258955bb96ca138636",
        alt: "Katherine Taylor posing topless in a black corset and gloves before a gilded mirror",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Fef0b91a737df4720abb1f2e4d28b9655",
        alt: "Katherine Taylor captured in monochrome wearing a black corset and gloves",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F0f82bbdec51645009d1346e7fd0a4629",
        alt: "Katherine Taylor in a golden satin gown leaning against a doorway with floral wallpaper",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Fbb3ddc4b602b42078087a3a1b73ff2d8",
        alt: "Katherine Taylor standing in a red salon wearing black lingerie, pearls, and a fur coat",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F8ef7f271ddd94fec916179201b989ed1",
        alt: "Katherine Taylor holding embellished lingerie while wearing a cream blazer",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Fbbe1a11ee3074f899df49c7ca666a1a5",
        alt: "Katherine Taylor reclining on a blush sofa in white lace lingerie and a cropped jacket",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Ffb2cf5fff75647458f7caebc7082df6c",
        alt: "Katherine Taylor turning away in white lingerie and a cream jacket with soft sunlight",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F9468728d90e5435284ce7521d34b7ceb",
        alt: "Katherine Taylor adjusting her white corset and garter set in a pink parlor",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F91ceaee4c34545939e14d03a8d519493",
        alt: "Katherine Taylor draped over a velvet sofa in white stockings and bodysuit",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Ffa4fcffb62854789b654692b8899a3a2",
        alt: "Katherine Taylor wearing black lingerie and pearls beside a sunlit window",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Fdff986e3b073408ba1b5ec63272f87c1",
        alt: "Katherine Taylor standing confidently in a fur coat, black lingerie, and metallic trousers",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Fa0ce398651ea42dea386206926fb9470",
        alt: "Katherine Taylor seated in a plush chair wearing a fur coat and layered pearls",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F0b1643b8c8844da3818f8111e0e4fc2b",
        alt: "Close-up of Katherine Taylor's profile with cascading hair and a black lace bra",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F56d69304a03d4d32bd019929afc36e64",
        alt: "Katherine Taylor in a sequined gown posed beside opulent drapery",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F4ec835fa2516418cac84ce8c58f93b86",
        alt: "Katherine Taylor leaning against a mirrored screen in a silver embellished gown",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F121c1d7f001d4a1e8253a961c1be1ccf",
        alt: "Katherine Taylor in a black trench coat standing by a vintage vanity",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F1a35f2cf6e36489d9d863cae3350c83a",
        alt: "Golden close-up of Katherine Taylor's face and shoulders with soft lens flare",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F9cfddf218a99426c84c0be88461337a0",
        alt: "Katherine Taylor wearing a yellow satin gown framed by an ornate gold mirror",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F61cf02067b384546b6aaf1ecc382df17",
        alt: "Katherine Taylor seated in a pink corner wearing a white blazer and heels",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Fb3fb3c4844d744a4a7b5f57c7662d300",
        alt: "Katherine Taylor adjusting a yellow satin gown while draped in a dark coat",
      },
      {
        base: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Fedcf74ee700c43a1875c8d425d42229d",
        alt: "Katherine Taylor seated against a pink wall wearing a white blazer and beaded lingerie",
      },
    ],
  },
  {
    slug: "photos-3",
    dir: "/gallery/photos-3",
    title: "Golden Hour — Studio, 2024",
    statement: "Available light, clean lines, city exhales. San Francisco intimate moments.",
    cta: "inquire",
    count: 25,
  },
];

const pad3 = (n: number) => String(n).padStart(3, "0");
const enc = (s: string) => encodeURI(s);

const getFrameAsset = (c: Collection, index: number) => c.frames?.[index - 1];

const heroSrc = (c: Collection): string | undefined => {
  if (c.hero?.src) {
    return c.hero.src;
  }
  if (c.dir) {
    return enc(`${c.dir}/hero.jpeg`);
  }
  return undefined;
};

const heroSrcSet = (c: Collection): string | undefined => {
  if (c.hero?.srcSet) {
    return c.hero.srcSet;
  }
  if (c.dir) {
    // For local images, just use the single hero.jpeg file
    return undefined;
  }
  return undefined;
};

const heroSizes = "(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw";

const frameSrc = (c: Collection, i: number): string | undefined => {
  const asset = getFrameAsset(c, i);
  if (asset) {
    const widths = asset.widths ?? builderFrameWidths;
    const largest = widths[widths.length - 1];
    return `${asset.base}?format=webp&width=${largest}`;
  }
  if (c.dir) {
    return enc(`${c.dir}/images/${pad3(i)}.jpeg`);
  }
  return undefined;
};

const frameSrcSet = (c: Collection, i: number): string | undefined => {
  const asset = getFrameAsset(c, i);
  if (asset) {
    return createBuilderSrcSet(asset.base, asset.widths ?? builderFrameWidths);
  }
  if (c.dir) {
    // For local images, just use the single .jpeg file
    return undefined;
  }
  return undefined;
};

const frameAlt = (c: Collection, index: number) =>
  getFrameAsset(c, index)?.alt ?? `${c.title} — frame ${pad3(index)}`;

const frameCount = (c: Collection) => c.frames?.length ?? (c.dir ? c.count : 0);

const frameSizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

function canHover() {
  if (typeof window === "undefined") return false;
  return window.matchMedia && window.matchMedia("(hover: hover)").matches;
}

function saveData() {
  if (typeof navigator === "undefined") return false;
  return (navigator as any)?.connection?.saveData === true;
}

function prefetchImages(urls: (string | undefined)[]) {
  if (saveData() || !canHover()) return;
  urls.forEach((u) => {
    if (!u) return;
    const img = new Image();
    (img as any).decoding = "async";
    img.src = u;
  });
}

const prefetched = new Set<string>();

function useCollectionMeta(c: Collection) {
  const [meta, setMeta] = useState<CollectionMeta | null>(null);

  useEffect(() => {
    if (!c.dir) {
      setMeta(null);
      return;
    }

    let cancelled = false;
    (async () => {
      try {
        const url = enc(`${c.dir}/meta.json`);
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) {
          if (!cancelled) setMeta(null);
          return;
        }
        const json = await res.json();
        if (!cancelled) setMeta(json as CollectionMeta);
      } catch {
        if (!cancelled) setMeta(null);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [c.dir]);

  return meta;
}

function summarizeMeta(m?: FrameMeta): string {
  if (!m) return "—";
  const parts: string[] = [];
  if (m.camera) parts.push(m.camera);
  if (m.lens) parts.push(m.lens);
  const expo: string[] = [];
  if (m.focal) expo.push(m.focal);
  if (m.aperture) expo.push(`f/${m.aperture}`);
  if (m.shutter) expo.push(m.shutter);
  if (m.iso) expo.push(`ISO ${m.iso}`);
  if (expo.length) parts.push(expo.join(" · "));
  return parts.join(" · ") || "—";
}

function RadioCard({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label
      className={`border border-neutral-300 px-4 py-3 text-sm font-light rounded-none cursor-pointer ${
        checked ? "bg-neutral-900 text-white" : ""
      }`}
    >
      <input
        type="radio"
        name="layout"
        className="sr-only"
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
}

function PrimaryButton({
  children,
  onClick,
  disabled,
  className,
  ariaLabel,
  ariaBusy,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
  ariaBusy?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-busy={ariaBusy}
      className={`inline-flex items-center justify-center uppercase tracking-[0.15em] text-[13px] sm:text-[14px] font-light px-12 sm:px-14 py-5 sm:py-6 bg-[var(--color-ink)] text-white rounded-none duration-250 ease-out hover:opacity-90 hover:scale-[1.01] hover:shadow-[var(--shadow-elevation-md)] disabled:opacity-60 ${
        className ?? ""
      }`}
    >
      {children}
    </button>
  );
}

function SecondaryButton({
  children,
  onClick,
  className,
  ariaLabel,
  disabled,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      className={`inline-flex items-center justify-center uppercase tracking-[0.15em] text-[13px] sm:text-[14px] font-light px-12 sm:px-14 py-5 sm:py-6 border border-[var(--color-ink)] text-[color:var(--color-ink)] rounded-none duration-250 ease-out hover:bg-[var(--color-ink)] hover:text-[color:var(--color-paper)] hover:scale-[1.01] hover:shadow-[var(--shadow-elevation-md)] disabled:opacity-60 ${
        className ?? ""
      }`}
    >
      {children}
    </button>
  );
}

function Hub({
  onOpen,
  onIntent,
}: {
  onOpen: (slug: string) => void;
  onIntent: (slug: string) => void;
}) {
  return (
    <section className="mx-auto max-w-[1180px] px-6 md:px-12 pt-32 pb-32 md:pt-40 md:pb-48">
      <header className="mx-auto mb-14 max-w-[720px] sm:mb-24">
        <h1 className="text-[56px] sm:text-[68px] md:text-[84px] font-extralight tracking-[-0.03em] leading-[0.95]">
          Private Collections
        </h1>
        <h2 className="sr-only">Katherine Taylor escort</h2>
        <h2 className="sr-only">Sacramento escort · Bay Area escort</h2>
        <h2 className="sr-only">High-end escorts near me · Private companionship Northern California</h2>
        <p className="mt-3 sm:mt-4 max-w-prose text-sm sm:text-base font-light leading-[1.75] text-neutral-700">
          Intimate documentation from Northern California to Los Angeles — three collections, three moments in time. Each room holds its own story, from available light in San Francisco to saturated dusk on the coast.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-start gap-y-16 sm:gap-y-24 gap-x-12 md:gap-x-16">
        {DATA.map((c) => (
          <article key={c.slug} className="group w-full max-w-[360px]">
            <button
              onMouseEnter={() => onIntent(c.slug)}
              onFocus={() => onIntent(c.slug)}
              onClick={() => onOpen(c.slug)}
              className="block w-full text-left focus:outline-none"
              aria-label={`Enter collection ${c.title}`}
              aria-describedby={`${c.slug}-desc`}
            >
              <div
                className="aspect-[4/5] overflow-hidden duration-400 ease-out group-hover:scale-[1.02]"
                style={{ boxShadow: "var(--shadow-elevation-md)" }}
              >
                {(() => {
                  const src = heroSrc(c);
                  if (!src) {
                    return null;
                  }
                  return (
                    <img
                      src={src}
                      srcSet={heroSrcSet(c)}
                      sizes={heroSizes}
                      alt={c.hero?.alt ?? `${c.title} hero`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover duration-400 ease-out group-hover:scale-105"
                    />
                  );
                })()}
              </div>
              <div className="mt-5 space-y-2">
                <h2 className="text-[22px] sm:text-[26px] md:text-[32px] font-extralight tracking-[-0.02em] leading-[1.15] duration-250 group-hover:text-[var(--color-stone)]">
                  {c.title}
                </h2>
                <p
                  id={`${c.slug}-desc`}
                  className="text-xs sm:text-sm font-light text-neutral-600"
                >
                  {c.statement}
                </p>
                <span className="inline-block text-[10px] sm:text-[11px] tracking-[0.18em] uppercase duration-250 group-hover:text-[var(--color-stone)]">
                  View Collection
                </span>
              </div>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function CollectionHeader({
  c,
  onOpen,
  onBack,
}: {
  c: Collection;
  onOpen: () => void;
  onBack: () => void;
}) {
  const totalFrames = frameCount(c);
  return (
    <section className="mx-auto max-w-[1180px] px-6 md:px-12 pt-32 pb-24 md:pt-40 md:pb-36">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,360px)] lg:items-start">
        <div className="space-y-8">
          <button
            onClick={onBack}
            className="inline-flex h-11 items-center gap-2 text-xs uppercase tracking-[0.15em] text-[var(--color-stone)] duration-250 hover:text-[var(--color-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-stone)]/40"
            aria-label="Back to Gallery"
            title="Back to Gallery"
          >
            <span className="text-base">←</span> Back to Collections
          </button>
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-[48px] font-extralight tracking-[-0.025em] leading-[1.05]">
              {c.title}
            </h1>
            <h2 className="sr-only">{c.title} — Katherine Taylor escort</h2>
            <p className="max-w-[48ch] text-sm sm:text-base font-light leading-[1.75] text-neutral-700">
              {c.statement}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <PrimaryButton
              className="w-full sm:w-auto"
              ariaLabel={`${c.title}: primary inquiry`}
            >
              {c.cta === "private-access" && "Request Private Access"}
              {c.cta === "conversation" && "Book a Private Conversation"}
              {c.cta === "inquire" && "Inquire"}
            </PrimaryButton>
            <SecondaryButton
              className="w-full sm:w-auto"
              onClick={onOpen}
              ariaLabel={`Build Private Deck for ${c.title}`}
              disabled={totalFrames === 0}
            >
              Build Private Deck
            </SecondaryButton>
          </div>
        </div>
        {(() => {
          const src = heroSrc(c);
          if (!src) return null;
          return (
            <figure
              className="hidden lg:block aspect-[4/5] overflow-hidden"
              style={{ boxShadow: "var(--shadow-elevation-md)" }}
            >
              <img
                src={src}
                srcSet={heroSrcSet(c)}
                sizes="(min-width: 1280px) 360px, 30vw"
                alt={c.hero?.alt ?? `${c.title} hero frame`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </figure>
          );
        })()}
      </div>
    </section>
  );
}

function FrameGrid({
  c,
  onOpen,
}: {
  c: Collection;
  onOpen: (index: number) => void;
}) {
  const total = frameCount(c);
  const items = Array.from({ length: total }, (_, idx) => {
    const index = idx + 1;
    const src = frameSrc(c, index);
    if (!src) return null;
    const srcSet = frameSrcSet(c, index);
    const alt = frameAlt(c, index);
    return (
      <button
        key={index}
        onClick={() => onOpen(index)}
        className="block text-left focus:outline-none"
        aria-label={`Open ${alt} full screen`}
      >
        <figure
          className="aspect-[4/5] overflow-hidden"
          style={{ boxShadow: "var(--shadow-elevation-sm)" }}
        >
          <img
            src={src}
            srcSet={srcSet}
            sizes={frameSizes}
            alt={alt}
            loading={index === 1 ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-full object-cover"
          />
        </figure>
      </button>
    );
  }).filter(Boolean) as JSX.Element[];

  if (!items.length) {
    return null;
  }

  return (
    <section className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-12 pb-24 md:pb-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {items}
      </div>
    </section>
  );
}

function DeckBuilder({ c, onClose }: { c: Collection; onClose: () => void }) {
  const totalFrames = frameCount(c);
  const [layout, setLayout] = useState<"one" | "four" | "sheet">("one");
  const [selected, setSelected] = useState(
    () => new Set<number>(Array.from({ length: totalFrames }, (_, i) => i + 1)),
  );
  const [email, setEmail] = useState("");
  const [includeWatermark, setIncludeWatermark] = useState(false);
  const [building, setBuilding] = useState(false);
  const [result, setResult] = useState<{ url: string; expires: string } | null>(
    null,
  );
  const closeRef = useRef<HTMLButtonElement>(null);
  const liveRef = useRef<HTMLDivElement>(null);
  const [announce, setAnnounce] = useState<string | null>(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    setSelected(new Set(Array.from({ length: totalFrames }, (_, i) => i + 1)));
  }, [totalFrames]);

  const toggle = (n: number) => {
    const next = new Set(selected);
    next.has(n) ? next.delete(n) : next.add(n);
    setSelected(next);
  };

  const frames = useMemo(
    () => Array.from({ length: totalFrames }, (_, i) => i + 1),
    [totalFrames],
  );
  const selectedCount = selected.size;
  const allSelected = selectedCount === totalFrames;

  function onSelectAll() {
    if (allSelected) {
      setSelected(new Set());
      setAnnounce("Cleared all frames");
    } else {
      setSelected(new Set(frames));
      setAnnounce("Selected all frames");
    }
    setTimeout(() => setAnnounce(null), 1200);
  }

  function build() {
    setBuilding(true);
    setTimeout(() => {
      const token = Math.random().toString(36).slice(2, 10);
      const url = `/decks/${token}/deck.pdf`;
      const expires = new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000,
      ).toISOString();
      console.log({ includeWatermark });
      setResult({ url, expires });
      setBuilding(false);
      if (liveRef.current) liveRef.current.focus();
    }, 600);
  }

  return (
    <div
      className="fixed inset-0 bg-black/30"
      role="dialog"
      aria-modal="true"
      aria-labelledby="deck-title"
      aria-describedby="deck-desc"
    >
      <div
        className="absolute right-0 top-0 h-full w-full md:max-w-[560px] bg-white p-6 sm:p-8 pb-[calc(1rem+var(--safe-bottom))] overflow-y-auto"
        style={{ boxShadow: "var(--shadow-elevation-lg)" }}
      >
        <div className="flex items-start justify-between gap-6">
          <h2
            id="deck-title"
            className="text-xl sm:text-2xl font-extralight tracking-[-0.02em]"
          >
            Build Private Deck
          </h2>
          <button
            ref={closeRef}
            onClick={onClose}
            className="text-sm uppercase tracking-[0.15em]"
            aria-label="Close deck builder"
          >
            Close
          </button>
        </div>
        <p id="deck-desc" className="mt-2 text-sm font-light text-neutral-700">
          {c.title}
        </p>

        <hr className="my-6 border-neutral-200" />

        <div role="group" aria-labelledby="layout-label">
          <h3
            id="layout-label"
            className="text-xs sm:text-sm uppercase tracking-[0.15em]"
          >
            Layout
          </h3>
          <div
            className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3"
            role="radiogroup"
            aria-label="Deck layout"
          >
            <RadioCard
              label="One per page"
              checked={layout === "one"}
              onChange={() => setLayout("one")}
            />
            <RadioCard
              label="Four per page"
              checked={layout === "four"}
              onChange={() => setLayout("four")}
            />
            <RadioCard
              label="Contact sheet"
              checked={layout === "sheet"}
              onChange={() => setLayout("sheet")}
            />
          </div>
        </div>

        <div className="mt-8" role="group" aria-labelledby="frames-label">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-3">
              <h3
                id="frames-label"
                className="text-xs sm:text-sm uppercase tracking-[0.15em]"
              >
                Frames
              </h3>
              <span className="text-xs text-neutral-600">
                {selectedCount}/{totalFrames} selected
              </span>
            </div>
            <button
              className={`text-[11px] sm:text-xs uppercase tracking-[0.15em] underline underline-offset-4 duration-250 ease-out ${
                allSelected
                  ? "decoration-neutral-900/80"
                  : "decoration-neutral-900/60"
              } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300/60`}
              onClick={onSelectAll}
              aria-label={
                allSelected ? "Clear all frames" : "Select all frames"
              }
              aria-pressed={allSelected}
            >
              {allSelected ? "Clear all" : "Select all"}
            </button>
          </div>
          <div className="mt-3 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
            {frames.map((n) => (
              <button
                key={n}
                onClick={() => toggle(n)}
                role="checkbox"
                aria-checked={selected.has(n)}
                className={`h-9 sm:h-10 text-[11px] sm:text-xs font-light border border-neutral-300 ${
                  selected.has(n)
                    ? "bg-neutral-900 text-white"
                    : "text-neutral-900"
                } rounded-none duration-250`}
              >
                {pad3(n)}
              </button>
            ))}
          </div>
          <div className="sr-only" aria-live="polite">
            {announce ?? ""}
          </div>
        </div>

        <div className="mt-8" role="group" aria-labelledby="delivery-label">
          <h3
            id="delivery-label"
            className="text-xs sm:text-sm uppercase tracking-[0.15em]"
          >
            Delivery
          </h3>
          <div className="mt-3 grid gap-3">
            <label className="sr-only" htmlFor="deck-email">
              Email (optional)
            </label>
            <input
              id="deck-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Optional email for share link"
              className="w-full border border-neutral-300 px-4 py-3 text-sm font-light rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300/60"
            />
            <PrimaryButton
              onClick={build}
              disabled={building || frames.length === 0}
              className="w-full md:w-auto"
              ariaLabel="Create deck"
              ariaBusy={building}
            >
              {building ? "Creating…" : "Create Deck"}
            </PrimaryButton>
            {result && (
              <div
                ref={liveRef}
                tabIndex={-1}
                aria-live="polite"
                className="mt-3 text-sm font-light"
              >
                <div>Your private deck is ready. Link expires in 7 days.</div>
                <div className="mt-1">
                  <a
                    className="underline"
                    href={result.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {result.url}
                  </a>
                </div>
                <div className="mt-1 text-neutral-600">
                  Expires: {new Date(result.expires).toLocaleString()}
                </div>
              </div>
            )}
          </div>
        </div>

        <hr className="my-6 border-neutral-200" />

        <ul className="text-[11px] sm:text-xs text-neutral-600 leading-relaxed">
          <li>Cover: {c.title} — From the archive.</li>
          <li>
            Footer: By-appointment only · Private social escort & strategic
            presence.
          </li>
          <li>Watermark: off by default (toggle above if needed).</li>
          <li>Noindex / nofollow for share links; 7-day expiry.</li>
        </ul>
      </div>
    </div>
  );
}

function ImageViewer({
  c,
  meta,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  c: Collection;
  meta: CollectionMeta | null;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const total = frameCount(c);
  const title = frameAlt(c, index);
  const imgRef = useRef<HTMLImageElement>(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
      if (e.key.toLowerCase() === "d") setShowDetails((v) => !v);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    if (total === 0) {
      onClose();
      return;
    }
    const prev = index <= 1 ? total : index - 1;
    const next = index >= total ? 1 : index + 1;
    prefetchImages([frameSrc(c, prev), frameSrc(c, next)]);
  }, [c, index, total, onClose]);

  const m: FrameMeta | undefined = meta?.[pad3(index)];
  const specsSummary = summarizeMeta(m);
  const capture = m?.capturedAt ? new Date(m.capturedAt).toLocaleString() : "—";
  const notes = m?.notes ?? "—";

  return (
    <div
      className="fixed inset-0 bg-black/90 text-white"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <div className="absolute top-0 left-0 right-0 px-4 sm:px-6 md:px-8 pt-[calc(16px+var(--safe-top))] pb-4 flex items-center justify-between gap-3">
        <button
          onClick={onClose}
          className="text-xs uppercase tracking-[0.15em] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300/60"
        >
          Back to Collection
        </button>
        <div className="text-xs font-light opacity-80">
          {pad3(index)} / {pad3(total)}
        </div>
      </div>

      <div className="h-full w-full flex items-center justify-center px-4 sm:px-6 md:px-8">
        <img
          ref={imgRef}
          src={frameSrc(c, index)}
          srcSet={frameSrcSet(c, index)}
          sizes="100vw"
          alt={title}
          className="max-h-[82vh] max-w-[92vw] object-contain"
          loading="eager"
          decoding="async"
        />
      </div>

      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2">
        <button
          onClick={onPrev}
          aria-label="Previous image"
          className="h-12 w-12 rounded-none border border-white/40 text-white/80 duration-250 ease-out hover:text-white hover:border-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        >
          ‹
        </button>
        <button
          onClick={onNext}
          aria-label="Next image"
          className="h-12 w-12 rounded-none border border-white/40 text-white/80 duration-250 ease-out hover:text-white hover:border-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        >
          ›
        </button>
      </div>

      <div className="absolute left-0 right-0 bottom-0 px-4 sm:px-6 md:px-8 pb-[calc(16px+var(--safe-bottom))] pt-4 text-[12px] sm:text-sm font-light text-white/85">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <div className="uppercase tracking-[0.15em] text-[11px] sm:text-xs opacity-80">
              Title
            </div>
            <div>{title}</div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowDetails((v) => !v)}
              aria-expanded={showDetails}
              className="text-xs uppercase tracking-[0.15em] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              {showDetails ? "Hide details" : "Details"}
            </button>
          </div>
        </div>
        {showDetails && (
          <div
            id="viewer-details"
            className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-6 opacity-90"
          >
            <div>
              <div className="uppercase tracking-[0.15em] text-[11px] sm:text-xs opacity-80">
                Specs
              </div>
              <div>{specsSummary}</div>
            </div>
            <div>
              <div className="uppercase tracking-[0.15em] text-[11px] sm:text-xs opacity-80">
                Capture
              </div>
              <div>{capture}</div>
            </div>
            <div>
              <div className="uppercase tracking-[0.15em] text-[11px] sm:text-xs opacity-80">
                Notes
              </div>
              <div>{notes}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DeckBuilderPreview() {
  const [view, setView] = useState<"hub" | "collection">("hub");
  const [slug, setSlug] = useState<string>(DATA[0].slug);
  const [open, setOpen] = useState(false);
  const [viewerIdx, setViewerIdx] = useState<number | null>(null);
  const current = useMemo(
    () => DATA.find((d) => d.slug === slug) ?? DATA[0],
    [slug],
  );
  const meta = useCollectionMeta(current);
  const currentFrameCount = frameCount(current);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [view]);

  useEffect(() => {
    const el = document.documentElement;
    const prev = el.style.overflow;
    if (viewerIdx !== null) el.style.overflow = "hidden";
    return () => {
      el.style.overflow = prev;
    };
  }, [viewerIdx]);

  useEffect(() => {
    if (currentFrameCount === 0 && viewerIdx !== null) {
      setViewerIdx(null);
    }
  }, [currentFrameCount, viewerIdx]);

  return (
    <div className="text-neutral-900">
      <Tokens />
      {view === "hub" ? (
        <Hub
          onOpen={(s) => {
            setSlug(s);
            setView("collection");
          }}
          onIntent={(s) => {
            const c = DATA.find((d) => d.slug === s);
            if (!c || prefetched.has(c.slug)) return;
            const total = frameCount(c);
            if (total === 0) {
              prefetched.add(c.slug);
              return;
            }
            const n = Math.min(6, total);
            prefetchImages(
              Array.from({ length: n }, (_, i) => frameSrc(c, i + 1)),
            );
            prefetched.add(c.slug);
          }}
        />
      ) : (
        <>
          <CollectionHeader
            c={current}
            onOpen={() => setOpen(true)}
            onBack={() => setView("hub")}
          />
          <FrameGrid c={current} onOpen={(i) => setViewerIdx(i)} />
        </>
      )}
      {open && frameCount(current) > 0 && (
        <DeckBuilder c={current} onClose={() => setOpen(false)} />
      )}
      {viewerIdx !== null && currentFrameCount > 0 && (
        <ImageViewer
          c={current}
          meta={meta}
          index={viewerIdx}
          onClose={() => setViewerIdx(null)}
          onPrev={() =>
            setViewerIdx((i) => {
              if (i == null || currentFrameCount === 0) return null;
              return i <= 1 ? currentFrameCount : i - 1;
            })
          }
          onNext={() =>
            setViewerIdx((i) => {
              if (i == null || currentFrameCount === 0) return null;
              return i >= currentFrameCount ? 1 : i + 1;
            })
          }
        />
      )}
    </div>
  );
}
