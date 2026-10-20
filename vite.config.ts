import { defineConfig } from "vite";

// A single static page: Vite only fingerprints the stylesheet and copies public/.
export default defineConfig({
  server: { port: 8080 },
  build: { outDir: "dist", assetsInlineLimit: 0 },
});
