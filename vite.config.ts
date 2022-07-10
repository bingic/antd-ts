import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3030,
    host: "0.0.0.0", // ← 新增内容 开启Network: ←
    hmr: { overlay: true }, // ← #覆盖内容 if (false) {#清除缓存并强制重新加载，以确保typescript是用更新的配置值编译的。}←
  },
  preview: {
    port: 8080,
  },
});
