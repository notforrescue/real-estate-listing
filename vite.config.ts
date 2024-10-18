import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prettyCssModules from 'vite-plugin-pretty-css-modules'
import mockSimple, { MockHandler } from 'vite-plugin-mock-simple'
import mockServer from './src/mockServer/mockServer'
import macrosPlugin from 'vite-plugin-babel-macros'

export default defineConfig({
  plugins: [
    react(),
    prettyCssModules(),
    macrosPlugin(),
    mockSimple(mockServer),
  ],
  server: {
    host: '127.0.0.1',
    port: 3000,
  },
})
