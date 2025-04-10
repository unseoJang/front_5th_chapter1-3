import { defineConfig as defineTestConfig, mergeConfig } from "vitest/config";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// GitHub Pages용 base 설정
const base =
  import.meta.env.MODE === "production" ? "/front_5th_chapter1-3/" : "/";

export default mergeConfig(
  defineConfig({
    base, // ✅ 여기에 base 넣기
    plugins: [react()],
  }),
  defineTestConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTests.ts",
      coverage: {
        reportsDirectory: "./.coverage",
        reporter: ["lcov", "json", "json-summary"],
      },
    },
  }),
);
