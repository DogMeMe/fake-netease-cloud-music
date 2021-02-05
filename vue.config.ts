import path from "path";
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
  publicPath: "/",
  outputDir: "dist",
  indexPath: "index.html",
  configureWebpack: {
    resolve: {},
  },
  chainWebpack: (config) => {
   
  },
};
