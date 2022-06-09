<template>
  <div id="side-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style scoped>
#side-bar {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>