<template>
  <iframe id="Frame" :srcdoc="iframeContent" frameborder="0"></iframe>
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
      fetch('http://127.0.0.1:5001/get_crop')
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
</style>