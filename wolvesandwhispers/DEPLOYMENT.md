# 🚀 Wolves & Whispers Website - Deployment Guide

## 📦 Build Production

The website has been built and is ready for deployment to OVH!

```bash
npm run build
```

## 📁 Files to Upload

Upload the entire contents of the `out/` folder to your OVH hosting:

- `out/index.html` → Root of your web hosting
- `out/_next/` → Static assets folder  
- `out/download/` → Download page
- `out/rules/` → Rules page
- `out/support/` → Support page
- `out/privacy/` → Privacy policy page
- All other files in `out/`

## 🌐 OVH Deployment Steps

### 1. Access OVH Control Panel
- Go to your OVH hosting control panel
- Navigate to "Web Hosting" section

### 2. File Manager / FTP
- Use OVH File Manager or FTP client
- Upload all contents from `out/` folder to your domain root
- **Important**: Upload the contents of `out/`, not the folder itself

### 3. SSL Certificate Configuration
- In OVH control panel, go to "SSL Certificates" 
- Click "Order SSL Certificate"
- Select "Let's Encrypt (Free)"
- ✅ Certificate will be automatically configured

### 4. Domain Configuration
- Ensure wolvesandwhispers.app points to your OVH hosting
- Wait for DNS propagation (up to 24h)

## ✅ Verification

After deployment, verify these URLs work:
- https://wolvesandwhispers.app (Homepage)
- https://wolvesandwhispers.app/download (Download page)
- https://wolvesandwhispers.app/rules (Rules page)
- https://wolvesandwhispers.app/support (Support page)
- https://wolvesandwhispers.app/privacy (Privacy policy)

## 🔄 Future Updates

To update the website:
1. Make changes to the source code
2. Run `npm run build` 
3. Upload the new `out/` folder contents to OVH
4. Clear browser cache to see changes

## 📧 Support

For any deployment issues, contact support@wolvesandwhispers.app

---

✅ **Next.js website ready for OVH deployment!**
- All pages created and tested
- Static export optimized for OVH hosting
- SSL certificate will be automatically configured
- Mobile-responsive design
- SEO optimized