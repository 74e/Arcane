<script>
  export default {
    created() {
      this.$store.dispatch('getNews');
    },
    computed: {
      news() {
        if (this.$store.state.newsData !== null) {
          if (this.$store.state.newsData.length > this.displayedItems) {
            return this.$store.state.newsData.slice(0, this.displayedItems);
          }
          return this.$store.state.newsData;
        }
        return null;
      }
    },
    data() {
      return {
        displayedItems: 5
      };
    },
    emits: ['send-post'],
    methods: {
      load() {
        this.displayedItems += this.displayedItems;
      },
      scrollToTop() {
        window.scrollTo(0, 0);
      },
      emitPost(id) {
        this.$emit('send-post', id);
      }
    }
  };
</script>

<template>
  <div v-if="$store.state.newsData == null">
    <span>fancy loading animation here...</span>
  </div>
  <div v-else class="give-flex">
    <div
      v-for="article in news"
      :key="article.id"
      @click="emitPost(article)"
      class="item-container"
    >
      <div class="img-container">
        <img :src="article.thumbnail" :alt="article.title" />
      </div>
      <div class="info-container">
        <h4>{{ article.title }}</h4>
        <span>{{ article.short_description }}</span>
      </div>
    </div>
    <button
      class="show-btn"
      v-if="$store.state.newsData.length >= displayedItems"
      @click="load()"
    >
      <span>Show more</span>
    </button>
    <button class="top-btn" v-else @click="scrollToTop()">
      <span> Back to top</span>
    </button>
  </div>
</template>

<style scoped lang="scss">
  .give-flex {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .item-container {
    font-family: 'Roboto Condensed', sans-serif;
    display: flex;
    width: 100%;
    align-items: center;
    .img-container {
      height: 125px;
      img {
        border-radius: 8px 4px 4px 8px;
        height: 100%;
      }
    }

    .info-container {
      min-height: 125px;
      padding-left: 10px;
      margin-left: 10px;
      border-left: 3px solid #31dabb;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h4 {
        font-weight: bold;
        font-size: 19px;
        line-height: 23px;
        margin-bottom: 4px;
      }

      span {
        display: block;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
        color: #898989;
      }
    }
  }

  .show-btn {
    font-family: 'Roboto', sans-serif;
    width: 100px;
    padding: 5px;
    border: none;
    border-radius: 4px;
    background-color: #212529;
    color: white;
    margin: auto;
  }

  .top-btn {
    margin: auto;
    border: none;
    background-color: transparent;
    font-family: 'Roboto', sans-serif;
    text-decoration: underline;
  }
</style>
