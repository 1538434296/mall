<template>
  <div id="category">
    <nav-bar>
      <div slot="center">类别列表</div>
    </nav-bar>
    <main-sidebar></main-sidebar>
    <keep-alive>
      <router-view class="layot"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import MainSidebar from "components/content//mainSidebar/MainSidebar";

export default {
  name: "Category",
  components: {
    NavBar,
    MainSidebar,
  },
  created() {
    
  },
};
</script>

<style scoped>
.layot {
  position: absolute;
  right: 0;
  width: 77%;
  top: 44px;
}
</style>
