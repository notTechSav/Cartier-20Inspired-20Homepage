#!/bin/bash

# Script to migrate remaining pages to Next.js structure

# Create journal route with dynamic routing
mkdir -p app/journal/\[slug\]

# Journal main page
cat > app/journal/page.tsx << 'EOF'
import type { Metadata } from "next";
import SiteLayout from "@/components/site/SiteLayout";
import JournalClient from "@/components/pages/JournalClient";

export const metadata: Metadata = {
  title: "Journal | Katherine Taylor",
  description:
    "Insights, stories, and perspectives on companionship, luxury, and the art of connection.",
  openGraph: {
    title: "Journal | Katherine Taylor",
    description:
      "Insights, stories, and perspectives on companionship, luxury, and the art of connection.",
  },
};

export default function JournalPage() {
  return (
    <SiteLayout>
      <JournalClient />
    </SiteLayout>
  );
}
EOF

# Copy Journal component
cp client/pages/Journal.tsx components/pages/JournalClient.tsx

# Rates page
cat > app/rates/page.tsx << 'EOF'
import type { Metadata } from "next";
import SiteLayout from "@/components/site/SiteLayout";
import RatesClient from "@/components/pages/RatesClient";

export const metadata: Metadata = {
  title: "Rates | Katherine Taylor",
  description:
    "Investment structure and engagement options for high-level companionship.",
};

export default function RatesPage() {
  return (
    <SiteLayout>
      <RatesClient />
    </SiteLayout>
  );
}
EOF

cp client/pages/Rates.tsx components/pages/RatesClient.tsx

# Gallery page
cat > app/gallery/page.tsx << 'EOF'
import type { Metadata } from "next";
import SiteLayout from "@/components/site/SiteLayout";
import GalleryClient from "@/components/pages/GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | Katherine Taylor",
  description: "Private collections from Northern California to Los Angeles.",
};

export default function GalleryPage() {
  return (
    <SiteLayout>
      <GalleryClient />
    </SiteLayout>
  );
}
EOF

cp client/pages/Gallery.tsx components/pages/GalleryClient.tsx

# FAQ page
cat > app/faq/page.tsx << 'EOF'
import type { Metadata } from "next";
import SiteLayout from "@/components/site/SiteLayout";
import FAQClient from "@/components/pages/FAQClient";

export const metadata: Metadata = {
  title: "FAQ | Katherine Taylor",
  description: "Frequently asked questions about high-end private companionship.",
};

export default function FAQPage() {
  return (
    <SiteLayout>
      <FAQClient />
    </SiteLayout>
  );
}
EOF

cp client/pages/FAQ.tsx components/pages/FAQClient.tsx

# Inquire page
cat > app/inquire/page.tsx << 'EOF'
import type { Metadata } from "next";
import SiteLayout from "@/components/site/SiteLayout";
import InquireClient from "@/components/pages/InquireClient";

export const metadata: Metadata = {
  title: "Inquire | Katherine Taylor",
  description: "Begin the conversation about partnership and engagement.",
};

export default function InquirePage() {
  return (
    <SiteLayout>
      <InquireClient />
    </SiteLayout>
  );
}
EOF

cp client/pages/Inquire.tsx components/pages/InquireClient.tsx

# Gifts page
cat > app/gifts/page.tsx << 'EOF'
import type { Metadata } from "next";
import SiteLayout from "@/components/site/SiteLayout";
import GiftsClient from "@/components/pages/GiftsClient";

export const metadata: Metadata = {
  title: "Gifts | Katherine Taylor",
  description: "Curated gifts and experiences for discerning tastes.",
};

export default function GiftsPage() {
  return (
    <SiteLayout>
      <GiftsClient />
    </SiteLayout>
  );
}
EOF

cp client/pages/Gifts.tsx components/pages/GiftsClient.tsx

# Maison page
cat > app/maison/page.tsx << 'EOF'
import type { Metadata } from "next";
import SiteLayout from "@/components/site/SiteLayout";
import MaisonClient from "@/components/pages/MaisonClient";

export const metadata: Metadata = {
  title: "Maison | Katherine Taylor",
  description: "Private residences and preferred locations.",
};

export default function MaisonPage() {
  return (
    <SiteLayout>
      <MaisonClient />
    </SiteLayout>
  );
}
EOF

cp client/pages/Maison.tsx components/pages/MaisonClient.tsx

echo "Page migration complete!"
