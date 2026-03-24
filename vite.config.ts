// vite.config.ts
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "NoticeWidget",
      fileName: "notice-widget",
      formats: ["umd", "es"],
    },
  },
  server: {
    host: "0.0.0.0",
    open: true,
  },
});
