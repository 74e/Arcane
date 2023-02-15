<script>
  export default {
    computed: {
      computedContent() {
        return this.articlePost.article_content.replace(
          /<img[^>]+>|<iframe.+?<\/iframe>/g,
          ''
        );
      }
    },
    data() {
      return {};
    },
    props: {
      articlePost: {
        type: Object,
        default: null
      }
    }
  };
</script>

<template>
  <div v-if="articlePost == null" class="select">
    <h2>
      Select an article <br />
      to the right
    </h2>
  </div>
  <div v-else class="article-container">
    <h2 class="article-headline">{{ articlePost.title }}</h2>
    <div class="line bg-secondary" />
    <div class="main-img-container">
      <img :src="articlePost.main_image" :alt="articlePost.title" />
    </div>
    <div class="article-content" v-html="computedContent" />
  </div>
</template>

<style scoped lang="scss">
  .select {
    width: 40%;
    height: 200px;
    border-radius: 16px;
    margin: auto;
    background-color: #424242;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 150px;
  }
  .article-container {
    font-family: 'Roboto', sans-serif;
    padding: 0 10px 0 10px;
    color: #424242;
    .article-headline {
      font-size: 29px;
      padding: 0 30px 0 30px;
    }

    .line {
      height: 3px;
      width: 90%;
      margin-left: 25px;
      margin-bottom: 15px;
    }

    .main-img-container {
      width: 80%;
      margin: auto;
      img {
        width: 100%;
      }
    }

    .article-content {
      padding: 0 50px 0 50px;
    }
  }
</style>
