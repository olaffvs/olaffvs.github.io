<template>
  <div id="app">
    <app-header></app-header>
    <app-body></app-body>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Body from './components/Body.vue';
export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-body': Body
  }
}
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Ubuntu');

  #app {
    font-family: 'Ubuntu', sans-serif;
    padding: 20px;
  }
</style>
