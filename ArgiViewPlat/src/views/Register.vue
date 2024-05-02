<template>
  <div class="background">
    <div class="video-background">
      <img class="image-background" src="../assets/back.jpg" alt="Background Image" style="width:100%;height:100%">
    </div>
    <div class="register-container">
      <el-card class="register-panel" shadow="hover">
        <router-link to="/" class="back-link">
          <i class="el-icon-arrow-left"></i> 
        </router-link>
        <!-- Logo 图标 -->
        <img src="../assets/logo.png" alt="Logo" class="logo">
        <h1>注册</h1>
        <!-- 注册表单 -->
        <el-form :model="formData" class="login-form" @submit.native.prevent="register">
          <el-form-item label="用&nbsp;&nbsp;户&nbsp;&nbsp;名: " required>
            <el-input v-model="formData.username" placeholder="请输入邮箱/手机号/账号"></el-input>
          </el-form-item>
          <el-form-item label="密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码: " required>
            <el-input v-model="formData.password" type="password" :show-password="showPassword" @click.native="togglePasswordVisibility" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="确认密码:" required>
            <el-input v-model="confirmPassword" type="password" placeholder="请再次输入密码"></el-input>
          </el-form-item>
          <el-form-item v-if="!isPasswordValid" class="password-tips">
            <span>至少八个字符，至少一个字母和一个数字</span>
          </el-form-item>
          <el-form-item class="register-button-container">
            <el-button type="primary" native-type="submit" class="register-button">注册</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      formData: {
        username: '',
        password: ''
      },
      confirmPassword: '',
      showPassword: false
    };
  },
  methods: {
    async register() {
      try {
        const { username, password } = this.formData;
        // 向后端发送注册请求
        const response = await axios.post('/api/register', { username, password });
        if (response.status === 200) {
          // 注册成功，可以处理一些逻辑，例如显示成功消息等
          console.log('注册成功');
          this.$message.success('注册成功，请登录');
          // 可以跳转到登录页面
          this.$router.push('/login');
        } else {
          console.log('注册失败，请稍后重试');
          this.$message.error('注册失败，请稍后重试');
        }
      } catch (error) {
        console.error('注册失败:', error);
      }
    },
    validateForm() {
      if (!this.formData.username || !this.formData.password || !this.confirmPassword) {
        return false;
      }
      if (this.formData.password !== this.confirmPassword) {
        return false;
      }
      return true;
    },
    isPasswordValid() {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      return passwordRegex.test(this.formData.password);
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
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
/* 其他样式 */
.back-link {
  color: #1486e2;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.back-link:hover .back-text {
  display: inline-block;
}
.register-container {
  text-align: center;
  position: relative;
  margin-top: 100px;
}
.logo {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
}

h1 {
  margin-bottom: 20px;
}
.register-panel {
  padding: 20px;
}
.login-form {
  display: flex;
  flex-direction: column;
}
.password-tips {
  margin-top: 10px;
  color: red;
}
.register-button-container {
  margin-top: 20px;
  text-align: center;
  padding-left: 80px;
}
.register-button {
  width: 120px;
}
</style>
