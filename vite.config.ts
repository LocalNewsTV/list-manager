import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      strategies: "generateSW",
      registerType: "autoUpdate",
      injectRegister: 'auto',
      includeAssets: ["**/*"],
      workbox: {
        globPatterns: ["**/*"],
        globFollow: true,
        cleanupOutdatedCaches: true,
        sourcemap: true,
      },
      manifest: {
        name: "List Manager",
        short_name: "List Manager",
        description: "Keeping all your lists in one place",
        theme_color: "#FFF",
        start_url: "/",
      
        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
})
