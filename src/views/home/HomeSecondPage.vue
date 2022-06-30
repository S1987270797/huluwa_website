<template>
  <div class="secondPage">
    <video :src="getImgUrl('/playGame/bornIsTop.mp4')" ref="videoRef" autoplay loop muted></video>
    <!-- 滑动提示 -->
    <span class="scrollTopOrDown"></span>
    <!-- 预约区域 -->
    <section class="subscriptionBanner">
      <!-- 立即预约按钮 -->
      <span @click="dialogSubscribeVisible = true"></span>
      <subscribe-dialog v-model:dialogControl="dialogSubscribeVisible"></subscribe-dialog>
      <!-- 三个奖品 -->
      <div class="prizes">
        <template v-for="item in prizes" :key="item">
          <div>
            <img :src="getImgUrl(item.imgUri)" alt="" />
            <p>{{ item.desc }}</p>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, reactive, ref } from 'vue';
import { getImgUrl } from '@/constant/imageBaseUrl';
import { makeElInCenter } from '@/hooks/common/makeElInCenter';

import SubscribeDialog from './cpns/home-dialog/SubscribeDialog.vue';

export default defineComponent({
  components: {
    SubscribeDialog
  },
  setup() {
    // 控制dialogSubscribeVisible显示
    const dialogSubscribeVisible = ref(false);
    const prizes = reactive([
      {
        imgUri: '/playGame/price1.png',
        desc: '奖品1'
      },
      {
        imgUri: '/playGame/price1.png',
        desc: '奖品2'
      },
      {
        imgUri: '/playGame/price1.png',
        desc: '奖品3'
      }
    ]);
    const videoRef = ref();
    // 必须放在nextTick里面执行
    nextTick(() => {
      makeElInCenter(videoRef.value, 'fullScreen');
    });

    return {
      videoRef,
      getImgUrl,
      prizes,
      dialogSubscribeVisible
    };
  }
});
</script>

<style scoped lang="less">
@import url('~@/assets/css/config.less'); // 导入配置
.secondPage {
  position: relative;
  width: 1920px;
  height: 1080px;
  min-width: 720px !important;
  display: inline-block;
  background-color: #000;
  video {
    position: absolute;
    // margin-top: 12vh;
    // top: 50vh;
    // left: 0;
    // width: 100vw;
    // transform: translateY(-50%);
    //
    top: 0;
    left: 50vw;
    height: 100vh;
    transform: translate(-50%);
  }
  // 几乎全屏时添加这个类
  .fullScreen {
    top: 50vh;
    left: 0;
    width: 100vw;
    height: 100vw;
    transform: translateY(-50%);
  }

  /* 上下滑动提示 */
  .scrollTopOrDown {
    position: absolute;
    left: 32.25vw;
    top: 74vh;
    width: 5.2083vw;
    height: 9.375vw;
    background: url('@{imgBaseUrl}/playGame/scrollTopOrDown.png') no-repeat;
    background-size: contain;
    animation: twinkle 1s infinite ease-in-out alternate;
  }
  @keyframes twinkle {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  /* 预约面板 */
  .subscriptionBanner {
    position: absolute;
    left: 36.4583vw;
    top: 74vh;
    width: 32.9167vw;
    height: 12.2917vw;
    background: url('@{imgBaseUrl}/playGame/subscriptionBanner.png') no-repeat;
    background-size: contain;
    span {
      display: block;
      width: 10.7292vw;
      height: 10.6771vw;
      background: url('@{imgBaseUrl}/playGame/subscriptionRightNow.png') no-repeat;
      background-size: contain;
      margin-top: 1vw;
      cursor: pointer;
      transition: all 0.3s;
    }
    span:hover {
      transform: scale(1.05);
    }
    .prizes {
      margin-top: -8.8542vw;
      margin-left: 10.4167vw;
      display: flex;
      img {
        width: 6.25vw;
        height: 6.25vw;
      }
      p {
        margin-top: -0.5208vw;
        text-align: center;
        color: #e3564f;
        font-size: 0.8333vw;
      }
    }
  }
}
</style>
