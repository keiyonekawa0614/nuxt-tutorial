<template>
  <div>
    <div class="container">
      <div id="flow">
        <span class="flow-1"></span>
        <span class="flow-2"></span>
        <span class="flow-3"></span>
      </div>
      <div class="section">
        <div class="box">
          <div class="field has-addons">
            <div class="control is-expanded">
              <input v-model="keyword" class="input has-text-centered" type="search" placeholder="» » » » » » keyword « « « « « «">
            </div>
            <div class="control">
              <a @click="search" class="button is-info">Search</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row columns">
      <qiita-article v-for="(article, index) in articleList1" :key="index" :article="article" />
    </div>
    <div class="row columns">
      <qiita-article v-for="(article, index) in articleList2" :key="index" :article="article" />
    </div>
    <div class="row columns">
      <qiita-article v-for="(article, index) in articleList3" :key="index" :article="article" />
    </div>
    <div class="row columns">
      <qiita-article v-for="(article, index) in articleList4" :key="index" :article="article" />
    </div>
    <div class="row columns">
      <qiita-article v-for="(article, index) in articleList5" :key="index" :article="article" />
    </div>
    <div class="row columns">
      <qiita-article v-for="(article, index) in articleList6" :key="index" :article="article" />
    </div>
    <div class="row columns">
      <qiita-article v-for="(article, index) in articleList7" :key="index" :article="article" />
    </div>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>Created</strong> by kei yonekawa .<br>
            twitter <a href="https://twitter.com/keiuwk0614">@keiuwk0614</a> <br>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';
import QiitaArticle from '~/components/QiitaArticle.vue';

// qiita api URL
const BASE_URL = 'https://qiita.com/api/v2/';

export default {
  data() {
    return {
      articleList1: [],
      articleList2: [],
      articleList3: [],
      articleList4: [],
      articleList5: [],
      articleList6: [],
      articleList7: [],
      keyword: '',
    };
  },
  components: {
    QiitaArticle,
  },
  methods: {
    search() {

      let params = {};
      if (this.keyword !== null && this.keyword !== '') {
        params =  {
            page: 1,
            per_page: 21,
            query: this.keyword
        }
      } else {
        params =  {
          page: 1,
          per_page: 21,
        }
      }

      axios.get(BASE_URL + 'items', {params: params})
        .then(response => {
        this.articleList1 = response.data.slice(0, 3);
        this.articleList2 = response.data.slice(3, 6);
        this.articleList3 = response.data.slice(6, 9);
        this.articleList4 = response.data.slice(9, 12);
        this.articleList5 = response.data.slice(12, 15);
        this.articleList6 = response.data.slice(15, 18);
        this.articleList7 = response.data.slice(18, 21);
      }).catch(e => {
        console.log('error: ', e);
      })
    }
  },
  async asyncData(context) {
    try {
      const response = await axios.get(BASE_URL + 'items', {
        params: {
          page: 1,
          per_page: 21,
        }
      });
      return {
        articleList1: response.data.slice(0, 3),
        articleList2: response.data.slice(3, 6),
        articleList3: response.data.slice(6, 9),
        articleList4: response.data.slice(9, 12),
        articleList5: response.data.slice(12, 15),
        articleList6: response.data.slice(15, 18),
        articleList7: response.data.slice(18, 21),
      };
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
<style>
  body {
    background: #041221;
  }
  #flow span {
    display: block;
    width: 200vw;
    height: 200vw;
    position: absolute;
    top: -180vw;
    left: -50vw;
    border-radius: 90vw;
    opacity: 0.6;
  }
  .flow-1 {
    background: #3281ff;
    -webkit-animation: rotating 20s linear infinite;
    -moz-animation: rotating 20s linear infinite;
    -ms-animation: rotating 20s linear infinite;
    -o-animation: rotating 20s linear infinite;
    animation: rotating 20s linear infinite;
  }
  .flow-2 {
    background: #f442ee;
    position: absolute;
    -webkit-animation: rotating 15s linear infinite;
    -moz-animation: rotating 15s linear infinite;
    -ms-animation: rotating 15s linear infinite;
    -o-animation: rotating 15s linear infinite;
    animation: rotating 15s linear infinite;
  }
  .flow-3 {
    background: #42eef4;
    position: absolute;
    -webkit-animation: rotating 7s linear infinite;
    -moz-animation: rotating 7s linear infinite;
    -ms-animation: rotating 7s linear infinite;
    -o-animation: rotating 7s linear infinite;
    animation: rotating 7s linear infinite;
  }
  @-webkit-keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  .rotating {
    -webkit-animation: rotating 2s linear infinite;
    -moz-animation: rotating 2s linear infinite;
    -ms-animation: rotating 2s linear infinite;
    -o-animation: rotating 2s linear infinite;
    animation: rotating 2s linear infinite;
  }
  .footer{
    background-color: #222831;
    color: lemonchiffon;
  }
  .footer p, strong
  {color: lemonchiffon}
  .footer a:hover
  {color: crimson;}
  .fa
  {color: lemonchiffon;
    margin: 10px}
</style>
