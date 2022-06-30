// 自动给不能点的arrow加上opacity
// 使用前准备
/*
1.前进与后退两个按钮 , 动态加上类名isBeginningOrEnd
    <div class="my-prev-el" :class="{ isBeginningOrEnd: swiperIsBeginning }"></div>
    <div class="my-next-el" :class="{ isBeginningOrEnd: swiperIsEnd }"></div>

2.写上 css类
.isBeginningOrEnd {
    opacity: 0.5;
    cursor: default;
}

3.监听swiper组件发出的事件
@activeIndexChange="onActiveIndexChange"
 */
import { ref } from 'vue';

export function useOpacityArrow() {
  const swiperIsBeginning = ref(true);
  const swiperIsEnd = ref(false);
  const onActiveIndexChange = (swiper: any) => {
    swiperIsBeginning.value = swiper.isBeginning;
    swiperIsEnd.value = swiper.isEnd;
  };
  return [onActiveIndexChange, swiperIsBeginning, swiperIsEnd];
}
