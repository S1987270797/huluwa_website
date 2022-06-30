<template>
  <!-- 导入使用dialog -->
  <!-- 用v-model:dialogVisible绑定组件dialog-box,默认传递变量dialogVisible的值为_dialogControl,默认监听其事件update:dialogVisible(这里采用默认监听这将会自动修改传递的值,也是v-model双向绑定的特点) -->
  <dialog-box v-model:dialogVisible="_dialogControl">
    <div class="ActivityRulesDialog">
      <div class="main">
        <p>
          1、中华人民共和国（the People's Republic of China），简称“中国”，成立于1949年10月1日 [1]
          ，位于亚洲东部，太平洋西岸。
        </p>
        <p>
          2、是工人阶级领导的、以工农联盟为基础的人民民主专政的社会主义国家 ，以五星红旗为国旗
          、《义勇军进行曲》为国歌 ，国徽内容为国旗、天安门、齿轮和麦稻穗
        </p>
        <p>
          3、通用语言文字是普通话和规范汉字 ，首都北京
          ，是一个以汉族为主体、56个民族共同组成的统一的多民族国家。
        </p>
        <p>
          4、中国陆地面积约960万平方千米，东部和南部大陆海岸线1.8万多千米，内海和边海的水域面积约470多万平方千米。海域分布有大小岛屿7600多个，其中台湾岛最大，面积35798平方千米
          [2] 。
        </p>
      </div>
    </div>
  </dialog-box>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { mixinDialog_box } from '@/mixins/mixinDialog-Box'; // 准备删除

export default defineComponent({
  mixins: [mixinDialog_box], // 准备删除
  setup() {
    return {};
  }
});
// <script setup lang="ts">
// import { useDialog } from '@/hooks/consulting/useDialogBox';
// useDialog();
</script>

<style scoped lang="less">
@import url('~@/assets/css/config.less');
@import url('~@/assets/css/tools/arrangeLocation.less');
.ActivityRulesDialog {
  overflow: hidden;
  width: 29vw;
  height: 21vw;
  background: url('@{imgBaseUrl}/buildUpComrades/activityRulesDialogBg.png') no-repeat;
  background-size: contain;
  // background-position: -13vw -13.5vw;
  .main {
    width: 25vw;
    height: 15vw;
    margin: 5.2vw auto 0;
    color: #b0846f;
    p {
      margin-top: 0.3vw;
      font-size: 0.7vw;
    }
  }
}
</style>
