<template>
  <video ref="videoPlayer" style="width:100%;height:100%;" controls autoplay muted>
    <source :src="videoSource" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</template>
<script>
export default {
  data() {
    return {
      videoData: null, // 保存视频数据
      currentVideoIndex: 0, // 当前播放的视频索引
      currentVideoPosition: 0 // 当前视频的播放位置
    };
  },
  mounted() {
    this.fetchVideoList();
  },
  methods: {
    // 发送 Ajax 请求到后端获取视频列表
    fetchVideoList() {
      fetch('http://127.0.0.1:5001/video')
        .then(response => response.json())
        .then(data => {
          // 保存视频数据
          this.videoData = data;

          // 如果视频列表不为空
          if (this.videoData.video_list.length > 0) {
            // 开始自动播放视频队列
            this.playNextVideo();
          }
        })
        .catch(error => console.error('Error fetching video list:', error));
    },
    // 播放指定 URL 的视频
    playVideo(videoUrl, startPosition) {
      this.$refs.videoPlayer.src = videoUrl;
      this.$refs.videoPlayer.currentTime = startPosition;
      this.$refs.videoPlayer.play();
    },
    // 播放下一个视频
    playNextVideo() {
      // 如果所有视频都已经播放完毕，重新播放第一个视频
      if (this.currentVideoIndex >= this.videoData.video_list.length) {
        this.currentVideoIndex = 0;
      }

      // 播放当前索引指向的视频，并在播放结束时播放下一个视频
      this.playVideo(this.videoData.video_list[this.currentVideoIndex].url, this.currentVideoPosition);

      // 播放结束事件监听器
      this.$refs.videoPlayer.addEventListener('ended', () => {
        // 更新当前视频索引和播放位置
        this.currentVideoIndex++;
        this.currentVideoPosition = 0;

        // 保存当前视频索引和播放位置到本地存储
        localStorage.setItem('currentVideoIndex', this.currentVideoIndex);
        localStorage.setItem('currentVideoPosition', this.currentVideoPosition);

        this.playNextVideo();
      });
      // 时间更新事件监听器，保存当前播放位置
      this.$refs.videoPlayer.addEventListener('timeupdate', () => {
        this.currentVideoPosition = this.$refs.videoPlayer.currentTime;
        localStorage.setItem('currentVideoPosition', this.currentVideoPosition);
      });
    }
  }
};
</script>
