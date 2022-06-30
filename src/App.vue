<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {}
});
</script>

<style lang="less">
@import url('~@/assets/css/base.less');
// element组件el-prop的样式
.el-popover.el-popper {
  // background-color: transparent !important;
  border: 0 !important;
  padding: 0 !important;
  text-align: center !important;
}
</style>
