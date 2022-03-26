export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'مِصباح | لتوليد النصوص العشوائية باللغة العربية',
    htmlAttrs: {
      lang: 'ar',
      dir: 'rtl',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'مصباح هو أداة لتوليد النصوص العشوائية باللغة العربية لاستخدامها في قوالب التصميم. يمكنك التحكم في عدد الجمل وعدد الفقرات ونسخها بضغطة زر. يمكن اعتبار مصباح كـ Lorem Ipsum للغة العربية.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [{
      src: 'https://plausable.shehata.io/js/plausible.js',
      defer: true,
      "data-domain": "mesba7.com",
    }]

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
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: '/public/'
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:8000'
  },

  eslint: {
    emitWarning: true,
    failOnError: false
  },

  googleFonts: {
    base64: true,
    families: {
      'Aref+Ruqaa': true,
      'Almarai': true,
      'amiri': true,
    }
  },

  pwa: {
    meta: {
      ogHost: 'https://mesba7.com',
      ogImage: true,
    },
    manifest: {
      name: 'مِصباح لتوليد النصوص العشوائية',
      short_name: 'مِصباح',
      description: 'مصباح هو أداة لتوليد النصوص العشوائية باللغة العربية لاستخدامها في قوالب التصميم. يمكنك التحكم في عدد الجمل وعدد الفقرات ونسخها بضغطة زر. يمكن اعتبار مصباح كـ Lorem Ipsum للغة العربية.',
      background_color: '#ffffff',
      theme_color: '#000000',
      dir: 'rtl',
      lang: 'ar',
      useWebmanifestExtension: false,
      publicPath: '/public/'
    }
  },
  sitemap: {
    hostname: 'https://mesba7.com',
    gzip: true
  }
}
