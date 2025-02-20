import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/",
  build: {  
    minify: 'esbuild',
    target: 'esnext', // Remove this if using the legacy plugin
    outDir: 'dist',
  }
})
