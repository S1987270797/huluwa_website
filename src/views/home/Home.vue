<template>
  <div class="home-page">
    <!-- 联系我们 -->
    <a class="aboutUs"></a>
    <a class="loginBtn" href="javascript:;" @click="dialogLoginBoxVisible = true">登录</a>
    <login-dialog v-model:dialogControl="dialogLoginBoxVisible"></login-dialog>

    <swiper
      :direction="'vertical'"
      :slidesPerView="1"
      :spaceBetween="0"
      :mousewheel="true"
      :allowTouchMove="false"
      :activeSlide="0"
      :pagination="{
        clickable: true
      }"
      @swiper="onSwiper"
      @activeIndexChange="onActiveIndexChange"
    >
      <swiper-slide>
        <home-play-game @slideToMainPage="slideToMainPage"></home-play-game>
      </swiper-slide>
      <swiper-slide>
        <home-second-page></home-second-page>
      </swiper-slide>
      <swiper-slide active>
        <home-main-content
          ref="mainContentRef"
          @backToPlayGame="backToPlayGame"
        ></home-main-content>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import HomeMainContent from './HomeMainContent.vue';
import HomePlayGame from './HomePlayGame.vue';
import HomeSecondPage from './HomeSecondPage.vue';

import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';
// import type {  } from 'swiper/swiper.d.ts';
import SwiperCore, { Navigation, Mousewheel, A11y } from 'swiper';

SwiperCore.use([Navigation, Mousewheel, A11y]);
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';

import { defineComponent, ref } from 'vue';
import type { Swiper as SwiperEvents } from 'swiper/types';

import LoginDialog from './cpns/home-dialog/LoginDialog.vue';

export default defineComponent({
  components: {
    HomeMainContent,
    HomePlayGame,
    HomeSecondPage,
    Swiper,
    SwiperSlide,
    LoginDialog
  },
  setup() {
    // 将swiper实例保存
    let swiperInstance: any;
    // 拿到mainContentPage, 方便操作显示哪一页
    const mainContentRef = ref<InstanceType<typeof HomeMainContent>>();
    const onSwiper = (swiper?: any) => {
      swiper.slideTo(0);
      swiperInstance = swiper;
    };

    const onActiveIndexChange = (swiper: SwiperEvents) => {
      console.log(swiper.activeIndex, 'activeIndex');
    };
    // 第一个页nav点击跳到第三页
    const slideToMainPage = (i: number) => {
      swiperInstance.slideTo(2);
      mainContentRef.value?.currentBarItemChange(i);
    };
    // 点击跳转到playGame
    const backToPlayGame = () => {
      swiperInstance.slideTo(0);
    };
    // 显示登录弹窗
    const dialogLoginBoxVisible = ref(false);
    return {
      onSwiper,
      onActiveIndexChange,
      slideToMainPage,
      mainContentRef,
      backToPlayGame,
      dialogLoginBoxVisible
    };
  }
});
</script>

<style scoped lang="less">
@import url('~@/assets/css/config.less'); // 导入配置

.home-page {
  overflow: hidden;
  // min-width: 1280px;
  // width: 100vw;
  // height: 100vw;
  // width: 1920px;
  // height: 1080px;
  background: #fff;
  img {
    margin: 0;
  }

  .swiper {
    margin-top: 0px;
    overflow: hidden;
    // width: 100vw;
    // height: 100vw;
    width: 1920px;
    height: 1080px;
    .swiper-slide {
      text-align: left;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
  }
  // 联系我们
  .aboutUs {
    position: fixed;
    top: 5.625vw;
    right: 0;
    width: 10vw;
    height: 3vw;
    background: url('@{imgBaseUrl}/aboutUs.png') no-repeat;
    background-size: contain;
    z-index: 2;
  }
  // loginBtn
  .loginBtn {
    position: fixed;
    top: 5vw;
    right: 0;
    z-index: 2;
  }
}
::v-deep(.swiper-slide img) {
  margin: 0 !important;
}
</style>
