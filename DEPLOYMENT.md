# Raisoni - Deployment & Configuration Guide

## 🚀 Deployment Status

### Backend (Render)
- **URL**: https://raisoni.onrender.com
- **Status**: ✅ Deployed
- **Environment**: Node.js / Express
- **Database**: MongoDB Atlas
- **Health Check**: https://raisoni.onrender.com/

### Frontend (Netlify)
- **URL**: https://raisoni.netlify.app (or your custom domain)
- **Status**: ✅ Deployed
- **Build**: Vite + React
- **Framework**: React 19

## 🔧 Configuration Files

### Backend Configuration

#### `.env` (Backend)
```
MONGO_URI=<your_mongodb_atlas_connection_string>
JWT_SECRET=<your_jwt_secret>
PORT=5001
FRONTEND_URL=https://raisoni.netlify.app
```

#### `Procfile` (Render)
```
web: npm start
```

#### `package.json` Scripts
```json
{
  "start": "node server.js",
  "dev": "node server.js"
}
```

### Frontend Configuration

#### `.env` (Frontend)
```
VITE_API_URL=https://raisoni.onrender.com/api
```

#### `netlify.toml` (Netlify)
- ✅ SPA Routing: Redirects all routes to `/index.html`
- ✅ Build Configuration: `npm run build` → `dist/`
- ✅ Cache Headers: Optimized for assets and static files

#### `public/_redirects` (Netlify)
```
/* /index.html 200
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth` - Get current user

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (admin only)
- `PUT /api/projects/:id` - Update project (admin only)
- `DELETE /api/projects/:id` - Delete project (admin only)

### Feedback
- `GET /api/feedback` - Get all feedback
- `POST /api/feedback` - Submit feedback (authenticated)
- `DELETE /api/feedback/:id` - Delete feedback (admin/owner only)

### Admin
- `GET /api/admin/users` - Get all users (admin)
- `GET /api/admin/users/:id` - Get user (admin)
- `POST /api/admin/make-admin` - Promote to admin (admin)
- `POST /api/admin/remove-admin` - Demote from admin (admin)
- `DELETE /api/admin/users/:id` - Delete user (admin)

## 🐛 Troubleshooting

### Issue: "Page not found" on refresh
**Solution**: Fixed with `_redirects` and `netlify.toml` - all routes redirect to `/index.html`

### Issue: CORS errors
**Solution**: Backend CORS is configured to accept both development and production URLs

### Issue: API calls failing
**Solution**: Verify:
1. Backend is running on Render
2. `VITE_API_URL` is set correctly in frontend `.env`
3. Network requests show correct URL in browser DevTools

## 📝 Local Development

### Backend
```bash
cd backend
npm install
# Set up .env with MONGO_URI and JWT_SECRET
npm start
```

### Frontend
```bash
cd my-project
npm install
# Update src/.env for local: VITE_API_URL=http://localhost:5001/api
npm run dev
```

## 🔐 Security Notes

- ✅ Passwords hashed with bcryptjs
- ✅ JWT authentication required for protected routes
- ✅ Admin middleware validates user role
- ✅ CORS restricted to approved domains
- ✅ Environment variables secured on Render/Netlify

## 📦 Build & Deploy

### Frontend (Netlify)
```bash
# Automatic deployment on git push
# Build command: npm install
# Publish directory: dist/
```

### Backend (Render)
```bash
# Automatic deployment on git push
# Build command: npm install
# Start command: npm start
```

## ✅ Deployment Checklist

- [x] Backend deployed on Render
- [x] Frontend deployed on Netlify
- [x] Environment variables configured
- [x] CORS configured for production URLs
- [x] SPA routing fixed (_redirects file)
- [x] API URLs updated to production
- [x] Database connected (MongoDB Atlas)
- [x] JWT authentication working
- [x] Admin routes protected
- [x] Feedback system functional

## 🎯 Features

- ✅ User authentication (login/register)
- ✅ Role-based access control (admin/user)
- ✅ Project management (CRUD)
- ✅ Feedback submission and tracking
- ✅ Real-time feedback count updates
- ✅ Admin dashboard with analytics
- ✅ User management panel
- ✅ Responsive design (Tailwind CSS)

## 📞 Support

For deployment issues:
1. Check Render logs: `Dashboard → Select App → Logs`
2. Check Netlify logs: `Deploy → Logs`
3. Verify environment variables on both platforms
4. Test API with curl or Postman
