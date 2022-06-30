<template>
  <div class="barItem">
    <!-- 按钮选中特效 -->
    <div class="btnSelected" v-if="activeIndex === $attrs.index"></div>
    <!-- 显示的文本 -->
    {{ itemName }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    itemName: {
      type: String,
      required: true
    },
    activeIndex: {
      type: Number,
      default() {
        return 0;
      }
    }
  },
  setup() {
    return {};
  }
});
</script>

<style scoped lang="less">
@import url('~@/assets/css/config.less'); // 导入配置
.barItem {
  position: relative;
  width: 9vw;
  height: 3vw;
  background: url('@{imgBaseUrl}/button_home.png') no-repeat;
  background-size: contain;
  margin-bottom: 1.5vw;
  color: #fff;
  font-size: 1.12vw;
  font-family: SourceSemiBold;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-align: center;
  line-height: 3vw;
  cursor: pointer;
}

// 选中按钮状态
.btnSelected {
  position: absolute;
  top: -1.98vw;
  left: 0;
  width: 9vw;
  height: 2vw;
  background: url('@{imgBaseUrl}/selectedBtn.png') no-repeat;
  background-size: contain;
}
</style>
