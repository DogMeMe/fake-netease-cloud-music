module.exports = {
  publicPath: "/",
  outputDir: "fakecloud",
  indexPath: "index.html",
  runtimeCompiler: true,
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       vue: "vue/dist/vue.esm-bundler.js",
  //     },
  //   },
  // },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('vue', 'vue/dist/vue.esm-bundler.js')
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('autoprefixer')({ // 配置使用 autoprefixer
            overrideBrowserslist: ['last 20 versions'] // 记得这里要把 browsers 改为 overrideBrowserslist，autoprefixer 新版本的写法有变
          })
        ]
      }
    }
  }
};
