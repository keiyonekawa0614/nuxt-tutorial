# How to Create Project 
```bash
$ create nuxt project
# yarn create nuxt-app nuxt-tutorial

succes Installed "create-nuxt-app@2.1.1" with binaries:
      - create-nuxt-app
[######################################################]
? Project name nuxt-tutorial
? Project description Nuxt.js project tutorial
? Use a custom server framework none
? Use a custom UI framework bulma
? Choose rendering mode Universal
? Use axios module yes
? Use eslint no
? Use prettier no
? Author name kei yonekawa
? Choose a package manager yarn

....
success Saved lockfile

    To get started:
    
      cd nuxt-tutorial
      yarn run dev
      
    To build & start for production:
     
      cd nuxt-tutorial
      yarn run build
      yarn start
      
      Done
```

# Qiitarch

Nuxtのチュートリアルとして「Qiitarch(キーターチ)」を開発。<br>
Qiita Searchを略して「Qiitarch」。その名の通り、Qiitaの最新記事をキーワード検索できる。<br>
使用した技術は、Nuxt2.0、bulma、Firebase。

https://daryl-f5622.firebaseapp.com/

[![Image from Gyazo](https://i.gyazo.com/6587ce5166550752de1a4ed733ce14bd.png)](https://gyazo.com/6587ce5166550752de1a4ed733ce14bd)

Free Bulma Templates使用<br>
https://dansup.github.io/bulma-templates/

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
