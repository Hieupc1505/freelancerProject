/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "~": path.resolve(__dirname, "./src/"),
            "~common": path.resolve(__dirname, "./src/common/"),
            "~components": path.resolve(__dirname, "./src/components/"),
            "~pages": path.resolve(__dirname, "./src/pages/"),
        },
    },
});
