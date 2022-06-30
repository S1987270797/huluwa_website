// import AutoImport from 'unplugin-auto-import/webpack';
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = {
  // 失败 整个项目都是从这个地址加载
  // publicPath:
  //   process.env.NODE_ENV === 'production'
  //     ? 'https://wcdn.tomatogames.com/web/guonei/hlw/website'
  //     : '',
  configureWebpack: {
    // 失败 vue不建议这样使用
    // output: {
    //   publicPath:
    //     process.env.NODE_ENV == 'production'
    //       ? 'https://wcdn.tomatogames.com/web/guonei/hlw/website/assets/img'
    //       : ''
    // },
    resolve: {
      alias: {
        // components: '@/components',
        ImgBaseUrl: '@/assets/img'
        // ImgBaseUrl: 'https://wcdn.tomatogames.com/web/guonei/hlw/website/assets/img'
        // ImgBaseUrl:
        //   process.env.NODE_ENV == 'production'
        //     ? `https ://wcdn.tomatogames.com/web/guonei/hlw/website/assets/img`
        //     : '@/assets/img'
      }
    },
    module: {
      // rules: [
      //   {
      //     test: /\.(jpe?g|png|gif|svg)$/,
      //     use: {
      //       loader: 'url-loader',
      //       options: {
      //         publicPath:
      //           process.env.NODE_ENV == 'production'
      //             ? `https ://wcdn.tomatogames.com/web/guonei/hlw/website/assets/img`
      //             : 'assets/img',
      //         outputPath: './assets/img',
      //         name: '[name].[ext]'
      //       }
      //     }
      //   }
      // ]
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
};
