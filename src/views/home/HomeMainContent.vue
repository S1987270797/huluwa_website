<template>
  <div class="home-main-content">
    <!-- 回到游戏按钮 -->
    <span class="backToGame" @click="backToPlayGame">
      <em></em>
    </span>
    <!-- 小箭头 -->
    <i class="arrow"></i>
    <!-- 左侧选项栏 -->
    <left-options-bar
      class="leftOptionsBar"
      @currentBarItemChange="currentBarItemChange"
      :item-list-of-name="['游戏福利站', '游戏特色', '活动咨询']"
      ref="optionsBarRef"
    ></left-options-bar>
    <!-- 主要展示区域 -->
    <component :is="currentPage" class="main"></component>
  </div>
</template>

<script lang="ts">
import { defineComponent, shallowRef, ref } from 'vue';
import LeftOptionsBar from './cpns/LeftOptionsBar.vue';
import GameWelfareStation from './cpns/GameWelfareStation.vue';
import GameCharacteristic from './cpns/GameCharacteristic.vue';
import GameActivityConsulting from './cpns/GameActivityConsulting.vue';

export default defineComponent({
  components: {
    LeftOptionsBar,
    GameWelfareStation,
    GameCharacteristic,
    GameActivityConsulting
  },
  emits: ['backToPlayGame'],
  setup(props, { emit }) {
    // 展示三个区域其中一个的逻辑
    const currentPage = shallowRef(GameWelfareStation); // 默认第一页
    // 拿到bar修改其activeItem
    const optionsBarRef = ref<InstanceType<typeof LeftOptionsBar>>();
    // 点击跳转到playGame
    const backToPlayGame = () => {
      emit('backToPlayGame');
    };
    // 决定显示哪个组件
    const currentBarItemChange = (index: number) => {
      if (index === 0) {
        currentPage.value = GameWelfareStation; // 隐藏
      } else if (index === 1) {
        currentPage.value = GameCharacteristic;
      } else {
        currentPage.value = GameActivityConsulting;
      }
      // 游玩页点击后跳转到活动主页,更新其optionsBar的item的active
      optionsBarRef.value!.activeBtn = index;
    };
    return {
      currentPage,
      currentBarItemChange,
      optionsBarRef,
      backToPlayGame
    };
  }
});
</script>

<style scoped lang="less">
@import url('~@/assets/css/config.less'); // 导入配置
@import url('~@/assets/css/tools/arrangeLocation.less');

.home-main-content {
  // position: relative;
  width: 1920px;
  height: 1080px;
  // min-width: 1280px !important;
  // width: 100%;
  // height: 100%;
  // overflow: hidden;
  background: #fff;
  background: url(~ImgBaseUrl/bg.png) no-repeat;
  background-size: contain;

  .backToGame {
    .arrangeLocation(
      @top:2vw,
      @left:12vw,
      @width:10vw,
      @height:10vw,
      @bcgUli: 'backToGame.png'
    );
    cursor: pointer;
    z-index: 1;
  }

  // 小箭头
  .arrow {
    .arrangeLocation(
    @top: 12.19vw;
    @left: 16.09vw;
    @width: 1.46vw;
    @height: 1.72vw;
    @bcgUli: 'arrow.png';
  );
  }

  /* 左侧选项栏 */
  .leftOptionsBar {
    .arrangeLocation(
    @top:12.6vw,
    @left:10vw,
    @width:12.525vw,
    @height:17.727vw,
    @bcgUli: 'leftOptionsBar.png'
  );
    z-index: 1;
  }
}
</style>
