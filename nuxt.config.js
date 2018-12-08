const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
  title: 'Qiitarch',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Qiitaの最新記事を検索できるWebサービス。' },
      { property: 'og:locale', content: 'ja_JP' },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Qiitarch(キーターチ)' },
      { hid: 'og:title', property: 'og:title', content: 'Qiitarch | Qiitaの最新記事を検索できるWebサービス。' },
      { hid: 'og:description', property: 'og:description', content: 'Qiita Searchを略してQiitarch。その名の通り、Qiitaの最新記事を検索できるWebサービス。' },
      { hid: 'og:url', property: 'og:url', content: 'https://daryl-f5622.firebaseapp.com/' },
      { hid: 'og:image', property: 'og:image', content: 'https://daryl-f5622.firebaseapp.com/ogp.png' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
    ],
    // link: [
    //   { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    // ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
