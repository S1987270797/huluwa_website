<template>
  <div class="GameWelfareStation">
    <info-panel :titleImgUli="'/title0.png'" :twoButtonName="['福利农场', '兄弟集结']">
      <!-- 插入两个组件 -->
      <template v-slot:left>
        <farm-of-welfare></farm-of-welfare>
      </template>
      <!-- 右边 -->
      <template v-slot:right>
        <build-up-comrades></build-up-comrades>
      </template>
    </info-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BuildUpComrades from './welfare/BuildUpComrades.vue';
import FarmOfWelfare from './welfare/FarmOfWelfare.vue';

export default defineComponent({
  components: {
    BuildUpComrades,
    FarmOfWelfare
  },
  setup() {
    return {};
  }
});
</script>

<style scoped lang="less"></style>
