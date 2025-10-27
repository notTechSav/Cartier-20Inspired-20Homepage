// pages/_app.js
import Head from "next/head";
import "../styles/globals.css"; // optional if you have it

export default function MyApp({ Component, pageProps }) {
  const { title, description, schema } = pageProps || {};
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Safe global fallbacks (page can override) */}
        <title>{title || "Katherine Taylor"}</title>
        <meta
          name="description"
          content={description || "Luxury companion"}
        />
        {schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
