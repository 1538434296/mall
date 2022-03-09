<template>
  <div>
    <!-- floor1 -->
    <h3>{{ floorName.floor1 }}</h3>
    <div class="floor">
      <div
        v-for="(item, index) in floorItem.floor1"
        :key="index"
        class="floor-item"
      >
        <a :href="item.goodsId">
          <img :src="item.image" alt="" />
        </a>
      </div>
    </div>
    <!-- floor2 -->
    <h3>{{ floorName.floor2 }}</h3>
    <div class="floor">
      <div
        v-for="(item, index) in floorItem.floor2"
        :key="index"
        class="floor-item"
      >
        <a :href="item.goodsId">
          <img :src="item.image" alt="" />
        </a>
      </div>
    </div>
    <!-- floor3 -->
    <h3>{{ floorName.floor3 }}</h3>
    <div class="floor">
      <div
        v-for="(item, index) in floorItem.floor3"
        :key="index"
        class="floor-item"
      >
        <a :href="item.goodsId">
          <img :src="item.image" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FloorView",
  props: {
    floorName: {
      type: Object,
      default() {
        return {};
      },
    },
    floorItem: {
      type: Object,
      default() {
        return {};
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
.floor {
  display: flex;
  width: 100%;
  height: 292px;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: hidden;
}
.floor-item {
  flex: 1;
  height: 86.9px;
  width: 50%;
  text-align: center;
  font-size: 0;
}

.floor-item:nth-child(1) {
  height: 173.8px;
  flex-grow: 2;
}
.floor-item img {
  /* vertical-align: middle; */
  /* display: block; */
  width: 100%;
}
</style>