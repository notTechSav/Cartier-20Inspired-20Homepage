# Builder.io Visual Editing Setup Guide

This guide will help you connect your GitHub repository to Builder.io for visual editing of your React components.

## 🚀 Quick Start

### 1. Get Your Builder.io API Key

1. Go to [Builder.io](https://builder.io) and sign in (or create an account)
2. Click on your **Organization** in the top-left
3. Go to **Account Settings** → **Organization** → **API Keys**
4. Copy your **Public API Key**

### 2. Configure Your Local Environment

1. Create a `.env` file in the root of your project:
   ```bash
   cp .env.example .env
   ```

2. Add your Builder.io API key to `.env`:
   ```env
   VITE_BUILDER_API_KEY=your_actual_api_key_here
   ```

### 3. Connect GitHub to Builder.io

#### Option A: Via Builder.io Dashboard (Recommended)

1. **In Builder.io Dashboard:**
   - Go to **Settings** → **Integrations**
   - Click **Connect GitHub**
   - Authorize Builder.io to access your GitHub account
   - Select your repository: `Cartier-20Inspired-20Homepage`

2. **Configure the integration:**
   - Set **Branch**: `main` (or your default branch)
   - Set **Component path**: `client/components/**/*.tsx`
   - Enable **Auto-sync components**

#### Option B: Manual Code Component Setup

If you prefer to manually import components:

1. In Builder.io, go to **Models** → **Page**
2. Click **+ New Entry**
3. In the editor, you'll see your registered components in the left sidebar
4. Drag and drop components to build pages visually

### 4. Create Your First Builder.io Page

1. **In Builder.io Dashboard:**
   - Go to **Content** → **Page**
   - Click **+ New Entry**
   - Set the **URL path** (e.g., `/builder-test`)
   - Drag your registered components from the left sidebar
   - Click **Publish**

2. **View your page:**
   - Start your dev server: `pnpm dev`
   - Visit: `http://localhost:8080/builder-test`

## 📦 Registered Components

All your components are now available in Builder.io's visual editor:

### Site Sections
- ✅ Hero
- ✅ Legend Reinvented Section
- ✅ Image Mosaic Section
- ✅ Love Story Section
- ✅ Design In Motion Section
- ✅ Boutique Appointment Section
- ✅ FAQ Section
- ✅ Gifts Teaser Section
- ✅ Immersive Video Section
- ✅ Limited Availability Section
- ✅ Love Unlimited Section
- ✅ New Love CTA Section
- ✅ Email Signup Section

### UI Components
- ✅ Button (with variants)
- ✅ Card + Card Header/Title/Description/Content/Footer

## 🔧 How It Works

1. **Component Registration** (`client/builder-registry.tsx`):
   - All your React components are registered with Builder.io
   - This makes them draggable in the visual editor

2. **Builder Page Component** (`client/pages/BuilderPage.tsx`):
   - Fetches content from Builder.io based on URL
   - Renders Builder.io content using your registered components

3. **Routing** (`client/App.tsx`):
   - Catch-all route tries to render Builder.io content
   - Falls back to 404 if no content found

## 🎨 Editing in Builder.io

### Live Preview Mode
1. In Builder.io editor, click **Preview**
2. Your local dev server must be running (`pnpm dev`)
3. Builder.io will load your site in an iframe for live editing

### Component Inputs
Some components have editable properties:
- **Hero**: background image, title, subtitle
- **Button**: text, variant, size
- **Card components**: all content is editable

## 🔒 GitHub Integration Benefits

Once connected to GitHub:
- ✅ Builder.io can read your component code
- ✅ Auto-detect new components when you add them
- ✅ See component props/inputs automatically
- ✅ Better TypeScript integration
- ✅ Component documentation in the editor

## 📝 Creating New Editable Components

To make a new component editable in Builder.io:

1. **Add it to `client/builder-registry.tsx`:**
   ```typescript
   import MyNewComponent from '@/components/MyNewComponent';
   
   Builder.registerComponent(MyNewComponent, {
     name: 'My New Component',
     description: 'What this component does',
     inputs: [
       {
         name: 'title',
         type: 'text',
         defaultValue: 'Hello World'
       },
       {
         name: 'image',
         type: 'file',
         allowedFileTypes: ['jpeg', 'png', 'webp']
       }
     ]
   });
   ```

2. **Component will appear in Builder.io sidebar automatically**

## 🚀 Deploy to Production

When you're ready to deploy:

1. **Add environment variable to your hosting platform:**
   - Vercel/Netlify: Add `VITE_BUILDER_API_KEY` in dashboard
   - Set the value to your Builder.io public API key

2. **Build and deploy:**
   ```bash
   pnpm build
   ```

## 🆘 Troubleshooting

### Components not showing in Builder.io?
- Make sure you've imported `@/builder-registry` in `BuilderPage.tsx`
- Check that `VITE_BUILDER_API_KEY` is set correctly
- Restart your dev server after adding new components

### Builder.io pages not loading?
- Verify your API key is correct
- Check browser console for errors
- Make sure the URL path in Builder.io matches your route

### GitHub integration not working?
- Ensure Builder.io has permission to access your repo
- Check that the branch name is correct
- Verify component paths are set correctly

## 📚 Resources

- [Builder.io Documentation](https://www.builder.io/c/docs/intro)
- [React SDK Documentation](https://www.builder.io/c/docs/developers)
- [Component Registration Guide](https://www.builder.io/c/docs/custom-components)

## 🎯 Next Steps

1. ✅ Set up your `.env` file with Builder.io API key
2. ✅ Connect GitHub in Builder.io dashboard
3. ✅ Create your first test page in Builder.io
4. ✅ Start visually editing your components!

---

**Need help?** Check the [Builder.io Community](https://forum.builder.io/) or [Discord](https://discord.gg/builder)

