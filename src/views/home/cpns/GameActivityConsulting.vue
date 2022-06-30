<template>
  <div>
    <info-panel :titleImgUli="'/title2.png'" :twoButtonName="['游戏公告', '福利活动']">
      <!-- 插入两个组件 -->
      <template v-slot:left>
        <announcement></announcement>
      </template>
      <!-- 右边 -->
      <template v-slot:right>
        <welfare-activities></welfare-activities>
      </template>
    </info-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InfoPanel from '@/components/Info-Panel.vue';
import Announcement from './consulting/Announcement.vue';
import WelfareActivities from './consulting/WelfareActivities.vue';

export default defineComponent({
  components: {
    InfoPanel,
    Announcement,
    WelfareActivities
  },
  setup() {
    return {};
  }
});
</script>

<style scoped lang="less"></style>
