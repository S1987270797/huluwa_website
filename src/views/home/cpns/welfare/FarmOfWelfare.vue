<template>
  <div class="farm">
    <img class="img" :src="getImgUrl('/farm/comingSoon.png')" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getImgUrl } from '@/constant/imageBaseUrl';

export default defineComponent({
  setup() {
    return {
      getImgUrl
    };
  }
});
</script>

<style scoped lang="less">
.farm {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  .img {
    width: 12.2396vw;
    height: 11.1979vw;
  }
}
</style>
