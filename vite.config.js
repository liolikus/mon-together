import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  },
  define: {
    'process.env.VITE_MULTISYNQ_API_KEY': JSON.stringify(process.env.VITE_MULTISYNQ_API_KEY),
    'process.env.VITE_MULTISYNQ_APP_ID': JSON.stringify(process.env.VITE_MULTISYNQ_APP_ID),
    'process.env.VITE_SESSION_NAME': JSON.stringify(process.env.VITE_SESSION_NAME),
    'process.env.VITE_SESSION_PASSWORD': JSON.stringify(process.env.VITE_SESSION_PASSWORD)
  },
  server: {
    port: 3000,
    open: true
  }
})
