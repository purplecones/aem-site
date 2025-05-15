import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        footer: 'blocks/footer/FooterApp.jsx',
      },
      output: {
        entryFileNames: 'blocks/footer/[name].js',
      },
    },
  },
}); 