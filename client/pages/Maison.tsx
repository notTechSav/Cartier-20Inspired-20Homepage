import DynamicContent from "@/components/DynamicContent";

const Maison = () => {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "60vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        paddingLeft: "var(--spacer-m)",
        paddingRight: "var(--spacer-m)",
        paddingTop: "var(--spacer-6xl)",
        paddingBottom: "var(--spacer-6xl)",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          fontWeight: 300,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "var(--color-text-primary)",
        }}
      >
        Maison
      </h1>

      {/* AI-Generated Content Section */}
      <div
        style={{
          marginTop: "var(--spacer-2xl)",
          width: "100%",
          maxWidth: "56rem",
        }}
      >
        <DynamicContent
          page="maison"
          brandVoice="Katherine Taylor brand voice"
          style={{ textAlign: "left" }}
        />
      </div>

      {/* Fallback static content */}
      <div
        style={{
          marginTop: "var(--spacer-2xl)",
          maxWidth: "42rem",
          fontSize: "16px",
          fontWeight: 300,
          lineHeight: 1.8,
          color: "var(--color-text-tertiary)",
        }}
      >
        <p>
          Discover the stories, craftsmanship, and heritage behind our maison.
          Explore curated collections, design inspirations, and exclusive
          experiences crafted for modern connoisseurs.
        </p>
      </div>
    </div>
  );
};

export default Maison;
