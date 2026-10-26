import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the built site works under https://<user>.github.io/<repo>/
export default defineConfig({
  base: './',
  plugins: [react()],
});
