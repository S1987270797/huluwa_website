<template>
  <div>
    <info-panel :titleImgUli="'/title1.png'" :twoButtonName="['角色展示', '特色展示']">
      <!-- 插入两个组件 -->
      <template v-slot:left>
        <show-roles></show-roles>
      </template>
      <!-- 右边 -->
      <template v-slot:right>
        <show-trait></show-trait>
      </template>
    </info-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InfoPanel from '@/components/Info-Panel.vue';
import ShowRoles from './characteristic/ShowRoles.vue';
import ShowTrait from './characteristic/ShowTrait.vue';

export default defineComponent({
  components: {
    InfoPanel,
    ShowRoles,
    ShowTrait
  },
  setup() {
    return {};
  }
});
</script>

<style scoped lang="less"></style>
