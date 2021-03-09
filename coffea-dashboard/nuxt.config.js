import colors from 'vuetify/lib/util/colors'


export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s ',
    title: 'Coffea Dashboard',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'logo-circulo.svg' }, 
      {
        rel: 'stylesheet', 
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
      },
      {
        rel: 'stylesheet', 
        href: 'https://cdn.rawgit.com/h-ibaldo/Raleway_Fixed_Numerals/master/css/rawline.css',
      }

    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
 

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

 plugins: [ '~/plugins/firebase.js'],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  buildModules: ['@nuxtjs/vuetify'],
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      //ligth: true,
      options: {customProperties: true},
      themes: {
        light: {
          primary: '#F8744E', //naranja
          secondary: '#184042', //azul 
          accent: '#112D2E', //marrón
          info: '#FDF7F7', //blanco
          boton: '#EFEFEF',
          red: '#FF0000',
          warning: '#126367',
          error: '#63A8AB',
          success: colors.green.accent3,
          azul1: '#3F696B',
          azul2: '#294D4F'

          
        }
      }
    }
  },


  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  
  }

  
}