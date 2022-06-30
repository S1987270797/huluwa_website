<template>
  <div class="play-game" ref="playGameRef">
    <div class="backgroundImg"></div>
    <!-- logo -->
    <span class="logo"></span>
    <!-- 头部导航栏 -->
    <nav>
      <div>
        <span>官网首页</span>
        <ul>
          <li @click="slideToMainPage(0)">游戏福利</li>
          <li @click="slideToMainPage(1)">游戏特色</li>
          <li @click="slideToMainPage(2)">游戏咨询</li>
        </ul>
      </div>
    </nav>
    <!-- 游戏放置区域 -->
    <section class="game">
      123
      <div>123</div>
    </section>
    <!-- 下载按钮与适龄提示 -->
    <aside class="downloadAndTips">
      <div class="download">
        <p>手机扫码下载</p>
        <p>多端数据互通</p>
        <img src="" alt="" />
        <div>
          <a href="#"></a>
          <a href="#"></a>
        </div>
      </div>
      <span class="ageTips"></span>
    </aside>
    <!-- 向下滑动提示 -->
    <i class="scrollTips"></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick } from 'vue';

export default defineComponent({
  emits: ['slideToMainPage'],
  setup(props, { emit }) {
    const playGameRef = ref();
    // 跳转到mainPage的逻辑
    const slideToMainPage = (i: number) => {
      emit('slideToMainPage', i);
    };
    // 监听页面高度
    nextTick(() => {
      playGameRef.value!.style.backgroundPosition = `
         0 -${1040 - window.outerHeight}px
      `;
      //  监听高度 实时调整背景图片位置。
      window.addEventListener('resize', (e: any) => {
        playGameRef.value!.style.backgroundPosition = `
         0 -${1040 - e.target.outerHeight}px`;
      });
    });
    return {
      slideToMainPage,
      playGameRef
    };
  }
});
</script>

<style scoped lang="less">
@import url('~@/assets/css/config.less'); // 导入配置
.play-game {
  position: relative;
  overflow: hidden;
  width: 1920px;
  height: 1080px;
  min-width: 1080px !important;
  background: url('@{imgBaseUrl}/playGame/bg.png') no-repeat;
  background-size: contain;
  background-position: 0 0;
  // .backgroundImg {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   width: 1920px;
  //   height: 1080px;
  //   background: url('@{imgBaseUrl}/playGame/bg.png') no-repeat;
  //   background-size: contain;
  // }
  /* 头上的导航栏 */
  nav {
    position: relative;
    width: 100%;
    height: 4.5833vw;
    background-color: #4b96cf;
    font-size: 1.07vw;
    color: #fff;
    div {
      position: absolute;
      top: 1.5vw;
      left: 66vw;
      display: flex;
      width: 25.2604vw;
      ul {
        display: flex;
        width: 18vw;
        justify-content: space-between;
        margin-left: 1vw;
        li {
          cursor: pointer;
          // white-space: nowrap;
          list-style: none;
          width: 6vw;
          &::before {
            display: inline-block;
            content: '';
            width: 0.4vw;
            height: 0.4vw;
            transform: rotate(45deg);
            background-color: #fff;
            margin-bottom: 0.2vw;
            margin-right: 0.8vw;
          }
        }
      }
    }
  }
  /* logo */
  .logo {
    position: absolute;
    top: 1.5vw;
    left: 1vw;
    width: 12vw;
    height: 8vw;
    background: url('@{imgBaseUrl}/playGame/logo.png') no-repeat;
    background-size: contain;
    z-index: 1;
  }
  /* 游戏放置区域 */
  .game {
    box-sizing: content-box;
    position: absolute;
    top: 0vh;
    left: 50vw;
    transform: translate(-50%);
    width: 52vh;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    border-left: 10px solid #4b96cf;
    border-right: 10px solid #4b96cf;
    z-index: 9;
    div {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
  /* 下载 */
  .downloadAndTips {
    position: absolute;
    top: 83vh;
    left: 64vw;
    width: 50vh;
    height: 16vh;
    .download {
      position: relative;
      overflow: hidden;
      width: 38vh;
      height: 16vh;
      background-color: #4a96d0;
      box-shadow: 0px 0px 0px 5px rgba(255, 255, 255, 0.3);
      p:first-child {
        position: absolute;
        left: 1.0667vh;
        top: 1.5vh;
        width: 1.4815vh;
        height: auto;
        font-size: 1.8519vh;
        font-family: SourceBold;
        font-weight: 700;
        line-height: 2.037vh;
      }
      p:nth-child(2) {
        position: absolute;
        left: 3.5556vh;
        top: 3.2vh;
        width: 1.1111vh;
        font-size: 1.4815vh;
        font-weight: 700;
        line-height: 1.4815vh;
      }
      img {
        position: absolute;
        top: 1vh;
        left: 6vh;
        width: 14.0741vh;
        height: 14.0741vh;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.3);
      }
      div {
        display: flex;
        flex-wrap: wrap;
        // justify-content: space-around;
        // position: absolute;
        // top: 0vh;
        // right: 1vh;
        width: 15.463vh;
        height: 100%;
        // background-color: pink;
        margin-top: 2vh;
        margin-right: 1vh;
        float: right;
        a {
          // position: absolute;
          // top: 2vh;
          // right: 1vh;
          display: block;
          width: 15.463vh;
          height: 5.6481vh;
          background: url('@{imgBaseUrl}/playGame/iosDownload.png') no-repeat;
          background-size: 100%;
          transition: all 0.3s;
        }
        a:hover {
          transform: scale(0.95);
        }
        a:nth-of-type(2) {
          margin-top: -4vh;
          background: url('@{imgBaseUrl}/playGame/androidDownload.png') no-repeat;
          background-size: 100%;
        }
      }
    }
    .ageTips {
      position: absolute;
      right: 1vh;
      bottom: 0;
      width: 9.537vh;
      height: 11.6vh;
      background: url('@{imgBaseUrl}/playGame/suitableAgeTips.png') no-repeat;
      background-size: contain;
    }
  }
  /* 下滑提示 */
  .scrollTips {
    position: absolute;
    left: 30vw;
    top: 82vh;
    width: 9.8148vh;
    height: 14.4444vh;
    background: url('@{imgBaseUrl}/playGame/scrollTips.png') no-repeat;
    background-size: contain;
  }
}
</style>
