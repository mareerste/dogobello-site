import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/dogobello-site/", // 👈 This is mandatory for GitHub Pages
  plugins: [react()],
});
