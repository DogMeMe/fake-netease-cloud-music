module.exports = {
  publicPath: "/",
  outputDir: "fakecloud",
  indexPath: "index.html",
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        vue: "vue/dist/vue.esm-bundler.js",
      },
    },
  },
  chainWebpack: (config) => {},
};
