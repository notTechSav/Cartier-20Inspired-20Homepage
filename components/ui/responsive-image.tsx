import { ImgHTMLAttributes } from 'react';

interface ResponsiveImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> {
  /** Base Builder.io image URL (without query params) */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Image widths to generate (default: [400, 800, 1200, 1600, 2400, 3200]) */
  widths?: number[];
  /** CSS sizes attribute (default: "100vw") */
  sizes?: string;
  /** Image format (default: "webp") */
  format?: 'webp' | 'avif' | 'jpg';
  /** Enable AVIF with WebP fallback (default: false) */
  useAvif?: boolean;
}

/**
 * Responsive image component with automatic srcset generation for Builder.io URLs
 *
 * @example
 * <ResponsiveImage
 *   src="https://cdn.builder.io/.../image"
 *   alt="Hero image"
 *   sizes="100vw"
 *   loading="lazy"
 * />
 */
export const ResponsiveImage = ({
  src,
  alt,
  widths = [400, 800, 1200, 1600, 2400, 3200],
  sizes = '100vw',
  format = 'webp',
  useAvif = false,
  loading = 'lazy',
  decoding = 'async',
  ...props
}: ResponsiveImageProps) => {
  const generateSrcSet = (fmt: string) => {
    return widths
      .map((width) => `${src}?format=${fmt}&width=${width} ${width}w`)
      .join(', ');
  };

  if (useAvif) {
    return (
      <picture>
        <source srcSet={generateSrcSet('avif')} type="image/avif" sizes={sizes} />
        <source srcSet={generateSrcSet('webp')} type="image/webp" sizes={sizes} />
        <img
          src={`${src}?format=webp&width=${widths[3] || 1600}`}
          srcSet={generateSrcSet(format)}
          sizes={sizes}
          alt={alt}
          loading={loading}
          decoding={decoding}
          {...props}
        />
      </picture>
    );
  }

  return (
    <img
      src={`${src}?format=${format}&width=${widths[3] || 1600}`}
      srcSet={generateSrcSet(format)}
      sizes={sizes}
      alt={alt}
      loading={loading}
      decoding={decoding}
      {...props}
    />
  );
};

/** Preset for full-width hero images */
export const HeroImage = (props: Omit<ResponsiveImageProps, 'widths' | 'sizes'>) => (
  <ResponsiveImage
    widths={[400, 800, 1200, 1600, 2400, 3200]}
    sizes="100vw"
    {...props}
  />
);

/** Preset for gallery/card thumbnails (max 400px wide) */
export const ThumbnailImage = (props: Omit<ResponsiveImageProps, 'widths' | 'sizes'>) => (
  <ResponsiveImage
    widths={[400, 600, 800]}
    sizes="(max-width: 768px) 100vw, 400px"
    {...props}
  />
);
