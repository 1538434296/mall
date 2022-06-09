<template>
  <div id="app">
    <keep-alive>
    <router-view/>
    </keep-alive>
    <main-tabbar  v-if="!$route.meta.showNav" />
  </div>
</template>

<script>
import MainTabbar from "components/content/mainTabbar/MainTabbar";
export default {
  name: "App",
  components: {
    MainTabbar,
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
