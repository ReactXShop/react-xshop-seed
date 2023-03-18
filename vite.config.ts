import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import Checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Checker({
      typescript: true,
      // overlay: true,
      // eslint: {
      //   files: "./src",
      //   extensions: [".ts", ".tsx"],
      // },
    }),
  ],
});
