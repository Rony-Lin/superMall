// px=>vw规范
module.exports = {
  plugins:{
    autoprefixer:{},
    "postcss-px-to-viewport":{
      viewportWidth:375,  //视窗的宽度，对应的是我们设计稿的宽度
      viewportHeight:667, //视窗的高度，对应的是我们设计稿的高度，（也可不配置）
      unitPrecision:5, //指定‘px’转换成视窗单位值的小数位数 （在无法整除的情况下）
      viewportUnit:'vw', //指定需要转换成的视窗单位，建议使用vw
      selectorBlackList:['ignore','tab-bar','tab-bar-item'], //指定不需转换的类
      minPixelValue:1, //小于或等于‘1px’不需要转换成视窗单位。
      mediaQuery:false //允许在媒体查询中转换成px
    }
  }
}