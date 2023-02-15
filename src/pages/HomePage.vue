<script>
  import BackgroundImg from '../components/BackgroundImg.vue';
  export default {
    components: {
      BackgroundImg
    }
  };
</script>

<template>
  <backgroundImg />
  <div class="container">
    <h1>Welcome to Arcane</h1>
    <div class="line bg-secondary" />
    <div class="fav-container">
      <h2 class="text-muted">
        Favoriting games feature <br />
        coming soon...
      </h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .container {
    min-height: 100vh;
    padding-top: 15px;
    h1 {
      text-align: center;
    }

    .line {
      height: 3px;
      width: 100%;
      margin-bottom: 15px;
    }

    .fav-container {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      background-color: rgb(234, 234, 234);
      height: 600px;
      width: 800px;
      border-radius: 12px;
    }
  }
</style>
