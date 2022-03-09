<template>
  <div>
    <h3>热卖商品</h3>
    <div class="hotgoods">
      <div v-for="(item, index) in hotGoods" :key="index" class="hotgoods-item">
        <a :href="item.goodsId">
          <img :src="item.image" alt="" /><br />
          <span class="span1">{{ item.name }}</span>
          <span>￥{{ item.mallPrice }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotGoodsView",
  props: {
    hotGoods: {
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
  font-size: 16px;
  text-align: center;
  height: 33px;
  line-height: 33px;
  color: #000;
}
.hotgoods {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: #fff;
  padding-bottom: 30px;
}
.hotgoods-item {
  flex: 1;
  font-size: 13px;
  text-align: center;
  width: 100%;
}
.hotgoods-item a {
  color: black;
}
.hotgoods-item img {
  width: 150px;
  height: 150px;
}
.hotgoods-item span {
  line-height: 25px;
}
.hotgoods-item .span1 {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 160px;
  padding-top: 10px;
}
</style>