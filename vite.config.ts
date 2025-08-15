import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { nodePolyfills } from "vite-plugin-node-polyfills"
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  base: ((process.env.GITHUB_REPOSITORY ?? "") + "/").match(/(\/.*)/)?.[1],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

})
