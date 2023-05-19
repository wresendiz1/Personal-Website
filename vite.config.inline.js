import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  base: "./",
  build: {
    minify: true,
  },
  server: {
    open: true,
  },
  define: {
    "process.env": process.env,
  },
});
