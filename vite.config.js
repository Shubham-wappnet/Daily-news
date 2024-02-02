import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import envCompatible from 'vite-plugin-env-compatible';

export default defineConfig({
  server: {
    watch: {
      usePolling: true
    }
  },
  plugins: [
    react(),
    envCompatible({
      envPrefix: "React_app_"
    })
  ]
});
