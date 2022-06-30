<template>
  <div class="OptionsBar">
    <!-- 按钮 -->
    <div class="optionsBtns">
      <template v-for="(item, index) in itemListOfName" :key="item">
        <left-options-bar-item
          :itemName="(item as string)"
          :index="index"
          :activeIndex="activeBtn"
          @click="btnClick(index)"
        ></left-options-bar-item>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import LeftOptionsBarItem from './LeftOptionsBarItem.vue';

export default defineComponent({
  components: {
    LeftOptionsBarItem
  },
  props: {
    itemListOfName: {
      type: Array,
      required: true
    }
  },
  emits: ['currentBarItemChange'],
  setup(props, { emit }) {
    // 给每个按钮点击时加上 当前点击的特效。
    // 默认是0，点击每个barItem会切换， 刚刷新页面时会执行下面的一个函数，也会变换。
    let activeBtn = ref(0);
    const btnClick = (index: number) => {
      emit('currentBarItemChange', index);
      activeBtn.value = index;
    };

    /* # 利用路由切换的逻辑（已废弃）
    点击切换主面板的页面
    const router = useRouter();
    const btnClick = (index: number) => {
      activeBtn.value = index;
      router.replace(`/home/${props.itemListOfRouter[index]}`);
    };
    // 根据路由判断谁在选中当中
    // console.log(router.currentRoute.value.path);
    props.itemListOfRouter.forEach((item, index) => {
      if (router.currentRoute.value.path.includes(item as string)) {
        activeBtn.value = index;
      }
    }); */
    return {
      btnClick,
      activeBtn
    };
  }
});
</script>

<style scoped lang="less">
.optionsBtns {
  position: absolute;
  top: 3vw;
  left: 2vw;
}

// 选中按钮状态
</style>
