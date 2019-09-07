<template>
  <div class="login-container">
    <div class="login-title">
      <span :class="{'active':validationLogin}" @click.stop.prevent="toValidationLogin">验证码登录</span>
      <span :class="{'active':!validationLogin}" @click.stop.prevent="toPasswordLogin">密码登录</span>
    </div>
    <div class="login-content">
      <div class="input-item">
        <p class="item-title">用户名</p>
        <div>
          <input type="text" class="item-input" v-model="username">
        </div>
      </div>
      <div class="input-item" v-if="validationLogin">
        <p class="item-title">验证码</p>
        <div>
          <input type="text" class="item-input" v-model="validateCode">
          <a>获取验证码</a>
        </div>
      </div>

      <div class="input-item" v-else>
        <p class="item-title">密码</p>
        <div>
          <input type="text" class="item-input" v-model="password">
        </div>
      </div>
    </div>
    <div class="login-buttons">
      <a class="login-button">登录</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      validationLogin: true,
      username: '',
      validateCode: '',
      password: ''
    }
  },
  methods: {
    toValidationLogin: function () {
      this.validationLogin = true
      this.username = ''
      this.validateCode = ''
      this.password = ''
    },
    toPasswordLogin: function () {
      this.validationLogin = false
      this.username = ''
      this.validateCode = ''
      this.password = ''
    }
  }
}
</script>

<style lang="stylus">
.login-container
  padding: 1.75rem 3.38rem 1.75rem 2.62rem;
  box-sizing: border-box;
  font-family: 'PingFang Medium_1';
  .login-title
    font-size: 1.38rem;
    color: #969696;
    span
      margin-right: 1.65rem;
      &.active
        color: #000000;
  .login-content
    padding-top: 0.69rem;
    .input-item
      box-sizing: border-box;
      padding-top: 1.72rem;
      color: #000000;
      .item-title
        font-size: 0.82rem;
      div
        width: 100%;
        border-bottom: 1px solid #9b9b9b;
        padding: 0.72rem 0 0.2rem 0;
        input
          font-family: 'PingFang Bold_1';
          width: 100%;
          caret-color: #FF5722;
        a
          font-size: 0.96rem;
          color: #ff5600;
          position: absolute;
          right: 3.38rem;
  .login-buttons
    box-sizing: border-box;
    padding: 2.76rem 0;
    .login-button
      width: 100%;
      height: 3.24rem;
      line-height: 3.24rem;
      text-align: center;
      border-radius: 3.24rem;
      color: #fffefe;
      font-family: 'PingFang Bold_1';
      font-size: 1.03rem;
      display: inline-block;
      background: #969696;
</style>
