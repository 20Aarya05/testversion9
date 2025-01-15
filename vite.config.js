import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000, // Change this if you have another service running on 3000
    open: true // Automatically open the browser on server start
  },
  build: {
    outDir: 'dist', // Output directory for the build
  },
  resolve: {
    alias: {
      '@': '/src' // Optional: Short path for importing files
    }
  },
  publicDir: 'src',
});
