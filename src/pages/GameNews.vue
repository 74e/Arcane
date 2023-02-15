<script>
  import NewsItem from '../components/NewsItem.vue';
  import ArticlePost from '../components/ArticlePost.vue';
  import backgroundImg from '../components/BackgroundImg.vue';

  export default {
    components: {
      NewsItem,
      ArticlePost,
      backgroundImg
    },
    data() {
      return {
        articlePost: null
      };
    },
    methods: {
      getPost(post) {
        console.log(post);
        this.articlePost = post;
      }
    }
  };
</script>

<template>
  <backgroundImg :route="'ARCANE ' + $route.params.currentPage" />
  <div class="container bg-white pt-3 pb-3">
    <div class="row row-page">
      <div class="col-8 p-0">
        <div class="news-article-container">
          <ArticlePost :article-post="articlePost" />
        </div>
      </div>
      <div class="col-4 p-0">
        <div class="news-item-container">
          <h2>Latest News</h2>
          <div class="line bg-secondary" />
          <NewsItem @send-post="getPost" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .news-article-container {
    min-height: calc(100vh - 58px);
  }

  .news-item-container {
    color: #424242;
    border-left: 2.5px solid #ededed;
    min-height: calc(100vh - 58px);
    padding: 0 12px 0 12px;

    h2 {
      font-size: 32px;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      padding-left: 8px;
      margin: 0;
    }

    .line {
      height: 3px;
      width: 100%;
      margin-bottom: 15px;
    }
  }
</style>
