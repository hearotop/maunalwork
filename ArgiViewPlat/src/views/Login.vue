<template>
  <div class="background">
    <div class="video-background">
      <img class="image-background" src="../assets/back.jpg" alt="Background Image" style="width:100%;height:100%">
    </div>
    <div class="login-container">
      <el-card class="login-panel" shadow="hover" :style="{ width: '400px' }">
        <img src="../assets/logo.png" alt="Logo" class="logo">
        <h1>登录</h1>
        <el-form :model="formData" class="login-form" @submit.native.prevent="login">
          <el-form-item label="用户名:" required>
            <el-input v-model="formData.username" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item label="密码:" required>
            <el-input type="password" v-model="formData.password" prefix-icon="el-icon-lock"></el-input>
          </el-form-item>
          <el-form-item>
            <small><router-link to="/forgot-password">忘记密码？</router-link></small>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
            <router-link to="/register"><el-button>注册</el-button></router-link>
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
        password: '',
        wechatIcon: '../assets/wechat.png',
        googleIcon: '../assets/google.png',
        microsoftIcon: '../assets/microsoft.png',
        alipayIcon: '../assets/alipay.png'
      }
    }
  },
  methods: {
    async login() {
      try {
        if (this.formData.username === 'admin' && this.formData.password === 'admin') {
          console.log('登录成功，准备跳转到首页');
          localStorage.setItem('userInfo', JSON.stringify(this.formData));
          this.currentPassword = this.formData.password;
          this.$router.push('/home/Weather');
          this.$message({
            message: '登录成功',
            type: 'success'
          });
        } else {
          console.log('登录失败，请检查用户名和密码');
          this.$message({
            message: '登录失败，请检查用户名和密码',
            type: 'warning'
          });
        }
      } catch (error) {
        console.error('登录失败:', error);
      }
    }
  }
}
</script>


<style scoped>
.el-input {
  color: black;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.login-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
}

h1 {
  margin-bottom: 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.small {
  font-size: 12px;
}

.login-panel {
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
