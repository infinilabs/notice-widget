import { defineConfig } from "vite";

export default defineConfig({
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "development",
    ),
  },
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
