<template>
  <div class="announcement">
    <!-- 使用titleSwiper组件 -->
    <title-swiper-content :titles="aBoxsTitle" :contents="swiperBoxContent">
      <!-- 我来决定用什么包裹每个title -->
      <template v-slot:titleBox="slotProps">
        <div class="title-box">{{ slotProps.title }}</div>
      </template>
      <!-- 前进后退两个按钮 -->
      <template v-slot:prevEl>
        <span class="my-prev-el"></span>
      </template>
      <template v-slot:nextEl>
        <span class="my-next-el"></span>
      </template>
    </title-swiper-content>
  </div>
</template>

<script lang="ts">
import { getImgUrl } from '@/constant/imageBaseUrl';

import { defineComponent, reactive } from 'vue';
import TitleSwiperContent from '@/components/Title-Swiper-content.vue';

import { swiperBoxContent } from './config/announcement-config';

export default defineComponent({
  components: {
    TitleSwiperContent
  },
  setup() {
    const aBoxsTitle = reactive([
      '12月8日维护公告',
      '12月9日维护公告',
      '12月10日维护公告',
      '12月11日维护公告',
      '12月12日维护公告',
      '12月13日维护公告',
      '12月14日维护公告',
      '12月15日维护公告',
      '12月16日维护公告'
    ]);
    return {
      getImgUrl,
      aBoxsTitle,
      swiperBoxContent
    };
  }
});
</script>

<style scoped lang="less">
@import url('~@/assets/css/config.less');
header {
  .title-box {
    width: 9.1146vw;
    height: 1.8vw;
    text-align: center;
    line-height: 1.6vw;
    font-size: 0.7vw;
    color: #fff;
    font-weight: normal;
    background: linear-gradient(#fa846e, #ea575b);
    border: 0.0521vw solid #fff;
    border-radius: 5%;
    box-shadow: 0vw 0.2604vw 0.3125vw 0vw #da9353;
  }
  .my-prev-el,
  .my-next-el {
    position: absolute;
    width: 1.6vw;
    height: 1.5vw;
    cursor: pointer;
    z-index: 999;
  }
  .my-prev-el {
    top: 2.2vw;
    left: 2.5vw;
    background: url('@{imgBaseUrl}/announcement/arrow-left.png') no-repeat;
    background-size: contain;
  }
  .my-next-el {
    top: 2.2vw;
    right: 2.5vw;
    background: url('@{imgBaseUrl}/announcement/arrow-right.png') no-repeat;
    background-size: contain;
  }
}
</style>
