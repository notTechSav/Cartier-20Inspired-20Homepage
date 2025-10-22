import "./global.css";

import "./setup/patchViteOverlay";
import { Toaster } from "@/components/ui/toaster";
import { createRoot, type Root } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  type Location,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import SiteLayout from "@/components/site/SiteLayout";
import JournalModalRoute from "@/components/journal/JournalModalRoute";

// Eager load: Index page only (needed immediately)
import Index from "./pages/Index";

// Lazy load all other routes (code splitting for better performance)
const About = lazy(() => import("./pages/About"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Gifts = lazy(() => import("./pages/Gifts"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Inquire = lazy(() => import("./pages/Inquire"));
const InquireLuxury = lazy(() => import("./pages/InquireLuxury"));
const InquiryConfirmed = lazy(() => import("./pages/InquiryConfirmed"));
const Journal = lazy(() => import("./pages/Journal"));
const JournalArticle = lazy(() => import("./pages/JournalArticle"));
const Maison = lazy(() => import("./pages/Maison"));
const Rates = lazy(() => import("./pages/Rates"));
const ContentGenerator = lazy(() => import("./pages/ContentGenerator"));
const BuilderPage = lazy(() => import("./pages/BuilderPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

type RouterState = {
  backgroundLocation?: Location;
};

// Loading fallback for lazy-loaded routes
const RouteLoader = () => (
  <div
    style={{
      display: "flex",
      minHeight: "100vh",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "var(--color-background-primary)",
    }}
  >
    <div
      style={{
        width: "32px",
        height: "32px",
        animation: "spin 1s linear infinite",
        borderRadius: "50%",
        border: "2px solid var(--color-text-primary)",
        borderTopColor: "transparent",
      }}
    />
  </div>
);

const AppRoutes = () => {
  const location = useLocation();
  const state = location.state as RouterState | undefined;
  const backgroundLocation = state?.backgroundLocation ?? location;

  return (
    <>
      <Suspense fallback={<RouteLoader />}>
        <Routes location={backgroundLocation}>
          <Route
            path="/"
            element={
              <SiteLayout>
                <Index />
              </SiteLayout>
            }
          />
          <Route
            path="/about"
            element={
              <SiteLayout>
                <About />
              </SiteLayout>
            }
          />
          <Route
            path="/gifts"
            element={
              <SiteLayout>
                <Gifts />
              </SiteLayout>
            }
          />
          <Route
            path="/journal"
            element={
              <SiteLayout>
                <Journal />
              </SiteLayout>
            }
          />
          <Route
            path="/journal/:slug"
            element={
              <SiteLayout>
                <JournalArticle />
              </SiteLayout>
            }
          />
          <Route
            path="/rates"
            element={
              <SiteLayout>
                <Rates />
              </SiteLayout>
            }
          />
          <Route
            path="/gallery"
            element={
              <SiteLayout>
                <Gallery />
              </SiteLayout>
            }
          />
          <Route
            path="/faq"
            element={
              <SiteLayout>
                <FAQ />
              </SiteLayout>
            }
          />
          <Route
            path="/inquire"
            element={
              <SiteLayout>
                <Inquire />
              </SiteLayout>
            }
          />
          <Route
            path="/inquire-luxury"
            element={
              <SiteLayout>
                <InquireLuxury />
              </SiteLayout>
            }
          />
          <Route
            path="/inquiry-confirmed"
            element={
              <SiteLayout>
                <InquiryConfirmed />
              </SiteLayout>
            }
          />
          <Route
            path="/maison"
            element={
              <SiteLayout>
                <Maison />
              </SiteLayout>
            }
          />
          <Route
            path="/content-generator"
            element={
              <SiteLayout>
                <ContentGenerator />
              </SiteLayout>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          {/* Builder.io catch-all route - tries to render Builder.io content before 404 */}
          <Route
            path="*"
            element={
              <SiteLayout>
                <BuilderPage />
              </SiteLayout>
            }
          />
        </Routes>
      </Suspense>
      {state?.backgroundLocation ? (
        <Routes>
          <Route path="/journal/:slug" element={<JournalModalRoute />} />
        </Routes>
      ) : null}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container element with id 'root' was not found.");
}

let root: Root;

if (!(globalThis as Record<string, unknown>).__APP_ROOT__) {
  root = createRoot(container);
  (globalThis as Record<string, unknown>).__APP_ROOT__ = root;
} else {
  root = (globalThis as Record<string, unknown>).__APP_ROOT__ as Root;
}

root.render(<App />);
