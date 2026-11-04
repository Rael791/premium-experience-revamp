import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  // Nur für den automatischen Test (vite preview), ohne Einfluss auf die Live-Seite
  preview: {
    allowedHosts: ["raeldata.ma", "raeldata.de"],
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
