<template>
  <iframe id="geoFrame" :srcdoc="iframeContent" frameborder="0"></iframe>
</template>

<script>
export default {
  data() {
    return {
      iframeContent: '', // 用于存储从 API 获取到的 iframe 内容
    };
  },
  mounted() {
    this.fetchIframeContent();
  },
  methods: {
    fetchIframeContent() {
      fetch('http://127.0.0.1:5001/goland')
        .then(response => response.text())
        .then(html => {
          this.iframeContent = html;
        })
        .catch(error => console.error('Error fetching data:', error));
    },
  },
};
</script>

<style>
#geoFrame {
  width: 100%; /* 设置 iframe 宽度为100% */
  height: 100vh; /* 设置 iframe 高度为100% 视窗高度，你可以根据需要调整 */
  max-width: 100%; /* 设置最大宽度 */
  overflow: hidden; /* 隐藏滚动条 */ 

}

body {
  overflow: hidden; /* 隐藏页面的滚动条 */
  background-color:white !important;
}
</style>