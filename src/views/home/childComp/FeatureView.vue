<template>
  <div>
    <h3>商品推荐</h3>
    <div class="feature">
      <div v-for="(item, index) in recommend" :key="index" class="feature-item">
        <a :href="item.goodsId">
          <img :src="item.image" alt="" />
          <span>{{ item.goodsName }}</span
          ><br />
          <span>￥{{ item.mallPrice }}(￥{{ item.price }})</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureView",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
h3 {
  background: #fff;
  color: var(--color-high-text);
  font-size: 16px;
  height: 28px;
  line-height: 28px;
  padding-left: 10px;
}
.feature {
  display: flex;
}
.feature-item {
  flex: 1;
  background: #fff;
  font-size: 13px;
  text-align: center;
  margin: 1px;
}
.feature-item a {
  color: black;
}
.feature-item img {
  width: 100%;
}
</style>