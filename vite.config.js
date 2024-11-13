import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/SamanthaWebsite",
  plugins: [react()] // Optional, as this is the default value
})