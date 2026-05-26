import { build } from 'vite'
import react from '@vitejs/plugin-react'

await build({
  configFile: false,
  plugins: [react()],
  publicDir: false,
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    outDir: 'public/tldraw-dist',
    emptyOutDir: true,
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      input: 'tldraw-entry.jsx',
      output: {
        entryFileNames: 'tldraw.js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name][extname]',
        inlineDynamicImports: true,
      },
    },
  },
})

console.log('\n[ok] tldraw bundle written to public/tldraw-dist/')
