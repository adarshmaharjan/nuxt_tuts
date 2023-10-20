import type { NuxtConfig } from "@nuxt/types";
const config: NuxtConfig = {
  modules: ["@nuxt/content", "@pinia/nuxt"],

  content: {},
  alias: {
    // * way to specify path
    // "@": resolve(__dirname, "/"),
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/main.scss"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  buildModules: ["@nuxt/typescript-build"],
  typescript: {
    typeCheck: {
      eslint: {
        files: "./**/*.{ts,js,vue}",
      },
    },
  },
  // * For making ssr all true
  // ssr: true
  routeRules: {
    "/custom/**": { static: true },
  },

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  sourcemap: {
    server: true,
    client: true,
  },
};

export default config;
