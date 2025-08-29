// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "~/public/style.css",
    "bootstrap-icons/font/bootstrap-icons.css",
  ],
  plugins: [{ src: "~/plugins/bootstrap.client.ts", mode: "client" }],
  modules: ["@nuxtjs/i18n", "@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
  // @ts-ignore
  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
        iso: "en-US",
        file: "en.json",
      },
      {
        code: "vi",
        name: "Tiếng Việt",
        iso: "vi-VN",
        file: "vi.json",
      },
    ],
    langDir: "locales/",
    defaultLocale: "en",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
          tagPosition: "bodyClose",
        },
      ],
    },
  },
});
