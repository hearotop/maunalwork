<template>
  <el-carousel :interval="5000" arrow="always" :height="carouselHeight" :width="carouselWidth">
    <el-carousel-item v-for="(picture, index) in pictureList" :key="index">
      <img  style="height:720px; width:1280px;" :src="picture.url" :alt="picture.name" @load="calculateCarouselSize">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    // 定义响应式变量
    const pictureList = ref([]); // 用于存储图片数据的数组
    const currentPictureIndex = ref(0); // 当前图片索引，默认为0
    const carouselHeight = ref("720px"); // 轮播组件的高度，默认为720px
    const carouselWidth = ref('1280px'); // 轮播组件的宽度，默认为auto

    // 组件挂载时获取图片数据
    onMounted(() => {
      fetchPictureList('http://127.0.0.1:5001/picture');
    });

    // 从服务器获取图片数据
    const fetchPictureList = () => {
      fetch('http://127.0.0.1:5001/picture')
        .then(response => response.json())
        .then(data => {
          pictureList.value = data.picture_list;
          console.log("图片数据:", pictureList.value); // 检查图片数据是否成功获取
        })
        .catch(error => console.error('获取图片数据时出错:', error));
    };

    // 图片加载完成后，计算轮播组件的大小
    const calculateCarouselSize = () => {
      // 获取第一张图片的尺寸
      const firstImage = document.querySelector('img');
      if (firstImage) {
        carouselHeight.value = `${firstImage.height}px`;
        carouselWidth.value = `${firstImage.width}px`;
      }
    };

    // 向模板提供数据和方法
    return {
      pictureList,
      currentPictureIndex,
      carouselHeight,
      carouselWidth,
      calculateCarouselSize
    };
  }
};
</script>

<style scoped>
/* 如果需要，可以添加作用域样式 */
</style>