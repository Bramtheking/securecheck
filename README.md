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

### Important: Netlify Configuration
This app uses Next.js API routes which are automatically converted to Netlify Functions. Make sure you:

1. Install all dependencies including `@netlify/plugin-nextjs`
2. The `netlify.toml` file is properly configured
3. Use Node.js 18 or higher

### Option 1: Git Deploy (Recommended)
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Build settings are auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"
7. Wait for deployment to complete

### Option 2: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and link (first time only)
netlify init

# Deploy to production
netlify deploy --prod
```

### Troubleshooting Netlify Deployment

If you get 404 errors on API routes:
1. Check that `@netlify/plugin-nextjs` is in your `package.json`
2. Clear build cache and redeploy
3. Check build logs for any errors
4. Ensure Node.js version is 18+ (specified in `.nvmrc`)

### Testing Locally Before Deploy
```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Test the API routes at:
# http://localhost:3000/api/check-email
# http://localhost:3000/api/check-password
```

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
