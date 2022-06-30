<template>
  <div class="WelfareActivities">
    <title-swiper-content :titles="ancTitles" :contents="textContent" :spaceBetween="0">
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
import { defineComponent, reactive } from 'vue';
import TitleSwiperContent from '@/components/Title-Swiper-content.vue';
import { textContent } from './config/welfareActivities-config';

export default defineComponent({
  components: {
    TitleSwiperContent
  },
  setup() {
    const ancTitles = reactive([
      '活动名字1',
      '活动名字2',
      '活动名字3',
      '活动名字4',
      '活动名字5',
      '活动名字6',
      '活动名字7',
      '活动名字8'
    ]);
    return {
      ancTitles,
      textContent
    };
  }
});
</script>

<style scoped lang="less">
@import url('~@/assets/css/config.less');
.title-box {
  width: 8vw;
  height: 2.1354vw;
  color: #fff;
  font-size: 0.7292vw;
  line-height: 1.7vw;
  background: url('@{imgBaseUrl}/announcement/ancTitleBox.png') no-repeat;
  background-size: contain;
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
  top: 2vw;
  left: 2.5vw;
  background: url('@{imgBaseUrl}/announcement/arrow-left.png') no-repeat;
  background-size: contain;
}
.my-next-el {
  top: 2vw;
  right: 2.7vw;
  background: url('@{imgBaseUrl}/announcement/arrow-right.png') no-repeat;
  background-size: contain;
}
</style>
