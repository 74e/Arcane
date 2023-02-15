<script>
  import Navbar from './components/NavBar.vue';
  import Footerbar from './components/FooterBar.vue';

  export default {
    components: {
      Navbar,
      Footerbar
    }
  };
</script>

<template>
  <Navbar />
  <RouterView />
  <Footerbar />
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;500&family=Rubik+Mono+One&display=swap');
  body {
    margin-top: 74px;
    height: 1000px;
    background-color: #f6f6f6;
  }
</style>
