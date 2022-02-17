<template>
  <div>
    <div class="recommend">
      <div v-for="item in category" :key="item" class="recommend-item">
        <a href="">
          <img :src="item.image" alt="" />
          <div>{{ item.mallCategoryName }}</div>
        </a>
      </div>
    </div>
    <div class="div1"></div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props: {
    category: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend {
  display: flex;
  background-color: #fff;
  padding: 8px 0;
  margin: 5px;

  border-radius: 8px;
}
.recommend-item {
  flex: 1;
  width: 100%;
  text-align: center;
  font-size: 12px;
}
.recommend-item img {
  width: 60px;
  height: 60px;
}
.div1 {
  width: 100%;
  height: 20px;
}
</style>