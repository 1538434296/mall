<template>
  <div class="cart-bot-bar">
    <div>
      <input type="checkbox" class="check" id="check" />&ensp;<label
        for="check"
      >
        全部</label
      >
    </div>
    <div>合计：{{ totalPrice }}</div>
    <div>去结算{{ checkLength }}</div>
  </div>
</template>

<script>
export default {
  name: "CartBotBar",
};
</script>

<style scoped="scoped">
.cart-bot-bar {
  position: fixed;
  display: flex;
  bottom: 49px;
  left: 0;
  right: 0;
  height: 40px;
  padding: 0 10px;
  font-size: 13px;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid #ececec;
  border-top: 1px solid #ececec;
}
  .check {
    width: 18px;
    height: 18px;
    overflow: hidden;
    border-radius: 100%;
    vertical-align: bottom;
    border: 1px solid #ececec;
  }
  .check:checked {
    border: 1px solid red;
    background-size: cover;
  }

</style>