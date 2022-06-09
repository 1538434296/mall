<template>
  <div id="profile">
    <nav-bar>
      <div slot="center">个人中心</div>
    </nav-bar>
    <div class="div1"></div>
    <div id="btn-box">
      <div class="login-btn btn" @click="LoginBtn">我要登录</div>
      <div class="register-btn btn" @click="RegisterBtn">我要注册</div>
    </div>
    <ul>
      <li>
        会员卡
        <svg
          t="1653461956229"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1421"
          width="36"
          height="44"
        >
          <path
            d="M534.826667 935.466667a47.36 47.36 0 0 1-66.986667-66.773334L835.413333 501.333333 467.84 133.973333a47.36 47.36 0 1 1 66.986667-66.773333l400.64 400.64a47.36 47.36 0 0 1 0 66.986667z"
            fill="#cdcdcd"
            p-id="1422"
          ></path>
        </svg>
      </li>
      <li>
        地址管理
        <svg
          t="1653461956229"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1421"
          width="36"
          height="44"
        >
          <path
            d="M534.826667 935.466667a47.36 47.36 0 0 1-66.986667-66.773334L835.413333 501.333333 467.84 133.973333a47.36 47.36 0 1 1 66.986667-66.773333l400.64 400.64a47.36 47.36 0 0 1 0 66.986667z"
            fill="#cdcdcd"
            p-id="1422"
          ></path>
        </svg>
      </li>
      <li>
        我的订单
        <svg
          t="1653461956229"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1421"
          width="36"
          height="44"
        >
          <path
            d="M534.826667 935.466667a47.36 47.36 0 0 1-66.986667-66.773334L835.413333 501.333333 467.84 133.973333a47.36 47.36 0 1 1 66.986667-66.773333l400.64 400.64a47.36 47.36 0 0 1 0 66.986667z"
            fill="#cdcdcd"
            p-id="1422"
          ></path>
        </svg>
      </li>
      <li>
        会员权益
        <svg
          t="1653461956229"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1421"
          width="36"
          height="44"
        >
          <path
            d="M534.826667 935.466667a47.36 47.36 0 0 1-66.986667-66.773334L835.413333 501.333333 467.84 133.973333a47.36 47.36 0 1 1 66.986667-66.773333l400.64 400.64a47.36 47.36 0 0 1 0 66.986667z"
            fill="#cdcdcd"
            p-id="1422"
          ></path>
        </svg>
      </li>
      <li>
        联系我们
        <svg
          t="1653461956229"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1421"
          width="36"
          height="44"
        >
          <path
            d="M534.826667 935.466667a47.36 47.36 0 0 1-66.986667-66.773334L835.413333 501.333333 467.84 133.973333a47.36 47.36 0 1 1 66.986667-66.773333l400.64 400.64a47.36 47.36 0 0 1 0 66.986667z"
            fill="#cdcdcd"
            p-id="1422"
          ></path>
        </svg>
      </li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  components: { NavBar },
  name: "Profile",
  methods: {
    LoginBtn() {
      this.$router.replace("/login");
    },
    RegisterBtn() {
      this.$router.replace("/register");
    },
  },
};
</script>

<style scoped>
.div1 {
  height: 150px;
  background-color: var(--color-tint);
}
#btn-box {
  overflow: hidden;
  border-bottom: 1px #ccc solid;
}
.login-btn {
  color: #000;
  background-color: #ccc;
  float: left;
}
.register-btn {
  color: #fff;
  background-color: rgb(55, 226, 140);
  float: right;
}
.btn {
  border-radius: 8%;
  height: 40px;
  width: 80px;
  margin: 10px 53px;
  text-align: center;
  line-height: 40px;
}

ul li {
  font-size: 14px;
  line-height: 44px;
  padding-left: 10px;
  border-bottom: 1px solid #ccc;
}
li .icon {
  padding-right: 20px;
  float: right;
}
</style>
