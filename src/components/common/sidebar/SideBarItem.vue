<template>
  <div class="side-bar-item" @click="itemClick" :style="activeStyle">
    <span><slot name="item-text"></slot></span>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
  },
  computed: {
    activeStyle() {
      return this.$route.path.indexOf(this.path) !== -1
        ? { backgroundColor: "#fff" }
        : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style scoped>
.side-bar-item {
  background-color: rgb(210, 220, 252);
  height: 40px;
  line-height: 40px;
  text-align: center;
}
</style>