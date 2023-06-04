import { defineConfig } from "vite";
import { splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (
            id.includes("@babylonjs/core/Engines/engine") ||
            id.includes("@babylonjs/core/scene")
          ) {
            return "BabylonCoreScene/";
          }
        },
      },
    },
  },
});
