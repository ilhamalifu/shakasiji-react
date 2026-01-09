# 🚀 Panduan Deployment Shaka Siji Creative

## Opsi 1: GitHub Pages (Gratis)

### Setup:
1. Push code ke GitHub repository
2. Buka **Settings > Pages**
3. Di "Build and deployment", pilih **GitHub Actions**
4. Workflow akan otomatis berjalan setiap push ke `main`

### Update:
```bash
git add .
git commit -m "Update fitur baru"
git push origin main
# Otomatis deploy dalam 1-2 menit!
```

### URL: `https://username.github.io/shakasiji-react/`

> ⚠️ **Penting**: Pastikan `base` di `vite.config.js` sesuai nama repo

---

## Opsi 2: Vercel (Recommended - Gratis)

### Setup:
1. Buka [vercel.com](https://vercel.com)
2. Login dengan GitHub
3. Klik **"Add New Project"**
4. Pilih repository `shakasiji-react`
5. Klik **Deploy** (auto-detect Vite)

### Update:
```bash
git add .
git commit -m "Update fitur baru"
git push origin main
# Vercel otomatis deploy!
```

### Custom Domain:
- Buka project di Vercel
- Settings > Domains
- Tambahkan domain Anda

> 💡 **Untuk Vercel/Netlify**: Hapus baris `base` di `vite.config.js`

---

## Opsi 3: Netlify (Gratis)

### Setup:
1. Buka [netlify.com](https://netlify.com)
2. Login dengan GitHub
3. Klik **"Add new site" > "Import an existing project"**
4. Pilih repository
5. Build command: `npm run build`
6. Publish directory: `dist`

---

## Quick Commands

```bash
# Development
npm run dev

# Build production
npm run build

# Preview production build
npm run preview
```

## Troubleshooting

### Routing tidak bekerja setelah deploy?
Buat file `public/_redirects` untuk Netlify:
```
/*    /index.html   200
```

Atau untuk Vercel, buat `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```
