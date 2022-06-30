<template>
  <div class="build-up-comrades">
    <!-- 展示面板的标题 -->
    <div class="title">
      <h5>兄弟集结 各显神通</h5>
      <p>邀请好友进入游戏，获取丰厚礼包</p>
    </div>
    <!-- 展示面板的主体 -->
    <div class="main">
      <!-- 邀请进度,葫芦亮起来了 -->
      <div class="invitationProgress">
        <!-- 展示葫芦区域 -->
        <div class="gourds">
          <!-- 已经邀请了 x 个 -->
          <template v-for="progress in invitationProgress" :key="progress">
            <img :src="getImgUrl('/buildUpComrades/gourdRed.png')" alt="" />
          </template>
          <!-- 还差几个 -->
          <template v-for="progress in 5 - invitationProgress" :key="progress">
            <img :src="getImgUrl('/buildUpComrades/gourdGray.png')" alt="" />
          </template>
        </div>
        <p>
          已集结: <em>{{ invitationProgress }}/5</em>
        </p>
      </div>
      <!-- 奖品领取区域 -->
      <div class="get-awards">
        <!-- 三种奖品 -->
        <!-- availableStatus包括可领取时的外边框与红色的可领取,
              peelBg取消原来的灰色边框露出红色的边框 -->
        <div class="availableStatus">
          <img :src="getImgUrl('/buildUpComrades/award0.png')" class="" alt="" />
          <span class="peelBg"></span>
        </div>
        <div class="availableStatus">
          <img :src="getImgUrl('/buildUpComrades/award0.png')" alt="" />
          <!-- 可领取时取消这个btn原来的bgi, 他与availableStatus必须同时出现 -->
          <span class="peelBg"></span>
        </div>
        <div class="">
          <img :src="getImgUrl('/buildUpComrades/award0.png')" alt="" />
          <span></span>
        </div>
      </div>
      <!-- 邀请按钮 -->
      <span class="inviteRightNow" @click="dialogInvitationVisible = true">立即邀请</span>
    </div>
    <!-- 活动规则按钮及内容 -->
    <span class="activityRulesBtn" @click="dialogActivityRulesVisible = true">活动<br />规则</span>
    <!--活动规则弹窗 -->
    <activity-rules-dialog
      v-model:dialogControl="dialogActivityRulesVisible"
    ></activity-rules-dialog>
    <!-- 立即邀请弹窗 -->
    <invitation-dialog v-model:dialogControl="dialogInvitationVisible"></invitation-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useStore } from '@/store';

import ActivityRulesDialog from './dialog/ActivityRulesDialog.vue';
import InvitationDialog from './dialog/InvitationDialog.vue';
import { getImgUrl } from '@/constant/imageBaseUrl';

export default defineComponent({
  components: {
    ActivityRulesDialog,
    InvitationDialog
  },
  setup() {
    const store = useStore();
    // 从store里面拿到目前已邀请的人数
    const invitationProgress = computed(() => store.state.Home.invitationProgress);
    // 活动规则弹窗
    let dialogActivityRulesVisible = ref(false);
    // 立即邀请弹窗
    let dialogInvitationVisible = ref(false);
    return {
      getImgUrl,
      invitationProgress,
      dialogActivityRulesVisible,
      dialogInvitationVisible
    };
  }
});
</script>

<style scoped lang="less">
@import url('~@/assets/css/config.less');
@import url('~@/assets/css/tools/arrangeLocation.less');

.title {
  text-align: center;
  width: 100%;
  margin-top: 0.8vw;
  color: #621a00;

  h5 {
    font-family: 'SourceBold';
    font-size: 1.9vw;
  }
  p {
    font-size: 0.8vw;
    margin-top: -0.5vw;
  }
}
.main {
  .arrangeLocation(
    @top: 4.5vw;
    @left: 2.29vw;
    @width: 43.54vw;
    @height: 21.04vw;
    @bcgUli: 'buildUpComrades/buildUpBg.png'
  );
}

/* 邀请进度显示葫芦区域 */
.invitationProgress {
  width: 100%;
  height: 3.6vw;
  margin-top: 0.5vw;
  .gourds {
    display: flex;
    justify-content: space-between;
    width: 11.5vw;
    height: 2.1vw;
    margin: 0 auto;
    img {
      width: 1.6vw;
      height: 2.03vw;
    }
  }
  p {
    text-align: center;
    width: 8vw;
    height: 1vw;
    font-size: 0.9vw;
    display: block;
    margin: 0.3vw auto 0;
    em {
      color: #f52800;
    }
  }
}

// 奖品领取区域
.get-awards {
  width: 100%;
  padding-top: 1.622vw;
  padding-left: 6.55vw;
  div {
    display: inline-block;
    width: 6.5vw;
    height: 9vw;
    text-align: center;
    padding-top: 0.75vw;
    img {
      // display: inline-block;
      width: 5vw;
      height: 5vw;
      margin-left: 0.75vw !important;
    }
    &:nth-child(2) {
      margin-left: 5.4vw;
    }
    &:nth-child(3) {
      margin-left: 5.26vw;
    }
    span {
      width: 6.4vw;
      height: 2.1vw;
      display: block;
      margin-top: 0.8vw;
      margin-left: 0.1vw;
      line-height: 1.7vw;
      color: #fff;
      background: url('@{imgBaseUrl}/buildUpComrades/receiveBtn-unlock.png') no-repeat;
      background-size: contain;
      cursor: pointer;
    }
  }
  // 奖品可领取的转态
  .availableStatus {
    background: url('@{imgBaseUrl}/buildUpComrades/availableStatus-circle.png') no-repeat,
      url('@{imgBaseUrl}/buildUpComrades/receiveBtn-waitObtain.png') no-repeat;
    background-size: 6.7vw, 6vw, 2.1vw;
    background-position: -0.3vw 0.3vw, 0.15vw 6.55vw;
    img {
      margin-left: 1vw;
    }
  }
  // 去除背景图片
  .peelBg {
    background: transparent;
  }
}
/* 立即邀请按钮 */
.inviteRightNow {
  .arrangeLocation(
    @top: 18vw;
    @left: 17.29vw;
    @width: 8.5vw;
    @height: 2.5vw;
    @bcgUli: 'buildUpComrades/inviteRightNow.png'
  );
  text-align: center;
  line-height: 2.3vw;
  color: #fff;
  font-size: 1vw;
  cursor: pointer;
}
.activityRulesBtn {
  .arrangeLocation(
    @top: 5vw;
    @left: 41vw;
    @width: 3.8vw;
    @height: 3.8vw;
    @bcgUli: 'buildUpComrades/activityRulesBtn.png'
  );
  padding-top: 0.7vw;
  font-size: 0.7vw;
  text-align: center;
  line-height: 1vw;
  color: #fff;
  cursor: pointer;
}
</style>
