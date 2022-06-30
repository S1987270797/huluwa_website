<template>
  <swiper
    :slides-per-view="3"
    :space-between="0"
    :pagination="{
      clickable: true,
      bulletActiveClass: 'my-bullet-active',
      clickableClass: 'my-clickable-class',
      bulletClass: 'my-bullet'
    }"
    :navigation="{ nextEl: '.my-next-el', prevEl: '.my-prev-el' }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    @activeIndexChange="onActiveIndexChange"
  >
    <!-- 加入轮播的图 -->
    <template v-for="item in 7" :key="item">
      <swiper-slide>
        <img :src="getImgUrl('/showTrait/CarouselPicture1.png')" alt="" />
      </swiper-slide>
    </template>
  </swiper>
  <!-- 前进与后退两个按钮 -->
  <div class="my-prev-el" :class="{ isBeginningOrEnd: swiperIsBeginning }"></div>
  <div class="my-next-el" :class="{ isBeginningOrEnd: swiperIsEnd }"></div>
</template>
<script lang="ts">
import { getImgUrl } from '@/constant/imageBaseUrl';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, A11y]);

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';

/**
 * 如果嫌麻烦可以把上面的全部样式都删了，直接用总的
 * bundle：所有 Swiper 样式，包括所有模块样式（如导航、分页等）
 */
// import "swiper/swiper-bundle.min.css";

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: '',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    let swiperIsBeginning = ref(true);
    let swiperIsEnd = ref(false);
    const onSwiper = (swiper: any) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log('slide change', i.activeIndex);
    };
    const onActiveIndexChange = (swiper: any) => {
      swiperIsBeginning.value = swiper.isBeginning;
      swiperIsEnd.value = swiper.isEnd;
      console.log(swiperIsBeginning);
      console.log(swiperIsEnd);
      console.log('onActiveIndexChange', swiper.activeIndex);
      console.log('onActiveIndexChange', swiper.isBeginning);
      console.log('onActiveIndexChange', swiper.isEnd);
    };
    return {
      getImgUrl,
      swiperIsBeginning,
      swiperIsEnd,
      onSwiper,
      onSlideChange,
      onActiveIndexChange
      // modules: [Navigation, A11y]
    };
  }
});
</script>
<style scope lang="less">
@import url('~@/assets/css/config.less');
/* .swiper-slide {
  height: 300px;
  line-height: 300px;
  font-size: 30px;
  text-align: center;
  background-color: pink;
} */
.swiper {
  width: 43.4896vw;
  height: 26.0417vw;
  margin-top: 1.5vw;
  // margin: 2vw 2vw 0;
  // padding: 2vw 2vw 0;
}

.swiper-slide {
  text-align: center;
  // font-size: 18px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: space-around;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 13.8vw;
  // height: 23.9583vw;
  margin-top: -2vw;
  // height: 100%;
  // object-fit: cover;
}

.my-next-el {
  position: absolute;
  top: 11vw;
  right: 0.4vw;
  width: 2.4479vw;
  height: 4.375vw;
  background: url('@{imgBaseUrl}/showTrait/arrow-right.png') no-repeat;
  background-size: contain;
  cursor: pointer;
  z-index: 999;
}
.my-prev-el {
  position: absolute;
  top: 11vw;
  left: 0vw;
  width: 2.4479vw;
  height: 4.375vw;
  background: url('@{imgBaseUrl}/showTrait/arrow-left.png') no-repeat;
  background-size: contain;
  cursor: pointer;
  z-index: 999;
}
// 当前活跃的pagination
.my-bullet-active {
  background-color: #ffa14e !important;
  opacity: 1 !important;
}
// 可点击的bullet
.my-clickable-class {
  margin-bottom: 0vw;
  opacity: 1;
}
// 所有bullet的样式
.my-bullet {
  display: inline-block;
  width: 0.6vw;
  height: 0.6vw;
  background-color: #fff;
  opacity: 1;
  border-radius: 50%;
  &:nth-child(n + 2) {
    margin-left: 0.7vw;
  }
  margin-bottom: 0.8vw;
}
.isBeginningOrEnd {
  opacity: 0.5;
  cursor: default;
}
</style>
