<template>
  <div>
    <!-- 这个element组件写的时候就可以让你使用v-model. 所以这个组件默认就会接收model-value 与 在关闭时发射update:modelValue事件。手动监听 update:modelValue是为了将事件传递给上一个组件 -->
    <el-dialog
      :model-value="dialogVisible"
      @update:modelValue="closeDialog"
      :top="top"
      :width="'0vw'"
      :show-close="false"
      :append-to-body="true"
      @close="close"
    >
      <div class="dialog-box">
        <slot></slot>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    dialogVisible: {
      type: Boolean,
      required: true
    },
    top: {
      type: String,
      default: '20vw'
    }
  },
  emits: ['update:dialogVisible', 'dialogClose'],
  setup(props, { emit }) {
    const closeDialog = () => {
      console.log('关闭dialog');
      emit('update:dialogVisible', false);
      // 发出update:modelValue事件，使用我的组件就可以用v-model:dialogVisible="变量"绑定我.
    };
    // 发出dialog关闭的事件
    const close = () => {
      emit('dialogClose', 1);
    };
    return {
      closeDialog,
      close
    };
  }
});
</script>

<style scoped lang="less">
.dialog-box {
  overflow: auto;
  position: absolute;
  top: 0.4vw;
  left: 50%;
  // width: 29vw;
  // height: 21vw;
  transform: translateX(-50%);
}
</style>
