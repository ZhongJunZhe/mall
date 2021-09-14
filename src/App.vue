<template>
  <div id="app">
    <router-view></router-view>
    <MainTabbar></MainTabbar>
  </div>
</template>
<script>
import MainTabbar from "@/components/content/MainTabbar/MainTabbar.vue"

export default({
  components: {
    MainTabbar
  }  
})
</script>

<style>
  @import url("assets/css/base.css");
</style>
