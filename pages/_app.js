import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{pageProps.title || 'Katherine Taylor'}</title>
        <meta name="description" content={pageProps.description || 'Luxury companion'} />
        {pageProps.schema && (
          <script 
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(pageProps.schema) }}
          />
        )}
      </Head>
      <Component {...pageProps} />
    </>
  )
}
