// import { defineProps, withDefaults, defineEmits, computed, onMounted } from 'vue';
// // import DialogBox from '@/components/Dialog-Box.vue';

// // import { ComponentPropsOptions } from 'node_modules/@vue/runtime-coredist/runtime-core.d.ts';

// export function useDialog() {
//   // const props = defineProps({
//   //   dialogControl: {
//   //     type: Boolean,
//   //     required: true
//   //   }
//   // });
//   onMounted(() => {
//     const props = withDefaults(
//       defineProps<{
//         dialogControl: boolean;
//       }>(),
//       {
//         dialogControl: false
//       }
//     );
//     const emit = defineEmits(['update:dialogControl']);

//     // const _dialogControl = computed({
//     //   get: () => {
//     //     return props.dialogControl;
//     //   },
//     //   set(newVal: boolean) {
//     //     emit('update:dialogControl', newVal);
//     //   }
//     // });
//     // return [props, DialogBox, _dialogControl];
//   });
// }
