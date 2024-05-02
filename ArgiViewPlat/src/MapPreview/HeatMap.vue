<template>
  <div class="com">
    <iframe :src="htmlFilePath" width="100%" height="100%" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 设置 HTML 文件的路径
      htmlFilePath: '/src/assets/HeatMap.html' // 替换为实际的路径
    };
  }
};
</script>

<style scoped>
/* 样式可以根据需要自行调整 */
iframe {
  display: flex;
  margin: 0 auto;
 margin-top:0px;
  
}
.com{
  width:100%;
  height:100%
  
}
.body{
  overflow: hidden;
}
</style>
