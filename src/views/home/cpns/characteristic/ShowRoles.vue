<template>
  <div class="show-roles">
    <!-- 1.文字描述属性区域 -->
    <article>
      <h5>{{ brosInfo[currentBro].name }}</h5>
      <h6>{{ brosInfo[currentBro].title }}</h6>
      <div>
        <!-- 站位 -->
        <em>站&emsp;&emsp;位:&emsp;</em><span>{{ brosInfo[currentBro].position }}</span>
        <br />
        <!-- 攻击目标 -->
        <em>攻击目标:&emsp;</em><span>{{ brosInfo[currentBro].target }}</span>
        <br />
        <!-- 优势属性 -->
        <em>优势属性:&emsp;</em><span>{{ brosInfo[currentBro].advantage }}</span>
        <br />
        <!-- 战场定位 -->
        <em>战场定位:&emsp;</em><span>{{ brosInfo[currentBro].battlefield_desc }}</span>
      </div>
    </article>
    <!-- 2.葫芦娃大图 -->
    <transition name="largeImgPicture1" appear>
      <img v-show="isShow" :src="largeImageUrl" class="largeImgPicture" alt="" />
    </transition>
    <!-- 3.四个技能图标 -->
    <section class="skillsImg">
      <template v-for="(skillUrl, index) in brosInfo[currentBro].skillsUrl" :key="skillUrl">
        <el-popover
          placement="right-start"
          :width="0"
          trigger="hover"
          :show-arrow="false"
          :offset="0"
        >
          <!-- 技能描述-->
          <div class="skillPropOver">
            <h6>{{ brosInfo[currentBro].skillsDesc[index].title }}</h6>
            <p>{{ brosInfo[currentBro].skillsDesc[index].desc }}</p>
          </div>

          <!-- 触发按钮: 技能图标 -->
          <template #reference>
            <div class="skillBox">
              <img :src="skillUrl" alt="" />
              <!-- 技能类型图标 -->
              <i
                class="skillIcon"
                :style="{
                  background: `url(${getImgUrl(
                    `/showRoles/skill-icon-${brosInfo[currentBro].skillsDesc[index].type}.png`
                  )}) no-repeat`,
                  backgroundSize: 'contain'
                }"
              ></i>
            </div>
          </template>
        </el-popover>
      </template>
    </section>
    <!-- 4.切换角色的头像按钮 -->
    <nav class="gourd-bros">
      <template v-for="(item, index) in 7" :key="item">
        <div
          class="g-box"
          :class="{ broActive: currentBro === index }"
          @click="changeCurrentBro(index)"
        >
          <img :src="getImgUrl('/showRoles/bro' + (index + 1) + '.png')" alt="" />
        </div>
      </template>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { getImgUrl } from '@/constant/imageBaseUrl';
import { brosInfo } from './config/brosInfo';

export default defineComponent({
  setup() {
    const currentBro = ref(0);
    const isShow = ref(true);
    const largeImageUrl = ref(brosInfo[currentBro.value].largeImageUrl); // 葫芦娃大图的url, 为了实现动画单独抽出.
    const changeCurrentBro = (index: number) => {
      if (index === currentBro.value) return;
      // 点击先消失
      isShow.value = false;
      currentBro.value = index;
      setTimeout(() => {
        largeImageUrl.value = brosInfo[currentBro.value].largeImageUrl;
        isShow.value = true;
      }, 300);
    };

    return {
      getImgUrl,
      currentBro,
      changeCurrentBro,
      brosInfo,
      isShow,
      largeImageUrl
    };
  }
});
</script>

