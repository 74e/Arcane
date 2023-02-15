<script>
  export default {
    props: {
      route: {
        type: String,
        default: null
      }
    }
  };
</script>

<template>
  <div class="bg-image-fixed">
    <span v-if="route !== null">{{ route }}</span>
  </div>
</template>

<style scoped lang="scss">
  .bg-image-fixed {
    background: url('../../assets/news-bg-img.jpeg') fixed;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-repeat: no;
    height: 280px;
    width: 100%;
    min-width: 925px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      display: block;
      font-family: 'Rubik Mono One', sans-serif;
      color: rgba(255, 255, 255, 0.74);
      font-size: 70px;
      word-spacing: -30px;
      position: relative;
    }

    span:after {
      content: '';
      display: block;
      background-color: rgba(255, 255, 255, 0.74);
      height: 6px;
      width: 620px;
      position: absolute;
      top: 90px;
    }
  }
</style>
