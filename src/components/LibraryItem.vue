<script>
  export default {
    props: {
      game: {
        type: Object,
        default: null
      }
    }
  };
</script>

<template>
  <div class="grid-border">
    <div class="game-item-container">
      <div class="image-container">
        <img :src="game.thumbnail" :alt="game.title" />
      </div>
      <div class="line bg-secondary">
        <h3>{{ game.title }}</h3>
      </div>
      <div class="desc">
        <p>{{ game.short_description }}</p>
      </div>
      <div class="info-container">
        <p class="item1">
          Developer: <span class="pop-text">{{ game.developer }}</span>
        </p>
        <p class="item2">
          Publisher: <span class="pop-text">{{ game.publisher }}</span>
        </p>
        <p class="item3">
          Genre: <span class="pop-text">{{ game.genre }}</span>
        </p>
        <p class="item4">
          Release: <span class="pop-text">{{ game.release_date }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .game-item-container {
    background-color: #ffffff;
    color: #424242;
    border-radius: 16px;
    width: 300px;
    padding-bottom: 8px;
    font-family: 'Roboto Condensed', sans-serif;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    .image-container {
      width: 100%;

      img {
        border-radius: 16px 16px 0 0;
        width: 100%;
      }
    }

    .line {
      width: 100%;
      padding: 4px 0;

      h3 {
        text-align: center;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        text-align: center;
        color: white;
      }
    }

    .desc {
      padding: 0 12px 0 12px;
      background-color: #f6f6f6;
      margin: 10px 10px 10px 10px;
      padding: 6px 12px;
      border-radius: 4px;

      p {
        line-height: 19px;
        margin: 0;
      }
    }

    .info-container {
      display: grid;
      padding: 0 16px;
      font-size: 11px;
      font-family: 'Roboto Condensed', sans-serif;
      color: #424242a7;
      height: 40px;

      p {
        margin: 0;
        .pop-text {
          color: #424242;
        }
      }

      .item1 {
        grid-column: 1;
        grid-row: 1;
      }

      .item2 {
        grid-column: 1;
        grid-row: 2;
      }

      .item3 {
        grid-column: 2;
        grid-row: 1;
      }

      .item4 {
        grid-column: 2;
        grid-row: 2;
      }
    }
  }
</style>
