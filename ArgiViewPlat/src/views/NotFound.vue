<template>
  <div class="centered-container">
    <el-result
      icon="warning"
      title="404提示"
      sub-title="你找的页面走丢了~"
    >
      <template #extra>
        <el-button type="primary" @click="$router.push('/home/Weather')">回到首页</el-button>
      </template>
    </el-result>
  </div>
</template>

<style scoped>
.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Use 100% of viewport height */
}
</style>
