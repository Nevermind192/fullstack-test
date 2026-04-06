// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  devServer: { port: 5173 },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/fonts", "@ant-design-vue/nuxt", "@pinia/nuxt"],
});
