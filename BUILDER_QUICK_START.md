# 🚀 Builder.io Quick Start - GitHub Integration

## Step 1: Get Your Builder.io API Key (2 minutes)

1. Go to **https://builder.io** and sign in
2. Click your **organization name** (top-left)
3. Go to **Account Settings** → **API Keys**
4. Copy your **Public API Key**

## Step 2: Add API Key to Your Project (1 minute)

Edit the `.env` file in your project root:
```bash
VITE_BUILDER_API_KEY=paste_your_actual_key_here
```

## Step 3: Connect GitHub to Builder.io (3 minutes)

### In Builder.io Dashboard:

1. **Click your organization** → **Settings**
2. **Go to Integrations** → Look for "GitHub" or "Code Integrations"
3. **Click "Connect GitHub"** or "Add Integration"
4. **Authorize Builder.io** - allow access to your GitHub account
5. **Select your repository**: `Cartier-20Inspired-20Homepage`
6. **Configure**:
   - Branch: `main`
   - Component path: `client/components/**/*.tsx`
   - Enable auto-sync ✅

## Step 4: Test It! (2 minutes)

1. **Start your dev server:**
   ```bash
   pnpm dev
   ```

2. **In Builder.io:**
   - Go to **Content** → **Page** (or **Models** → **Page**)
   - Click **+ New Entry**
   - Set URL to: `/builder-test`
   - **Drag components** from the left sidebar into the canvas
   - Click **Publish**

3. **View your page:**
   - Open: `http://localhost:8080/builder-test`
   - You should see your visually-edited page! 🎉

## What's Available to Edit?

All your components are now drag-and-drop in Builder.io:
- ✅ Hero
- ✅ Legend Reinvented Section
- ✅ Image Mosaic Section
- ✅ Love Story Section
- ✅ And 10+ more sections!

## Troubleshooting

**Components not showing?**
- Make sure `.env` has your API key
- Restart dev server: `pnpm dev`

**GitHub not connecting?**
- Make sure you have admin access to the repo
- Try disconnecting and reconnecting

**Page not loading?**
- Check browser console for errors
- Verify URL path matches in Builder.io

---

📖 **Full Documentation**: See `BUILDER_IO_SETUP.md` for complete guide
🆘 **Need Help?**: [Builder.io Discord](https://discord.gg/builder)
