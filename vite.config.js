import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// ⚡ Important: base must match Tomcat app folder name
export default defineConfig({
  plugins: [react()],
  base: '/ecommerce-frontend/',   // ensures correct paths in production
})
