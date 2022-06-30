<template>
  <div class="subscribeDialog">
    <dialog-box v-model:dialogVisible="_dialogControl" :top="'18vw'" @dialogClose="onDialogClose">
      <!-- 弹窗 -->
      <main class="main">
        <el-tabs v-model="activeName" stretch class="el-tabs">
          <!-- 预约游戏 -->
          <el-tab-pane label="预约游戏" name="subscribeGame">
            <!-- 用popover包裹 -->
            <popover-box :popoverVisible="popoverVisible" :autoClose="2000">
              <el-input
                v-model="phoneNumberInput"
                placeholder="请输入手机号"
                @blur="testPhoneNum"
              />
            </popover-box>
            <el-input v-model="verifyCodeInput" placeholder="请输入验证码" />
            <span class="get-verification-code clickable" @click="getVerificationCode">
              获取验证码
            </span>
          </el-tab-pane>
          <!-- 公用的两个按钮 -->
          <aside class="activeBtns">
            <span class="loginBtn clickable" @click="subscribeNow">确定</span>
          </aside>
        </el-tabs>
      </main>
    </dialog-box>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import PopoverBox from '@/components/Popover-Box.vue';

import { mixinDialog_box } from '@/mixins/mixinDialog-Box';
import { verifyPhoneWithRegExp } from '@/tools/verifyPhoneWithRegExp';

export default defineComponent({
  mixins: [mixinDialog_box],
  components: {
    PopoverBox
  },
  setup() {
    const activeName = ref('subscribeGame');
    const phoneNumberInput = ref();
    const verifyCodeInput = ref();
    const popoverVisible = ref(false);
    // 点击 获取验证码 按钮
    const getVerificationCode = () => {
      if (verifyPhoneWithRegExp(phoneNumberInput.value)) {
        console.log('发送验证码');
      } else {
        popoverVisible.value = true;
        // 自动关闭
        setTimeout(() => {
          popoverVisible.value = false;
        }, 2000);
        console.log('failed');
      }
    };
    // 点击立即预约按钮
    const subscribeNow = () => {
      console.log(phoneNumberInput.value, verifyCodeInput.value);
    };
    // 正则验证手机号码
    const testPhoneNum = () => {
      if (!verifyPhoneWithRegExp(phoneNumberInput.value)) {
        popoverVisible.value = true;
        // 自动关闭
        setTimeout(() => {
          popoverVisible.value = false;
        }, 2000);
        console.log('手机号码错误');
      }
    };
    // 关闭dialog连带关闭popover
    const onDialogClose = () => {
      popoverVisible.value = false;
    };
    return {
      activeName,
      phoneNumberInput,
      verifyCodeInput,
      subscribeNow,
      testPhoneNum,
      popoverVisible,
      onDialogClose,
      getVerificationCode
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

  /* input样式 */
  // 每个input都会被--small包裹
  .el-tabs ::v-deep(.el-input--small) {
    // height: 2.5vw;
    margin-top: -0.5vw;
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
  .el-tabs {
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
  }
  /* popover样式 */
  // .codeLogin ::v-deep(.el-input--small:nth-child(2)) {
  //   margin-top: 1vw;
  // }
  /* 确定按钮按钮 */
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
