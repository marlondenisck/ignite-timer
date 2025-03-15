import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser', // Usa o Terser no lugar do esbuild
    terserOptions: {
      compress: {
        drop_console: true, // Remove todos os console.log
        drop_debugger: true
      },
      mangle: true // Renomeia variáveis para códigos mais curtos
    }
  }
})
