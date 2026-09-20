import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],

  build: {
    // keep the .d.ts files emitted by `tsc -b` (which runs before this build)
    emptyOutDir: false,

    lib: {
      entry: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
      formats: ["es"],
      fileName: "index",
    },

    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
