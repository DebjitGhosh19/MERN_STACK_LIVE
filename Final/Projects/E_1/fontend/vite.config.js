import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
// export default defineConfig({
// 
// })

// import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
     // Je port e run korte chao seta ekhane likho
  },plugins: [react(),tailwindcss()],
});
