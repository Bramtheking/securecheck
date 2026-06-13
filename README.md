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

### Option 1: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Option 2: Git Deploy (Recommended)
1. Push your code to GitHub/GitLab
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Build settings are auto-detected from `netlify.toml`
6. Click "Deploy site"

### Option 3: Drag & Drop
```bash
npm run build
# Then drag the .next folder to Netlify's deploy dropzone
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
