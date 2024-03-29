// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["assets/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/_variables.scss";',
        },
      },
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@huntersofbook/naive-ui-nuxt"],
  devServer: {
    port: 8080,
  },
});
