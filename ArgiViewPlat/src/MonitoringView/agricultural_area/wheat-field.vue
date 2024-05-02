<template>
  <div>
    <!-- Adjusted iframe with the specified width and height -->
    <iframe id="Video" src="/src/assets/wheat-field.mp4" width="2000px" height="100%" frameborder="0" autoplay controls="false"></iframe>
  </div>
</template>

<style>
#Video {
   width: 960px; /* 设置 iframe 宽度为2000px */
  height: 480px;/* 设置 iframe 高度为100% 视窗高度，你可以根据需要调整 */
  overflow: hidden; /* 隐藏滚动条 */
}
body {
  overflow: hidden; /* 隐藏页面的滚动条 */
}
/* 可以添加一些样式来美化组件 */
</style>
