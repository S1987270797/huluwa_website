import { throttle } from '@/tools/throttle';

export function makeElInCenter(element: Element, className1: string) {
  // 判断窗口大小 调整大小的函数
  function resizeFn() {
    // 屏幕当前宽度 >= 屏幕最大宽度
    if (window.outerWidth >= window.screen.width * 0.95) {
      element.classList.add(className1);
    } else if (window.outerWidth <= window.screen.width * 0.8) {
      element.classList.remove(className1);
    }
  }
  // 立即执行一次
  resizeFn();
  //  监听高度 实时调整背景图片位置。
  window.addEventListener(
    'resize',
    // 节流函数trailing需要执行
    throttle(() => {
      resizeFn();
    }, 300)
  );
}
