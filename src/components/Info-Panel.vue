<template>
  <div class="infoPanel">
    <!-- 标题图片 -->
    <div
      class="title"
      ref="titleRef"
      :style="{
        background: 'url(' + getImgUrl(titleImgUli) + ') no-repeat',
        backgroundSize: 'contain'
      }"
    ></div>
    <!-- 两个按钮 -->
    <button class="roleShowBtn1" @click="btnClick(0)" :class="{ activeBtn: currentPage === 0 }">
      {{ twoButtonName[0] }}
    </button>
    <button class="roleShowBtn2" @click="btnClick(1)" :class="{ activeBtn: currentPage === 1 }">
      {{ twoButtonName[1] }}
    </button>
    <!-- 主要展示区 -->
    <div class="buildUpComrades">
      <!-- 左边按钮控制区域 -->
      <div class="displayPage1" v-show="currentPage === 0">
        <slot name="left"> Hello </slot>
      </div>
      <!-- 右边按钮控制区域 -->
      <div class="displayPage2" v-show="currentPage === 1">
        <slot name="right"> World </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { getImgUrl } from '@/constant/imageBaseUrl';

export default defineComponent({
  props: {
    titleImgUli: {
      type: String,
      required: true
    },
    twoButtonName: {
      type: Array,
      required: true
    }
  },
  setup() {
    // 两个大page切换逻辑
    const currentPage = ref(0);
    const btnClick = (i: number) => {
      currentPage.value = i;
    };
    return {
      currentPage,
      btnClick,
      getImgUrl
    };
  }
});
</script>

<style scoped lang="less">
@import url('~@/assets/css/config.less'); // 导入配置
@import url('~@/assets/css/tools/arrangeLocation.less'); // 工具函数

/* 展示面板 */
.infoPanel {
  .arrangeLocation(
    @top:1.5vw,
    @left:17vw,
    @width: 66.4vw,
    @height:47.5vw,
    @bcgUli:'infoPanel.png'
  );
}

/* 标题 */
.title {
  .arrangeLocation(
    @top:2.7vw,
    @left:17.5vw,
    @width:31vw,
    @height:7vw,
  );
}

// 两个按钮
.activeBtn {
  background: url('@{imgBaseUrl}/roleShowBtn0.png') no-repeat !important;
  background-size: contain !important;
}

.roleShowBtn1 {
  .arrangeLocation(
    @top:9.8vw,
    @left:22.6vw,
    @width:9.1vw,
    @height:3.5vw,
  );
}
.roleShowBtn2 {
  .arrangeLocation(
    @top:9.8vw,
    @left:34.6vw,
    @width:9.1vw,
    @height:3.5vw,
  );
}
.roleShowBtn1,
.roleShowBtn2 {
  cursor: pointer;
  display: block;
  padding-bottom: 0.5vw;
  text-align: center;
  font-size: 1.111vw;
  font-weight: 600;
  border: none;
  font-family: inherit;
  color: #fff;
  background: url('@{imgBaseUrl}/roleShowBtn1.png') no-repeat;
  background-size: contain;
  outline-style: none;
}

// 主要展示区域
.buildUpComrades {
  position: absolute;
  top: 14.4vw;
  left: 9.3vw;
  width: 48.07vw;
  height: 26.67vw;
  .displayPage1,
  .displayPage2 {
    width: 100%;
    height: 100%;
  }
}
</style>
