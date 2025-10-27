import type { AppProps } from 'next/app';
import Head from 'next/head';

interface PageProps {
  title?: string;
  description?: string;
  schema?: object | object[];
  canonical?: string;
  keywords?: string;
}

export default function MyApp({ Component, pageProps }: AppProps<PageProps>) {
  const {
    title = 'Katherine Taylor | Sacramento & San Francisco Luxury Escort',
    description = 'Elite escort services in Sacramento and San Francisco. Discreet companionship for discerning clients. Professional, confidential, and available for travel.',
    schema,
    canonical = 'https://katherinetaylorescort.com',
    keywords = 'escorts near me, Sacramento escort, Sac escort, California escorts, California escort, escorting, Katherine Taylor, luxury companion, elite escort, San Francisco escort'
  } = pageProps;

  return (
    <>
      <Head>
        {/* Essential meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        {/* Primary meta tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonical} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://katherinetaylorescort.com/og-image.jpg" />
        <meta property="og:site_name" content="Katherine Taylor" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonical} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://katherinetaylorescort.com/og-image.jpg" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Katherine Taylor" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Structured Data - one script tag per schema block */}
        {schema && (
          Array.isArray(schema)
            ? schema.map((block, i) => (
                <script
                  key={i}
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
                />
              ))
            : (
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
              )
        )}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
