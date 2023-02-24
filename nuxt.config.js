import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'Dockeep',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {hid: `description`, name: 'description', content: 'Compra de forma segura boletos para ver tu artista favorito a fanáticos que no podrán utilizar sus entradas'},
        {hid: `keywords`, name: 'keywords', keywords: 'Compra de boletos, boletos, artistas, entradas, entradas para conciertos, conciertos en colombia, venta de boletas, ventas, tickets'}
      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', href:'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap', as:'font', crossorigin:"anonymous", type:"font/woff2"},
      ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss',
  ],
  styleResources: {
    scss: [
      './assets/css/variables.scss',
      './assets/css/mixins.scss',
      './assets/fonts.scss'
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~plugins/validate.js",
    "~plugins/filters.js",
    { src: '~/plugins/nodemailer.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
    '@nuxtjs/device'
  ],

  moment: {
    defaultLocale: 'es',
    locales: ['es']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-mobile',
    'vue-currency-filter/nuxt',
  ],

  currencyFilter: [
    { // default name 'currency'
      symbol: '$',
      thousandsSeparator: ',',
      fractionCount: 2,
      fractionSeparator: '.',
      symbolPosition: 'front',
      symbolSpacing: true,
      avoidEmptyDecimals: '',
    }
  ],


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://127.0.0.1:3000'//'http://18.217.97.172:1337',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
      customVariables: ['~/assets/variables.scss'],
      theme: {
        themes: {
          dark: {
            
              primary: '#1976D2',
              secondary: '#424242',
              accent: '#82B1FF',
              error: '#FF5252',
              info: '#2196F3',
              success: '#4CAF50',
              warning: '#FFC107',
            
          },
        },
      },
    },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules"],
    css: [
      '@/assets/css/main.css'
    ]
  },

  server: {
    host: '0.0.0.0',
    port: 80
  }
}
