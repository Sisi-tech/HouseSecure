import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dotenv from 'dotenv'

dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        content: [
          "./src/**/*.{html,js,jsx,ts,tsx}", // Paths to your files
        ],
        safelist: [
          'bg-gray-200', 
          'text-center',
          'flex',
          'justify-center',
          'items-center',
        ],
      }
    }),
    tailwindcss(),
  ],
})
