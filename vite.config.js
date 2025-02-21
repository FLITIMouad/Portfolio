import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/",
  resolve:{
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@state": path.resolve(__dirname, "src/states"),
      "@constants": path.resolve(__dirname, "src/constants"),
    },
  },
  build: {  
    minify: 'esbuild',
    target: 'esnext', // Remove this if using the legacy plugin
    outDir: 'dist',
  }
})
