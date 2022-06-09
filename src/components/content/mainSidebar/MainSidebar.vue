<template>
  <div id="main-sidebar">
    <side-bar>
      <side-bar-item path="c1"
        ><span slot="item-text">中外古酒</span></side-bar-item
      >
      <side-bar-item path="c2"
        ><span slot="item-text">新鲜水果</span></side-bar-item
      >
      <side-bar-item path="c3"
        ><span slot="item-text">营养奶品</span></side-bar-item
      >
      <side-bar-item path="c4"
        ><span slot="item-text">个人护理</span></side-bar-item
      >
      <side-bar-item path="c5"
        ><span slot="item-text">食品饮料</span></side-bar-item
      >
    </side-bar>
  </div>
</template>

<script>
import SideBar from "components/common/sidebar/SideBar.vue";
import SideBarItem from "components/common/sidebar/SideBarItem.vue";
export default {
  name: "MainSidebar",
  components: {
    SideBar,
    SideBarItem,
  },
};
</script>

<style>
#main-sidebar {
  position: fixed;
  width:  23%;
  height: 100%;
  overflow: hidden;
}
</style>