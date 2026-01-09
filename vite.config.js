import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Untuk GitHub Pages, ganti 'shakasiji-react' dengan nama repo Anda
  // Hapus baris base jika deploy ke Vercel/Netlify
  base: '/shakasiji-react/',
})
