<template>
  <div>
    <div class="recommend">
      <div
        v-for="(item, index) in category"
        :key="index"
        class="recommend-item"
      >
        <a href="">
          <img :src="item.image" alt="" />
          <div>{{ item.mallCategoryName }}</div>
        </a>
      </div>
    </div>
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
  margin: 5px 5px 10px;

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
</style>