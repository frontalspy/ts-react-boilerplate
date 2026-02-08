/// <reference types="vitest/config" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: ["./src/app/setup-test.ts"],
    include: ["**/*.spec.tsx"],
    globals: true,
    environment: "jsdom",
  },
});
