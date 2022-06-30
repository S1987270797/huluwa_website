// https://wcdn.tomatogames.com/web/guonei/hlw/website/assets/img/buildUpComrades/gourdGray.png
function getImgUrl(uri: string) {
  if (process.env.NODE_ENV === 'development') {
    return require('@/assets/img' + uri);
  } else if (process.env.NODE_ENV === 'production') {
    // return 'https://wcdn.tomatogames.com/web/guonei/hlw/website/assets/img' + uri;
    return require('@/assets/img' + uri);
  } else {
    console.log('test 环境');
  }
}

export { getImgUrl };
