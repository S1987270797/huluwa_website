<template>
  <div ref="divRef" class="divRef"></div>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref } from 'vue';

export default defineComponent({
  setup() {
    const divRef = ref<HTMLElement>();
    const p = document.createElement('p');
    p.textContent = 'hello typescript';

    nextTick(() => {
      divRef.value?.appendChild(p);
    });

    return {
      divRef
    };
  }
});
</script>

<style scoped lang="less">
.divRef {
  width: 200px;
  height: 200px;
  background-color: pink;
}
</style>
