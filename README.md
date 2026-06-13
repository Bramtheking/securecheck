# SecureCheck Pro

A professional Next.js web application that checks if emails or passwords have been compromised in data breaches.

## Features

- **Email Breach Scanner**: Searches through billions of leaked records using XposedOrNot API
- **Password Strength Checker**: Uses Have I Been Pwned API with K-Anonymity protocol for secure password checking
- **Privacy-First**: Passwords are hashed using SHA-1, only partial hashes sent to API
- **Clean UI**: Professional design inspired by Have I Been Pwned
- **100% Free**: No API keys or registration required

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Deploy to Netlify

### IMPORTANT: Netlify Setup Steps

**Before deploying, follow these exact steps:**

1. **In your Netlify site dashboard:**
   - Go to **Site configuration** → **Build & deploy** → **Build settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Install the Netlify Next.js Plugin:**
   - Go to **Integrations** → **Search "Next.js Runtime"**
   - Click **Enable** or **Install**
   - OR it will auto-detect from `netlify.toml`

3. **Environment (if needed):**
   - Go to **Site configuration** → **Environment variables**
   - Set `NODE_VERSION` to `18` (usually auto-detected from `.nvmrc`)

### Deployment Methods

#### Option 1: Git Deploy (Recommended)
```bash
# Push to your repository
git add .
git commit -m "Deploy to Netlify"
git push

# Netlify will auto-deploy when connected
```

1. Go to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"  
3. Connect your Git repository (GitHub/GitLab/Bitbucket)
4. Netlify will auto-detect Next.js settings
5. Click "Deploy site"

#### Option 2: Netlify CLI
```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login
netlify login

# Link to site (first time)
netlify link

# Deploy to production
netlify deploy --prod --build
```

### Troubleshooting 404 on API Routes

If API routes return 404 after deployment:

1. **Check Build Logs:**
   - Look for "@netlify/plugin-nextjs" in build logs
   - Should see "Installing Next.js Runtime"

2. **Clear Cache & Redeploy:**
   ```
   Site Settings → Build & Deploy → Clear Cache and Deploy Site
   ```

3. **Verify Plugin Installation:**
   - Go to Integrations tab
   - Ensure "Next.js Runtime" is enabled

4. **Check Function Logs:**
   - Go to Functions tab in Netlify
   - You should see functions created for your API routes

5. **Manual Plugin Install (if needed):**
   - In site settings, go to Plugins
   - Search for "Essential Next.js"
   - Click Install/Enable

## Environment

- Node.js 18+
- Next.js 14
- No environment variables needed (APIs are public and free)

## APIs Used

- **XposedOrNot**: Email breach checking (completely free, no API key)
- **Have I Been Pwned**: Password breach checking (completely free, no API key)

## Tech Stack

- Next.js 14 with App Router
- TypeScript
- React 18
- Server-side API routes
- SHA-1 hashing for password security
