import DialogBox from '@/components/Dialog-Box.vue';
// import { ComponentPropsOptions } from 'node_modules/@vue/runtime-coredist/runtime-core.d.ts';

interface It {
  props: any;
  components: any;
  computed: {
    _dialogControl: any;
  };
  emits: any;
}

export const mixinDialog_box: It = {
  props: {
    dialogControl: {
      type: Boolean,
      required: true
    }
  },

  components: {
    DialogBox
  },

  computed: {
    _dialogControl: {
      get(): string {
        return this.dialogControl;
      },
      set(newVal: boolean) {
        this.$emit('update:dialogControl', newVal);
      }
    }
  },
  emits: ['update:dialogControl']
};
