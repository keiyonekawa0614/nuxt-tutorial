<template>
  <div class="column is-one-third">
    <div class="card large round">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-96x96">
              <img :src="article.user.profile_image_url" alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <a :href="article.url"><p class="title is-4 no-padding">{{ article.title}}</p></a>
            <p class="subtitle is-6"> {{ article.user.id }} {{ article.updated_at | updatedDate}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  props: ['article'],
  filters: {
    updatedDate(timestamp) {
      return moment(timestamp).format('YYYY/MM/DD HH:mm');
    },
  },
}
</script>
<style>
  .media-content {
    overflow: hidden;
  }
  .title.no-padding {
    margin-bottom: 0 !important;
  }
</style>
