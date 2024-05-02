<template>
  <div class="root-container">
    <!-- Image Background -->
    <div class="image-container rounded-lg overflow-hidden">
      <img class="image-background" src="../assets/back.jpg" alt="Background Image">
      <div class="white-overlay"></div>
    </div>
    <el-container class="header-top">
      <el-header class="header">
        <Header/>
      </el-header>
      <el-container class="main-container">
        <el-aside class="sidebar">
          <Asider/>
        </el-aside>
        <el-main class="main">

          <!-- Router-view with transition -->
          <transition name="fade" mode="out-in">
            <router-view/>
          </transition>
          <div class="placeholder"></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '../Layouts/Header.vue'
import Asider from '../Layouts/Aside.vue'
import Weather from '../Dashboard/Weather.vue'

export default {
  components: {
    Asider,
    Header,
    Weather
  },
};
</script>

<style scoped>
/* Set the image background to fill the entire page */
.image-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.image-background {
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; /* Put the image background at the bottom layer */
}
.white-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}



.header-top {
  width: 100%;
  height: 100vh; /* Set to 100vh to occupy the entire screen height */
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.header {
  display: flex;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 60px;
  background: white !important;
}

.main-container {
  flex: 1;
  display: flex;
}

.main {
  background-color: rgba(255, 255, 255, 0);
  width: 100%;
  height: 100%;
  display: flex;
}

.sidebar {
  width: 200px;
  background-color: rgba(255, 255, 255, 0);
  height: 100%;
}

.placeholder {
  height: 300px; /* 根据需要设置足够的高度 */
}

</style>
