import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { patchCssModules, cssModules } from "vite-css-modules";

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  plugins: [react(), patchCssModules({ generateSourceTypes: true })],
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
});