<style scoped lang="less">
@import url('~@/assets/css/config.less');
@import url('~@/assets/css/tools/arrangeLocation.less');
/* el-popoverz组件 自带属性，为的是消除自带样式 */
.el-popover.el-popper {
  background-color: transparent !important;
  border: 0 !important;
  padding: 0 !important;
}
.show-roles {
  position: relative;
  overflow: hidden;
  margin: 1.2vw 0 0 0.5vw;
  width: 47vw;
  height: 26.5vw;
  background: url('@{imgBaseUrl}/showRoles/bg.png') no-repeat;
  background-size: contain;
}
.gourd-bros {
  position: absolute;
  bottom: 1vw;
  left: 2.3vw;
  width: 16vw;
  .g-box {
    display: inline-block;
    margin-left: -0.8vw;
    margin-top: -1.1vw;
    cursor: pointer;
    &:last-child {
      position: absolute;
      bottom: 0.23vw;
      right: -0.8vw;
    }
    img {
      width: 5vw;
      height: 5vw;
    }
  }
  .broActive {
    background: url('@{imgBaseUrl}/showRoles/broActive.png') no-repeat;
    background-size: 4.8vw;
    background-position: 0.2vw 0vw;
  }
}
article {
  width: 15vw;
  height: 16vw;
  color: #621a00;
  margin-left: 2.6vw;
  h5 {
    font-weight: normal;
    font-family: dragonBookFont;
    font-size: 4.5vw;
    margin-left: -0.6vw;
  }
  h6 {
    font-family: SourceBold;
    font-weight: bold;
    font-size: 1.6vw;
    margin-top: -1.4vw;
  }
  div {
    margin-top: 0.7vw;
    width: 14.2vw;
    font-size: 0.9vw;
    em {
      font-family: SourceBold;
      font-weight: bold;
    }
    span:last-child {
      float: right;
      width: 9.5vw;
      margin-top: -1.3vw;
    }
  }
}
/* 葫芦娃照片大图 */
.largeImgPicture {
  position: absolute;
  top: 1vw;
  right: 9vw;
  width: 17vw;
}
/* 技能图标 */
.skillsImg {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 1.5vw;
  right: 1vw;

  .skillBox {
    position: relative;
    width: 5.5vw;
    height: 5.5vw;
    padding-left: 0.85vw;
    padding-top: 0.85vw;
    background: url('@{imgBaseUrl}/showRoles/skillBoxBg.png') no-repeat;
    background-size: contain;
    &:nth-child(1) {
      padding-top: 0.9vw;
    }
    img {
      width: 3.85vw;
      border-radius: 50%;
    }
    .skillIcon {
      position: absolute;
      top: 0.5vw;
      left: 0.5vw;
      width: 1.8vw;
      height: 1.8vw;
      // z-index: 999;
    }
  }
}
// .largeImgPicture1-enter-from,
// .largeImgPicture1-leave-to {
//   opacity: 0;
// }
// .largeImgPicture1-enter-to,
// .largeImgPicture1-leave-from {
//   opacity: 1;
// }
// .largeImgPicture1-enter-active,
// .largeImgPicture1-leave-active {
//   transition: all 2s linear;
// }
.largeImgPicture1-enter-active {
  transition: all 0.3s ease-out;
}

.largeImgPicture1-leave-active {
  // cubic-bezier(1, 0.5, 0.8, 1)
  transition: all 0.3s ease-in;
}

.largeImgPicture1-enter-from,
.largeImgPicture1-leave-to {
  transform: translateX(1.0417vw);
  opacity: 0;
}

/* 技能介绍 */
.skillPropOver {
  position: absolute;
  top: -4vw;
  left: -2vw;
  padding: 1vw 0vw 2vw 1.3vw;
  min-width: 19vw;
  text-align: left;
  // width: 16.1979vw;
  // min-width: 10vw;
  color: #621a00;
  background: url('@{imgBaseUrl}/showRoles/skillPropOver.png') no-repeat;
  background-size: contain;
  // background-color: pink;
  h6 {
    display: block;
    font-family: SourceBold;
    font-weight: 900;
    font-size: 1.1vw;
  }
  p {
    display: block;
    // height: 50vw;
    font-size: 0.78vw;
    padding-right: 2vw;
    word-break: break-all;
    margin-top: 0.3vw;
  }
  ::v-deep(.el-popover.el-popper) {
    background-color: transparent !important;
    border: 0 !important;
    padding: 0 !important;
  }
}
</style>
