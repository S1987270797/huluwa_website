<template>
  <div class="login-dialog">
    <dialog-box v-model:dialogVisible="_dialogControl" :top="'18vw'">
      <!-- 弹窗 -->
      <main class="main">
        <el-tabs v-model="activeName" @tab-click="handleClick" stretch class="el-tabs">
          <!-- 验证码登录 -->
          <el-tab-pane label="验证码登录" name="codeLogin" class="codeLogin">
            <el-input v-model="phoneNumberInput" placeholder="请输入手机号" />
            <el-input v-model="verificationCodeInput" placeholder="请输入验证码" />
            <span class="get-verification-code clickable">获取验证码</span>
          </el-tab-pane>
          <!-- 账号登录 -->
          <el-tab-pane label="账号登录" name="accountLogin" class="accountLogin">
            <el-input v-model="accountInput" placeholder="请输入账号" />
            <el-input
              v-model="passwordInput"
              type="password"
              placeholder="请输入密码"
              show-password
            />
          </el-tab-pane>
          <!-- 公用的两个按钮 -->
          <aside class="activeBtns">
            <span class="loginBtn clickable">登陆</span>
            <span class="registerBtn clickable">注册</span>
          </aside>
        </el-tabs>
      </main>
    </dialog-box>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { mixinDialog_box } from '@/mixins/mixinDialog-Box';

export default defineComponent({
  mixins: [mixinDialog_box],
  setup() {
    const activeName = ref('codeLogin');
    const phoneNumberInput = ref();
    const verificationCodeInput = ref();
    const accountInput = ref();
    const passwordInput = ref();

    // const handleClick = (tab: any, event: Event) => {
    const handleClick = (tab: any) => {
      console.log(tab.index);
      if (tab.index == 0) {
        console.log('当前在 验证码登入', phoneNumberInput.value, verificationCodeInput.value);
      } else if (tab.index == 1) {
        console.log('当前在 account登入', accountInput.value, passwordInput.value);
      }
    };
    return {
      activeName,
      handleClick,
      phoneNumberInput,
      verificationCodeInput,
      accountInput,
      passwordInput
    };
  }
});
</script>

<style scoped lang="less">
@import url('~@/assets/css/config.less');
.main {
  width: 28.9583vw;
  height: 18.8021vw;
  padding: 1.5vw 2.5vw;
  background: url('@{imgBaseUrl}/loginDialogBg.png') no-repeat;
  background-size: contain;
  /*  整个tab样式调整 */
  ::v-deep(.el-tabs__active-bar) {
    width: 5vw !important;
    margin-left: 3.2vw;
    border-top: 0.2604vw solid #b0846f;
    background-color: #b0846f;
  }
  ::v-deep(.el-tabs__item) {
    width: 100%;
    height: 2.8vw;
    font-size: 1.3542vw;
    color: #b0846f;
    font-family: SourceBold;
  }

  /* 验证码登录的input样式 */
  // 每个input都会被--small包裹
  .el-tabs ::v-deep(.el-input--small) {
    // height: 2.5vw;
    margin-top: -0.5vw;
  }
  // 密码登录的input的显示密码按钮
  .accountLogin ::v-deep(.el-icon svg) {
    width: 2em;
    height: 2em;
    margin-top: 1.3vw;
  }
  .codeLogin {
    position: relative;
  }
  // 正真的input class
  .el-tabs ::v-deep(.el-input__inner) {
    height: 2.5vw;
    background-color: #ebd3ad;
    margin-top: 1.5vw;
    font-size: 0.9375vw;
    font-family: inherit;
    color: #b0846f;
    outline-color: 0 !important;
    &::-webkit-input-placeholder {
      color: #b0846f;
    }
    &:focus {
      outline: 0 !important;
      border: 0.0521vw solid #b0846f;
    }
  }
  /* 获取验证码按钮 */
  .get-verification-code {
    position: absolute;
    top: 3.5vw;
    right: -0.3vw;
    height: 2.5vw;
    width: 8vw;
    font-size: 0.9375vw;
    margin-top: 1vw;
    color: #b0846f;
    text-align: center;
    line-height: 2.5vw;
    background-color: #f7d9aa;
    transform: scale(0.9);
  }
  // .codeLogin ::v-deep(.el-input--small:nth-child(2)) {
  //   margin-top: 1vw;
  // }
  /* 登陆 注册两个按钮 */
  .activeBtns {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 2.2vw;
    margin-top: 1.2vw;
    span {
      width: 7.9688vw;
      height: 2.1354vw;
      color: #fff;
      padding-left: 2.7vw;
      line-height: 1.8vw;
      letter-spacing: 1vw;
      background-color: skyblue;
      background: url('@{imgBaseUrl}/click-button.png') no-repeat;
      background-size: contain;
    }
  }
}
</style>
