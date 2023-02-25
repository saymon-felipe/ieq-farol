<template>
  <div id="app">
    <vue-scroll>
      <router-view path="$router.key"></router-view>
    </vue-scroll>
  </div>
</template>
<script>
import './css/global.css';

export default {
  name: 'App'
}
</script>

<style>
#app {
  height: 100vh;
}
</style>
