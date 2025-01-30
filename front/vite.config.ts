import {AliasOptions, defineConfig} from 'vite'
import path from "path";
import react from '@vitejs/plugin-react-swc'

const root = path.resolve(__dirname, "src");

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": root,
    } as AliasOptions,
  },
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  }
})
