import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prettyCssModules from 'vite-plugin-pretty-css-modules'
import mockSimple from 'vite-plugin-mock-simple'
import mockServer from './mockServer'
import macrosPlugin from 'vite-plugin-babel-macros'

export default defineConfig({
  plugins: [
    react(),
    prettyCssModules(),
    macrosPlugin(),
    mockSimple(mockServer),
  ],
  server: {
    host: true,
    port: 3000,
  },
})
