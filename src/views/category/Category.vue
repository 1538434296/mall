<template>
  <div id="category">
    <nav-bar>
      <div slot="center">类别列表</div>
    </nav-bar>
    <div class="cate-bar">
      <span>中外名酒</span>
      <span>新鲜水果</span>
      <span>营养奶品</span>
      <span>个人护理</span>
      <span>食品饮料</span>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  components: { NavBar },
  name: "Category",
  create() {
    
  }
};
</script>

<style scoped>
.cate-bar {
  background-color: rgb(210, 220, 252);
  width: 23%;
  display: flex;
  flex-direction: column;
}
.cate-bar span {
  height: 40px;
  line-height: 40px;
  text-align: center;
}
</style>
