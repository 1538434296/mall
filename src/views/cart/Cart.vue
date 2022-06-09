<template>
  <div id="cart">
    <nav-bar>
      <div slot="center">购物车</div>
    </nav-bar>
    <cart-bot-bar></cart-bot-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

import CartBotBar from "./childComp/CartBotBar.vue";
export default {
  components: { NavBar, CartBotBar},
  name: "Cart",
};
</script>

<style scoped>
</style>
