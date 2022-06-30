<template>
  <dialog-box v-model:dialogVisible="_dialogControl">
    <div class="invitation-dialog">
      <div class="main">
        <!-- 展示复制链接区域 -->
        <section class="copyLink">
          <p>1、发送游戏链接，邀请好友进入游戏注册</p>
          <div>
            <input type="text" v-model="inputValue" />
            <em ref="copyLinkBtnRef" @click="copyLink">复制链接</em>
          </div>
        </section>
        <!-- 二维码展示区域 -->
        <section class="QRcode">
          <p>2、截图分享游戏二维码，邀请好友扫码获取游戏链接</p>
          <!-- 二维码 -->
          <qrcode-vue
            value="https://wcdn.tomatogames.com/web/guonei/wbqj/download/hangsheng/index.html"
            level="H"
            class="qrcode-box"
          />
          <!-- 下载按钮 -->
          <em></em>
        </section>
      </div>
    </div>
  </dialog-box>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { mixinDialog_box } from '@/mixins/mixinDialog-Box';

import QrcodeVue from 'qrcode.vue';

export default defineComponent({
  mixins: [mixinDialog_box],
  components: {
    QrcodeVue
  },
  setup() {
    const inputValue = ref('https://www.tomatogames.com');
    const copyLinkBtnRef = ref<null | HTMLElement>(null);
    const qrCodeRef = ref<null | HTMLElement>(null);
    // 点击复制链接
    const copyLink = () => {
      navigator.clipboard.writeText(inputValue.value).then(() => {
        copyLinkBtnRef.value!.textContent = '复制成功';
      });
    };
    //
    // qrCodeRef.value

    return {
      inputValue,
      copyLink,
      copyLinkBtnRef,
      qrCodeRef
    };
  }
});
</script>

<style scoped lang="less">
@import url('~@/assets/css/config.less');
@import url('~@/assets/css/tools/arrangeLocation.less');
.invitation-dialog {
  overflow: hidden;
  width: 29vw;
  height: 21vw;
  font-size: 0.7vw;
  background: url('@{imgBaseUrl}/buildUpComrades/invitationDialogBg.png') no-repeat;
  background-size: contain;
  .main {
    width: 25vw;
    height: 15vw;
    margin: 5.2vw auto 0;
    color: #b0846f;
    .copyLink {
      div {
        width: 23vw;
        height: 1.5vw;
        background-color: #ebd3ad;
        margin: 0.3vw 0 0.5vw 1.5vw;
        input {
          display: inline-block;
          width: 75%;
          font-size: 0.7vw;
          background-color: #ebd3ad;
          border: 0;
          color: #793a1e;
          line-height: 1.5vw;
          font-weight: 700;
          text-indent: 1em;
          outline: 0;
        }
        em {
          float: right;
          width: 25%;
          height: 1.5vw;
          cursor: pointer;
          text-align: center;
          line-height: 1.5vw;
          background-color: #f7d9aa;
        }
      }
    }
    .QRcode {
      p {
        font-size: 0.7vw;
        margin-bottom: 0.4vw;
      }
      .qrcode-box {
        display: inline-block;
        width: 8vw !important;
        height: 8vw !important;
        background-color: #ebd3ad;
        margin-left: 1.5vw;
      }
      em {
        display: inline-block;
        width: 4vw;
        height: 4vw;
        background: url('@{imgBaseUrl}/buildUpComrades/downloadBtn.png') no-repeat;
        background-size: contain;
        margin: 0 0 1vw 1vw;
        cursor: pointer;
      }
    }
  }
}
</style>
