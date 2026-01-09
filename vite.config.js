import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Untuk GitHub Pages: ganti dengan nama repo Anda
  // Untuk Vercel/Netlify: hapus atau comment baris base
  base: '/shakasiji-react/',
})
