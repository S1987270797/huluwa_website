<template>
  <el-popover
    v-model:visible="popoverVisible_2"
    placement="bottom"
    :width="'10vw'"
    trigger="manual"
  >
    <span class="overContent">手机号码格式错误</span>
    <template #reference>
      <slot></slot>
    </template>
  </el-popover>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  props: {
    popoverVisible: {
      type: Boolean,
      require: true
    },
    autoClose: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const temp1 = ref(true);
    console.log(temp1.value, 'temp1');

    // 做了一层转换
    const popoverVisible_2 = computed({
      get: () => {
        return props.popoverVisible;
      },
      set: (val) => {
        return val;
      }
    });
    // 自动关闭 // 做不到
    // if (props.autoClose > 0) {
    //   watch(
    //     () => popoverVisible_2.value,
    //     () => {
    //       if (popoverVisible_2.value) {
    //         setTimeout(() => {
    //           console.log(props.autoClose, 123);
    //           // temp1.value = false;
    //           console.log(popoverVisible_2.value, '111111111');
    //         }, props.autoClose);
    //       }
    //     }
    //   );
    // }
    return {
      popoverVisible_2,
      temp1
    };
  }
});
</script>

<style scoped lang="less">
.overContent {
  display: inline-block;
  padding: 1vw;
}
/* 与trigger="manual",意味着只能手动控制隐藏 */
::v-deep(.el-popover.el-popper) {
  text-align: center !important;
}
</style>
