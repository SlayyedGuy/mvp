import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',  // Make sure Vite is serving from the `src` folder
  build: {
    rollupOptions: {
      input: '/src/main.jsx',  // Set the entry file
    },
  },
});
