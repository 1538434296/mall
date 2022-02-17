<template>
  <div id="app">
    <!-- <keep-alive> -->
    <router-view />
    <main-tabbar />
    <!-- </keep-alive> -->
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
