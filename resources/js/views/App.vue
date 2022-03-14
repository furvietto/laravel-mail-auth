<template>
  <div>
      <Header></Header>
      <router-view></router-view>
  </div>
</template>

<script>
import Main from "../components/Main.vue";
import Header from "../components/Header.vue";

export default {
    name:"app",
    components: {
        Main,
        Header
    }
}
</script>

<style>

</style>