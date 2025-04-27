import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: '/src/main.jsx',  // Ensure this points to your main file correctly
    },
  },
});
