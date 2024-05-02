<template>
  <div>
    <iframe id="Video" src="/src/assets/entrance.html" width="100%" height="100%" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  // 组件的逻辑代码
}
</script>

<style>
#Video {
  width: 1980px; /* 设置 iframe 宽度为2000px */
  height: 2000px;  /* 设置 iframe 高度为100% 视窗高度，你可以根据需要调整 */
  overflow: hidden; /* 隐藏滚动条 */
}
body {
  overflow: hidden; /* 隐藏页面的滚动条 */
}
/* 可以添加一些样式来美化组件 */
</style>
import DHPlayer from "你放的地址/HPlayer"
//export default下添加
components: {
DHPlayer
},
//template添加
