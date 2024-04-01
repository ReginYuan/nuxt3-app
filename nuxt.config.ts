// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
<<<<<<< HEAD
    css: [
        'assets/global.scss'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "~/assets/_variables.scss";',
                }
            }
        },
        optimizeDeps: {
            include:
                process.env.NODE_ENV === 'development'
                    ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
                    : []
        }
    },
    build: {
        transpile:
            process.env.NODE_ENV === 'production'
                ? [
                    'naive-ui',
                    'vueuc',
                    '@css-render/vue3-ssr',
                    '@juggle/resize-observer'
                ]
                : ['@juggle/resize-observer']
    },
    modules: [
        '@nuxtjs/tailwindcss',
        "@huntersofbook/naive-ui-nuxt",
        '@unocss/nuxt',
    ]
})
=======
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
>>>>>>> ae1e9337e271eda2780ae06a1ba9201760cb64d4
