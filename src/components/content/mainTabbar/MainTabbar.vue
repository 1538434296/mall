<template>
  <div id="main-tabbar">
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/首页.png" alt="首页">
        <img slot="item-icon-active" src="~assets/img/tabbar/首页_active.png" alt="首页">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/分类.png" alt="分类">
        <img slot="item-icon-active" src="~assets/img/tabbar/分类_active.png" alt="分类">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/购物车.png" alt="购物车">
        <img slot="item-icon-active" src="~assets/img/tabbar/购物车_active.png" alt="购物车">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/用户.png" alt="用户">
        <img slot="item-icon-active" src="~assets/img/tabbar/用户_active.png" alt="用户">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>

import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabbar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
