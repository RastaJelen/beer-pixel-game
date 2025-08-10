# Railway Deployment Instructions for Beer Pixel Game

Follow these step-by-step instructions to deploy your Beer Pixel Game to Railway.

## Prerequisites

1. **GitHub Account**: Ensure you have a GitHub account
2. **Railway Account**: Sign up at [railway.app](https://railway.app)
3. **Database Provider**: Choose either Supabase or Neon Database (recommended)

## Step 1: Set Up Cloud Database

### Option A: Supabase (Recommended)

1. Go to [supabase.com](https://supabase.com) and create an account
2. Create a new project
3. Go to **Settings** → **Database**
4. Copy the **Connection String** under "Connection pooling"
5. It should look like: `postgresql://postgres.xxx:[YOUR-PASSWORD]@aws-0-us-west-1.pooler.supabase.com:6543/postgres`

### Option B: Neon Database

1. Go to [neon.tech](https://neon.tech) and create an account
2. Create a new database
3. Copy the connection string from the dashboard
4. It should look like: `postgresql://username:password@hostname.neon.tech/dbname?sslmode=require`

## Step 2: Push Code to GitHub

1. Create a new repository on GitHub
2. Push your code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Beer Pixel Game"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

## Step 3: Deploy to Railway

1. **Login to Railway**:
   - Go to [railway.app](https://railway.app)
   - Sign in with your GitHub account

2. **Create New Project**:
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your Beer Pixel Game repository

3. **Configure Environment Variables**:
   - After deployment starts, go to your project dashboard
   - Click on your service
   - Go to the **Variables** tab
   - Add the following environment variable:
     - `DATABASE_URL`: Paste your database connection string from Step 1

4. **Deploy**:
   - Railway will automatically detect your Node.js app
   - The build process will use the `nixpacks.toml` configuration
   - Wait for deployment to complete (usually 2-3 minutes)

## Step 4: Initialize Database Schema

1. **Connect to your database** using the connection string
2. **Run the database migration**:
   - If using a local terminal: `npm run db:push`
   - Or manually create tables using the schema in `shared/schema.ts`

## Step 5: Verify Deployment

1. **Check Health**:
   - Visit your Railway app URL + `/health`
   - Should return: `{"status":"healthy","timestamp":"..."}`

2. **Test Main App**:
   - Visit your main Railway app URL
   - Verify the homepage loads with pixel art styling
   - Test navigation between pages

## Troubleshooting

### Common Issues:

1. **Database Connection Errors**:
   - Verify `DATABASE_URL` is set correctly in Railway variables
   - Ensure your database allows connections from Railway's IP ranges

2. **Build Failures**:
   - Check the build logs in Railway dashboard
   - Ensure all dependencies are in `package.json`

3. **App Not Loading**:
   - Check the deployment logs for errors
   - Verify the health endpoint is responding

### Railway-Specific Configuration:

- **Port**: Railway automatically assigns a port via `process.env.PORT`
- **Domain**: Railway provides a free `.railway.app` domain
- **Custom Domain**: Can be configured in Railway dashboard
- **HTTPS**: Automatically provided by Railway

## Environment Variables Reference

Required in Railway:
- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Set to `production` (Railway does this automatically)
- `PORT`: Railway sets this automatically

## Post-Deployment

After successful deployment:
1. Your app will be available at `https://[project-name].railway.app`
2. Database tables will be created automatically on first connection
3. The app is ready for Phase 2 development

## Support

If you encounter issues:
1. Check Railway deployment logs
2. Verify database connectivity
3. Ensure all environment variables are set correctly
4. Test locally first with the same `DATABASE_URL`