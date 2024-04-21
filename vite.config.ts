import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    plugins: [react()],
    server: {
      host: true,
      port: parseInt(env.VITE_PORT),
      watch: {
        usePolling: true,
        // for windows (wsl2) refresh on save
      },
    },
  });
};
