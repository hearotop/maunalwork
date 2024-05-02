<template>
  <div class="f-header" style="background-color: white;">
    <div class="header">
      <div class="logo">
        <img src="../assets/logo.png" alt="Logo">
      </div>
      <span id="platform-name" class="header-title" style="text-align: left; display: block; width: 100%;">智慧乡村服务平台</span>
      <div class="header-content">
        <div class="user-info">
          <el-button type="text" @click="handleRefresh" class="refresh-btn">刷新</el-button>
          <el-button type="text" @click="handleLogout" class="logout-btn">退出登录</el-button>
          <el-avatar src="src/assets/google.png"></el-avatar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
  return {
    isZoomedIn: false,
    isZoomedOut: false,
    isFullscreen: false,
    changePasswordDialogVisible: false,
    changePasswordForm: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    },
    currentPassword: '' // 保存当前登录用户的密码
  };
},
  methods: {
    handleRefresh() {
      console.log("页面已刷新");
      location.reload(); // 刷新页面
    },
  
 
    handleLogout() {
      // 弹出确认框
      if (confirm("确定退出登录吗？")) {
        // 执行退出登录操作
        console.log("执行退出登录操作");
        // 清除用户登录信息
        localStorage.removeItem('userInfo');
        // 跳转到登录页面
        this.$router.push("/");
      }
    }
  },
  created() {
    // 检查用户登录状态
    if (!localStorage.getItem('userInfo')) {
      // 如果用户未登录，将其导航到登录页面
      this.$router.push("/");
    }
  }
};
</script>
<style scoped>
.f-header {
  @apply flex items-center bg-indigo-700 text-light-50 fixed top-0 left-0 right-0; 
  width:100%;
  height: 64px;
  background-color: white!important; /* 设置整个区域背景色为白色 */
}

.logo {
  width: 20px;
  @apply flex justify-center items-center text-xl font-thin;
  margin-top:5px;
}




.header-title {
  color: red;
  font-size:30px;
}

.f-header .dropdown {
  height: 64px;
  cursor: pointer;
  @apply flex justify-center items-center mx-5;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width:100%;
}

.logo img {
  height: 50px;
  margin-right: 20px;
}

.header-content {
  display: flex;
  align-items: center;
}

.header-title {
  margin-left: 100px;
}


.user-info {
  display: flex;
  align-items: center;
  margin-right: 10px; /* 调整右外边距为 10px */
}

.user-info .el-avatar {
  margin-right: -10px;
}

.user-info .logout-btn {
  z-index: 9999; /* 确保按钮在最上层显示 */
}

.refresh-btn {
  background-color: #FFA07A !important; /* 刷新按钮背景颜色 */
  margin-right: 10px; /* 调整右外边距为 10px */
  margin-left: -10px; /* 左移10px */
}

/* Add this style to change logout button color to red */
.logout-btn {
  color: red; /* 修改退出按钮颜色为红色 */
  margin-left: -10px; /* 左移10px */
}
</style>