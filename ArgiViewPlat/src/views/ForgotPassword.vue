<template>
       <div class="background">
      <div class="video-background">
        <img class="image-background" src="../assets/back.jpg" alt="Background Image"  style="width:100%;height:100%">
      </div>
      <div class="forgot-password-container">
        <el-card class="forgot-password-panel" shadow="hover">
          <router-link to="/" class="back-link">
          <i class="el-icon-arrow-left"></i> 
        </router-link>
          <!-- Logo 图标 -->
          <img src="../assets/logo.png" alt="Logo" class="logo">
          <h1>忘记密码</h1>
          <!-- 找回密码表单 -->
          <el-form ref="forgotPasswordForm" :model="formData" label-width="80px" @submit.native.prevent="sendResetLink">
            <el-form-item label="邮箱:" prop="email">
              <el-input v-model="formData.email" required></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" native-type="submit">发送重置链接</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </div>
  </template>
  
  <script>
  import { reactive } from 'vue'
  import { useRouter } from 'vue-router'
  
  export default {
    data() {
      return {
        formData: reactive({
          email: ''
        })
      };
    },
    methods: {
      sendResetLink() {
        // 在这里添加发送重置链接的逻辑
        console.log('发送重置链接中...');
        // 这里示意性地使用了Vue Router进行页面跳转
        const router = useRouter()
        router.push('/')
      }
    }
  };
  </script>
  
  <style scoped>
  .background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  object-fit: cover;
}
  .forgot-password-panel {
    //background-color: transparent; /* 设置背景为透明 */
    padding: 20px;
  }
  
  .forgot-password-container {
    text-align: center;
    margin-top: 100px;
    position: relative;
  }
  
  .logo {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
  }
  
  h1 {
    margin-bottom: 20px;
  }
  /* 其他样式 */
  .back-link {
  position: absolute;
  left: 20px;
  top: 20px;
  color: #409EFF; /* 设置颜色为蓝色，可以根据需求修改 */
  cursor: pointer;
  display: flex;
  align-items: center;
}

.back-link:hover::before {
  content: "返回登录页面";
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #303133;
  color: #fff;
  padding: 5px;
  border-radius: 3px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0.9;
}
  </style>
  