<template>
  <div id="app">
    <router-view path="$router.key" />
  </div>
</template>
<script>
import "./css/global.css";
import './assets/fontawesome/css/all.css';
import 'animate.css';

export default {
  name: 'App'
}
</script>

<style>
#app {
  min-height: 100vh;
}
</style>
