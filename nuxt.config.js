export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'مِصباح',
    htmlAttrs: {
      lang: 'ar',
      dir: 'rtl',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'توليد النعوص العربية' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    // '@nuxtjs/dotenv',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  generate: {
    subFolders: false
  },
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:5000'
  },

  pwa: {
    manifest: {
      name: 'Mesba7',
      description: 'arabic generator',
      lang: 'ar',
      dir: 'rtl',
      background_color: "",
      theme_color: "",
    }
  },

  eslint: {
    emitWarning: true,
    failOnError: false
  },

  googleFonts: {
    base64: true,
    families: {
      'Aref+Ruqaa': true,
      'Almarai': true
    }
  }
}
