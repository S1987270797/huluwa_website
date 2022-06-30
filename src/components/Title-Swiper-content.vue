// 目前 : 给左右两个切换箭头类名时只能取 .my-next-el .my-prev-el // 将标题与内容闯进来我给你渲染
<template>
  <div class="titleSwiper">
    <header>
      <swiper
        :slides-per-view="slidesPerView"
        :space-between="spaceBetween"
        :navigation="{ nextEl: '.my-next-el', prevEl: '.my-prev-el' }"
        @activeIndexChange="onActiveIndexChange"
      >
        <!-- 1.加入轮播的图 -->
        <template v-for="(title, index) in titles" :key="title">
          <swiper-slide @click="slideClick(index)">
            <!-- 作用域插槽,外界决定用什么样式包裹title -->
            <slot name="titleBox" :title="title"> </slot>
          </swiper-slide>
        </template>
      </swiper>
      <!-- 2.给轮播图前进与后退两个按钮 -->
      <div :class="{ isBeginningOrEnd: swiperIsBeginning }">
        <slot name="prevEl"> </slot>
      </div>
      <div :class="{ isBeginningOrEnd: swiperIsEnd }">
        <slot name="nextEl"> </slot>
      </div>
    </header>
    <main>
      <article class="reScrollBar">
        <h5>{{ contents[currentSlide].title }}</h5>
        <span>{{ contents[currentSlide].rightTime ?? '&nbsp;' }}</span>
        <p>{{ contents[currentSlide].text }}</p>
      </article>
    </main>
  </div>
</template>

<script lang="ts">
import { getImgUrl } from '@/constant/imageBaseUrl';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';

// import Swiper core and required modules
import SwiperCore, { Navigation, A11y } from 'swiper';

SwiperCore.use([Navigation, A11y]);

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';

import { defineComponent, ref } from 'vue';
import { useOpacityArrow } from '@/hooks/consulting/useOpacityArrow';

export default defineComponent({
  props: {
    titles: {
      type: Array,
      required: true
    },
    contents: {
      type: Array,
      required: true
    },
    slidesPerView: {
      type: Number,
      default: 4
    },
    spaceBetween: {
      type: Number,
      default: 10
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    // 通过currentSlide来决定显示哪张内容
    const currentSlide = ref(0);
    const slideClick = (index: number) => {
      currentSlide.value = index;
    };

    // 自动给不能点的arrow变为浅色
    const [onActiveIndexChange, swiperIsBeginning, swiperIsEnd] = useOpacityArrow();
    return {
      getImgUrl,
      slideClick,
      currentSlide,
      onActiveIndexChange,
      swiperIsBeginning,
      swiperIsEnd
      // [onActiveIndexChange, onSwiper] = useOpacityArrowF
    };
  }
});
</script>

<style scoped lang="less">
@import url('~@/assets/css/config.less');
.swiper {
  width: 39vw;
  height: 2.8vw;
  margin-top: 1.4vw;
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
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.isBeginningOrEnd {
  opacity: 0.5;
  cursor: default !important;
}

main {
  width: 43.5417vw;
  height: 21.0417vw;
  margin-top: 0.5vw;
  margin-left: 2.1vw;
  color: #621a00;
  padding-top: 1vw;
  padding-left: 1vw;
  background: url('@{imgBaseUrl}/announcement/bg.png') no-repeat;
  background-size: contain;
  article {
    width: 96%;
    height: 95%;
    overflow-y: auto;
    padding: 0 1.5vw;
    h5 {
      font-size: 1.5vw;
      font-family: SourceBold;
      font-weight: 700;
      text-align: center;
    }
    span {
      display: block;
      text-align: center;
      font-size: 0.72vw;
      margin: 0.1vw 0 -1vw;
    }
    p {
      font-size: 0.82vw;
      // line-height: 2em;
      white-space: pre;
    }
  }
  .reScrollBar::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 0.5208vw;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 0.5208vw;
  }
  .reScrollBar::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 500px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #dda15a;
  }

  .reScrollBar::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 500px;
    background: #fff;
  }
}

/* 主要内容提供 */
</style>
