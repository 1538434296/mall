<template>
  <div id="register">
    <nav-bar>
      <div slot="left" @click="BackBtn"><p>&#60; 返回</p></div>
      <div slot="center">用户登录</div>
    </nav-bar>
    <div id="login-box">
      <div class="login-name">
        <span>*</span>
        用户名
        <input
          type="text"
          v-model="name"
          name="login-name"
          placeholder="请输入用户名"
          maxlength="11"
          onkeyup="value=value.replace(/[^0-9.]/g,'') "
          ref="input1"
          @blur="ChangeName(name)"
        />
      </div>
      <div class="login-pwd">
        <span>*</span>
        密码
        <input
          type="password"
          v-model="password"
          name="login-pwd"
          placeholder="请输入密码"
          ref="input2"
          @blur="ChangePwd(password)"
        />
      </div>
      <input
        type="text"
        v-model="text"
        placeholder="请填写验证码"
        ref="input3"
        maxlength="4"
        style="padding: 10px; margin-right: 5%; width: 67%"
      />
      <button class="login-btn" @click="LoginBtn()">登录</button>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  name: "login",
  components: {
    NavBar,
  },
  data() {
    return {
      name: "",
      password: "",
      text: "",
    };
  },
  methods: {
    BackBtn() {
      this.$router.push("/profile");
    },
    ChangeName(UserName) {
      const name = UserName;
      if (name == "" || name == undefined || name == null) {
        this.$refs.input1.focus();
      } else {
        console.log(name);
      }
    },
    ChangePwd(UserPwd) {
      const password = UserPwd;
      if (password == "" || password == undefined || password == null) {
        this.$refs.input2.focus();
      } else {
        console.log(password);
      }
    },
    LoginBtn() {
      this.name = this.$refs.input1.value;
      this.password = this.$refs.input2.value;
      this.$router.push("/profile");
    },
  },
};
</script>

<style scoped>
p:first-child {
  font-size: 14px;
  color: rgb(54, 141, 254);
}
#login-box {
  font-size: 14px;
  padding-top: 20px;
  height: 93.4vh;
  background-color: #eee;
}
#login-box span {
  color: red;
}
.login-name,
.login-pwd {
  height: 40px;
  width: 90%;
  padding: 10px;
  background-color: #fff;
  margin: 2px auto;
  border-radius: 2%;
  overflow: hidden;
}
#login-box input {
  float: right;
  border: 0;
  border-style: none;
  width: 73%;
  padding-top: 1px;
  outline: none;
}
.login-btn {
  color: #fff;
  font-size: 16px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgb(33, 205, 122);
  padding: 13px 0;
  margin-top: 10px;
  width: 90%;
  border-radius: 5%;
  border: none;
}
</style>