移动端自适应解决方案

一、项目中安装lib-flexible
yarn add lib-flexible --save

二、在项目的入口main.js文件中引入lib-flexible

import 'lib-flexible'

三、安装postcss-px2rem-exclude
yarn add postcss-px2rem-exclude
不使用postcss-px2rem 原因：
它将第三方组件的css文件复制出来第三方库的css代码px统一扩大2倍

四、配置postcss.config.js

module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px2rem-exclude": {
      remUnit: 75,
      exclude: /node_modules|folder_name/i
    }
  }
};